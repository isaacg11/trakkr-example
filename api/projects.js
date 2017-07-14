"use strict";
var express = require("express");
var db_1 = require("../db");
var mongodb = require("mongodb");
var router = express.Router();
router.get('/:id', function (req, res) {
    var projectId = new mongodb.ObjectID(req.params['id']);
    db_1.default.db.collection('projects').findOne(projectId).then(function (project) {
        console.log(project);
        res.json(project);
    });
});
router.get('/', function (req, res) {
    db_1.default.db.collection('projects').find().toArray().then(function (projects) {
        console.log("From Router: " + projects);
        res.json(projects);
    });
});
router.post('/', function (req, res) {
    var project = req.body;
    project._id = new mongodb.ObjectID(project.id);
    db_1.default.db.collection('projects').save(project).then(function (newproject) {
        res.json(newproject);
    });
});
router.delete('/:id', function (req, res) {
    var projectId = new mongodb.ObjectID(req.params['id']);
    db_1.default.db.collection('projects').remove({ _id: projectId }).then(function () {
        res.sendStatus(200);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
