const express = require('express');
const RegisterClientService = require("../application/register.client.service");
const FindClientService = require("../application/find.client.service");
const UnitOfWork = require("../infrastructure/unit-of-work/unit.of.work");
const router = express.Router();

const registerClientService = new RegisterClientService(new UnitOfWork());
const findClientService = new FindClientService(new UnitOfWork());

router.get('/', async (request, response) => {
    response.send(await findClientService.execute())
})

router.post('/', async (request, response) => {
    response.send(await registerClientService.execute(request.body))
})

module.exports = router;