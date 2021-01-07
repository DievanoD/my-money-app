const BillingCycle = require('../models/BillingCycle');

module.exports = {
    async index(req, res) {
        try {
            const rs = await BillingCycle.find();
            return res.send(rs);
        } catch (err) {
            console.error(err);
            return res.send(err);
        }
    },

    async show(req, res) {
        try {
            const id = req.params.id;
            const rs = await BillingCycle.findOne({ _id: id });
            return res.send(rs);
        } catch (err) {
            console.error(err);
            return res.send(err);
        }
    },

    async create(req, res) {
        try {
            const rs = await BillingCycle.create(req.body);
            return res.send(rs);
        } catch (err) {
            console.error(err);
            return res.send(err);
        }
    },

    async update(req, res) {
        try {
            const id = req.params.id;
            const rs = await BillingCycle.findOneAndUpdate({ _id: id }, req.body, {new: true, runValidators: true});
            return res.send(rs);
        } catch (err) {
            console.error(err);
            return res.send(err);
        }
    },

    async delete(req, res) {
        try {
            const id = req.params.id;
            const rs = await BillingCycle.findOneAndDelete({ _id: id });
            return res.send(rs);
        } catch (err) {
            console.error(err);
            return res.send(err);
        }
    },
};