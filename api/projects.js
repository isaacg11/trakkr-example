"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var project_1 = require("../models/project");
var router = express.Router();
router.get('/', function (req, res) {
    project_1.default.find({}, function (err, result) {
        res.send(result);
    });
});
router.post('/', function (req, res) {
    var project = new project_1.default();
    project.name = req.body.name;
    project.description = req.body.description;
    project.group_id = 1;
    project.save(function (err, newProject) {
        res.send(newProject);
    });
});
exports.default = router;
