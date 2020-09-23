const Pool = require('../models/pool');
const User = require('../models/user');

const { handleNewPoolErrors } = require('../lib/helpers');

// Get all pools
exports.get_all_pools = async (req, res) => {
    const pools = await Pool.find();
    res.status(200).json({pools})
};

// Get single pool
exports.get_single_pool = async (req, res) => {
    try {
        const pool = await Pool.findOne({slug: req.params.slug})
            .populate('commish', 'username')
            .deepPopulate('participants.userId');
        res.status(200).json({pool})
    } catch(err) {
        console.log(err);
        res.sendStatus(400)
    }
}

// Create new pool
exports.new_pool = async (req, res) => {
    const newPool = new Pool({
        name: req.body.name,
        commish: req.user._id,
        league: req.body.league
    });
    try{
        const pool = await newPool.save();
        res.status(201).json({
            msg: 'New pool created',
            poolDetails: pool
        });
    } catch(err) {
        const errors = handleNewPoolErrors(err);
        res.status(400).json({errors})
    }
};

// Join pool
exports.join_pool = async (req, res) => {
    try {
        const pool = await Pool.findById(req.body.poolId);
        // Pool doesn´t exists
        if (!pool) {
            res.status(400).json({
                msg: 'Incorrect pool ID'
            });
            return;
        }

        // copy pool participants and check if user is already registered
        const poolParticipants = [...pool.participants]
        const alreadyIn = poolParticipants.find(i => i.userId.toString() === req.user._id.toString());
        if (alreadyIn) {
            res.status(403).json({
                msg: 'Sorry you are already registered in this pool. One registration per user.'
            });
            return;
        }

        // Register new participant in pool
        try {
            const newParticipant = {userId: req.user._id};
            poolParticipants.push(newParticipant);
            await Pool.findOneAndUpdate({_id: req.body.poolId}, {
                $set:{
                    participants: poolParticipants
                }
            })
        } catch(err) {
            res.status(400).json({
                msg: 'Oops! Please try again'
            })
        }

        // Update user.pools[]
        try {
            const user = await User.findById(req.user._id)
            const updatePools = [...user.pools];
            const newPool = {
                _id: pool._id,
                name: pool.name,
                commish: pool.commish,
                slug: pool.name.toLowerCase().replace(/ /g, '-')
            }
            updatePools.push(newPool);
            await User.findOneAndUpdate({_id: req.user._id}, {
                $set: {
                    pools: updatePools
                }
            })
            res.status(201).json({msg: 'Welcome to pool'})
        } catch(err) {
            res.status(400).json({
                msg: 'Oops! Please try again'
            })
        }

    } catch(err) {
        // Incorrect pool ID syntax
        console.log(err);
        res.status(400).json({
            msg: 'Incorrect pool ID'
        });
    }

}

// Update pool
exports.update_pool = (req, res) => {
    res.send('Hello from update_pool')
};

// Delete pool
exports.delete_pool = (req, res) => {
    res.send('Hello from delete_pool')
};