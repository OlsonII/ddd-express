const { MongoClient } = require('mongodb');

class DatabaseProvider{

    constructor() {
        this.databaseUri = 'mongodb+srv://olson:1981@cluster0.fhagr.mongodb.net/ddd?retryWrites=true&w=majority';
        this.client = MongoClient(this.databaseUri, {
            useUnifiedTopology: true
        });
    }

    async connect(){
        await this.client.connect();
        this.database = await this.client.db('ddd');
    }


    async closeConnection(){
        await this.client.close();
    }

}

module.exports = DatabaseProvider;