const UnitOfWork = require("../infrastructure/unit-of-work/unit.of.work");

class FindClientService{

    constructor(unitOfWork) {
        this.unitOfWork = unitOfWork;
    }

    async execute(request){
        try{
            return await this.unitOfWork.clientRepository.findAll()
        }catch (e) {

        }
    }

}

module.exports = FindClientService;