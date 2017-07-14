import * as mongodb from 'mongodb';

const connectionString:string = "mongodb://trakkr:pw4trakkr@ds129422.mlab.com:29422/trakkr";

export default class Database {
  public static db:mongodb.Db;

  public static connect() {
    return mongodb.MongoClient.connect(connectionString).then((db) => {
        this.db = db;
    }).catch((err) => {
        console.error(err);
    });
  }
}
