"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb = require("mongodb");
var connectionString = "mongodb://trakkr:pw4trakkr@ds129422.mlab.com:29422/trakkr";
var Database = (function () {
    function Database() {
    }
    Database.connect = function () {
        var _this = this;
        return mongodb.MongoClient.connect(connectionString).then(function (db) {
            _this.db = db;
        }).catch(function (err) {
            console.error(err);
        });
    };
    return Database;
}());
exports.default = Database;
