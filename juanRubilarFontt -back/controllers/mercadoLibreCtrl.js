const mercadoLibreApi  = require('../services/MercadolibreService');

let mercadoLibreCtrl = new mercadoLibreApi();

const getUser = async ( req, res, next) => {
    try {  res.send( await mercadoLibreCtrl.getUser() )  } catch(err) { next(err); }
}

const getUserRestrictions = async ( req, res , next) => {
    try {  res.send( await mercadoLibreCtrl.getUserRestrictions(req.params.userId) ) } catch(err) { next(err); }  
}

const getUserPurchases = async ( req, res, next) => {
    try {  res.send( await mercadoLibreCtrl.getUserPurchases(req.params.userId) )  } catch(err) { next(err); }
}

const getLevel = async ( req, res , next) => {
    try {   res.send( await mercadoLibreCtrl.getLevel(req.params.levelId) ) } catch(err) { next(err); }
}

const getShipment = async ( req, res, next) => {
    try {  res.send( await mercadoLibreCtrl.getShipment(req.params.shipmentId) ) } catch(err) { next(err); }
}

const getPayment = async ( req, res, next) => {
    try {  res.send( await mercadoLibreCtrl.getPayment(req.params.paymentId) ) } catch(err) { next(err); }
}

module.exports = {
    getUser,
    getUserRestrictions,
    getUserPurchases,
    getLevel,
    getShipment,
    getPayment,
}