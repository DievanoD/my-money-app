const BillingCycle = require('../models/BillingCycle');

const errorHandler = require('../utils/errorHandler');

module.exports = {
    async index(req, res) {
        try {
            const rs = await BillingCycle.find();
            return res.send(rs);
        } catch (err) {
            // console.error(err);
            return res.send(err);
        }
    },

    async paginate(req, res) {
        try {
            const { page = 1, limit = 5 } = req.query;
            const rs = await BillingCycle.paginate({}, { page: parseInt(page), limit: parseInt(limit) });
            return res.send(rs);
        } catch (err) {
            // console.error(err);
            return res.send(err);
        }
    },

    async show(req, res) {
        try {
            const id = req.params.id;
            const rs = await BillingCycle.findOne({ _id: id });
            return res.send(rs);
        } catch (err) {
            // console.error(err);
            return res.send(err);
        }
    },

    async create(req, res) {
        try {
            const rs = await BillingCycle.create(req.body);
            return res.send(rs);
        } catch (err) {
            return res.status(500).send(errorHandler(err));
        }
    },

    async update(req, res) {
        try {
            const id = req.params.id;
            const rs = await BillingCycle.findOneAndUpdate({ _id: id }, req.body, { new: true, runValidators: true });
            return res.send(rs);
        } catch (err) {
            return res.status(500).send(errorHandler(err));
        }
    },

    async delete(req, res) {
        try {
            const id = req.params.id;
            const rs = await BillingCycle.findOneAndDelete({ _id: id });
            return res.send(rs);
        } catch (err) {
            // console.error(err);
            return res.send(err);
        }
    },

    async summary(req, res) {
        BillingCycle.aggregate([
            {
                $project: {
                    credit: {
                        $sum: "$credits.value"
                    },
                    debt: {
                        $sum: "$debts.value"
                    }
                }
            }, {
                $group: {
                    _id: null,
                    credit: {
                        $sum: "$credit"
                    },
                    debt: {
                        $sum: "$debt"
                    }
                }
            }, {
                $project: {
                    _id: 0,
                    credit: 1,
                    debt: 1
                }
            }
        ], (error, result) => {
            if (error) return res.status(500).json({ errors: [error] });
            return res.json(result[0] || { credit: 0, debt: 0 });
        });
    }
};