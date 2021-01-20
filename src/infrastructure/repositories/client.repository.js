const GenericRepository = require("../base/generic.repository");

class ClientRepository extends GenericRepository{

    constructor(database) {
        super(database);
        if(this.database !== undefined)
            this.collection = this.database.collection('CLIENTS');
    }

    async save(client){
        return await this.collection.insertOne(client)
    }

    async findOne(clientIdentification){
        return await this.collection.findOne({identification: clientIdentification});
    }

    async findAll(){
        return await this.collection.find();
    }

}

module.exports = ClientRepository;