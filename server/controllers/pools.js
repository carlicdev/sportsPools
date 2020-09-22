const Pool = require('../models/pool');

// Get all pools
exports.get_all_pools = async (req, res) => {
    const pools = await Pool.find();
    res.status(200).json({pools})
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
        console.log(err);
        res.sendStatus(400);
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
        const alreadyIn = poolParticipants.find(i => i.toString() === req.user._id.toString());
        if (alreadyIn) {
            res.status(403).json({
                msg: 'Sorry you are already registered in this pool. One registration per user.'
            });
            return;
        }

        // Register new participant
        try {
            poolParticipants.push(req.user._id);
            await Pool.findOneAndUpdate({_id: req.body.poolId}, {
                $set:{
                    participants: poolParticipants
                }
            })
            res.status(201).json({msg: 'Welcome to pool'})
        } catch(err) {
            console.log(err);
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