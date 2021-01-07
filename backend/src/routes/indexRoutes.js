const express = require('express');

const indexController = require('../controllers/indexController');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('My money backend');
});

router.get('/billingCycles', indexController.index);
router.get('/billingCycles/:id', indexController.show);
router.post('/billingCycles', indexController.create);
router.put('/billingCycles/:id', indexController.update);
router.delete('/billingCycles/:id', indexController.delete);

module.exports = router;