const express = require('express');
const {createClient , getClientList, getClientIndividualData, updateClientData, deleteClientData} = require('../controllers/clientController');
const router  = express.Router()

router.route('/').post(createClient).get(getClientList)
router.route('/:id').get(getClientIndividualData).put(updateClientData).delete(deleteClientData)



module.exports = router