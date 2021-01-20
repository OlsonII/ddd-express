const express = require('express');
const RegisterClientService = require("../application/register.client.service");
const router = express.Router();

const registerClientService = new RegisterClientService();

router.get('/', async (request, response) => {
    response.send('None')
})

router.post('/', async (request, response) => {
    response.send(await registerClientService.execute(request))
})

module.exports = router;