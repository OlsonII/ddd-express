const DatabaseProvider = require("../database/database.provider");
const ClientRepository = require("../repositories/client.repository");

class UnitOfWork{

    constructor() {
        this.databaseProvider = new DatabaseProvider();
        this.databaseProvider.connect().then(() => {
            this.clientRepository = new ClientRepository(this.databaseProvider.database);
        });
    }

    async start(){
        await this.databaseProvider.connect();
        this.clientRepository = new ClientRepository(await this.databaseProvider.database);
    }

    async complete(work){
        try{
            return work();
        }catch (e) {
            return e.toString();
        }finally {
            await this.databaseProvider.closeConnection();
        }
    }

}

module.exports = UnitOfWork;