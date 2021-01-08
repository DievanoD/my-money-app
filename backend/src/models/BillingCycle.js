const mongoose = require('../database/connection');
const mongoosePaginate = require('mongoose-paginate');

mongoose.set('useCreateIndex', true);

const creditSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        min: 0,
        required: true
    }
}, { timestamps: {} });

const debtSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        min: 0,
        required: [true, 'Informe o valor do débito!']
    },
    status: {
        type: String,
        required: false,
        uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']
    }
}, { timestamps: {} });

const billingCycleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    month: {
        type: Number,
        min: 1,
        max: 12,
        required: true
    },
    year: {
        type: Number,
        min: 1970,
        max: 2100,
        required: true
    },
    credits: [creditSchema],
    debts: [debtSchema]
}, { timestamps: {} });

// Paginate
billingCycleSchema.plugin(mongoosePaginate);

const BillingCycle = mongoose.model('BillingCycle', billingCycleSchema);
module.exports = BillingCycle;