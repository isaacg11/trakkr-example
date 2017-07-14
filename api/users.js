"use strict";
var express = require("express");
var db_1 = require("../db");
"";
var mongodb = require("mongodb");
var user_1 = require("../models/user");
var router = express.Router();
router.get('/:id', function (req, res) {
    var userId = new mongodb.ObjectID(req.params['id']);
    db_1.default.db.collection('users').findOne(userId).then(function (user) {
        res.json(user);
    });
});
router.get('/', function (req, res) {
    db_1.default.db.collection('users').find().toArray().then(function (users) {
        res.json(users);
    });
});
router.post('/', function (req, res) {
    var user_instance;
    db_1.default.db.collection('users').findOne({ 'id': req.body.id }, function (err, user) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        if (user) {
            console.log(user);
            res.json(user);
        }
        else {
            var user_2 = new user_1.default(req.body);
            user_2._id = new mongodb.ObjectID();
            if (user_2.user_role != 'admin') {
                user_2.user_role = 'normal';
            }
            var tok = user_2.generateJWT();
            console.log('Token: ' + tok);
            db_1.default.db.collection('users').save(user_2).then(function (newuser) {
                res.json(newuser);
            });
        }
    });
});
router.delete('/:id', function (req, res) {
    var userId = new mongodb.ObjectID(req.params['id']);
    db_1.default.db.collection('users').remove({ _id: userId }).then(function () {
        res.sendStatus(200);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
