const { Router } = require('express');
const router = Router();

const { 
    getUser,
    getUserRestrictions,
    getUserPurchases,
    getLevel,
    getShipment,
    getPayment, 
} = require('../controllers/mercadoLibreCtrl');


router.get('/getUser', getUser );
router.get('/getUserRestrictions/:userId', getUserRestrictions ) 
router.get('/getUserPurchases/:userId', getUserPurchases );
router.get('/getLevel/:levelId', getLevel );
router.get('/getShipment/:shipmentId', getShipment );
router.get('/getPayment/:paymentId', getPayment );
    
module.exports = router
  