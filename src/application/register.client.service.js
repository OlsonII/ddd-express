const UnitOfWork = require("../infrastructure/unit-of-work/unit.of.work");

class RegisterClientService{


    constructor() {
        this.unitOfWork = new UnitOfWork();
    }

    async execute(request){
        try{
            const clientSearched = this.unitOfWork.clientRepository.findOne(request.identification);
            if(clientSearched === undefined){
                await this.unitOfWork.start();
                const savedDriver = await this.unitOfWork.complete(async () => await this.unitOfWork.clientRepository.save(request));
                if(savedDriver !== undefined)
                    return new RegisterClientResponse('This driver is registered now correctly')
            }
            return new RegisterClientResponse('This driver is registered');
        }catch (e) {
            return new RegisterClientResponse('We have problems registering this driver');
        }
    }
}

class RegisterClientRequest{

    constructor(identification, name, lastName, phone) {
        this.identification = identification;
        this.name = name;
        this.lastName = lastName;
        this.phone = phone;
    }

}

class RegisterClientResponse{
    constructor(message) {
        this.message = message;
    }
}

module.exports = RegisterClientService;