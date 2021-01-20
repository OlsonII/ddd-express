const UnitOfWork = require("../infrastructure/unit-of-work/unit.of.work");

class RegisterClientService{


    constructor(unitOfWork) {
        this.unitOfWork = unitOfWork;
    }

    async execute(request){
        try{
            const clientSearched = await this.unitOfWork.clientRepository.findOne(request.identification);
            console.log(clientSearched);
            if(clientSearched == undefined){
                await this.unitOfWork.start();
                const savedClient = await this.unitOfWork.complete(async () => await this.unitOfWork.clientRepository.save(request));
                console.log(savedClient)
                if(savedClient != undefined)
                    return new RegisterClientResponse('This driver is registered now correctly')
            }
            return new RegisterClientResponse('This driver is registered');
        }catch (e) {
            return new RegisterClientResponse('We have problems registering this driver');
        }
    }
}

class RegisterClientResponse{
    constructor(message) {
        this.message = message;
    }
}

module.exports = RegisterClientService;