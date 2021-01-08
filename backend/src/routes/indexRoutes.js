const express = require('express');

const indexController = require('../controllers/indexController');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('My money backend');
});

router.get('/billingcycles/summary', indexController.summary);

router.get('/billingcycles', indexController.paginate);
router.get('/billingcycles/:id', indexController.show);
router.post('/billingcycles', indexController.create);
router.put('/billingcycles/:id', indexController.update);
router.delete('/billingcycles/:id', indexController.delete);

module.exports = router;