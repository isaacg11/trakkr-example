"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var issue_1 = require("../models/issue");
var router = express.Router();
router.post('/', function (req, res) {
    res.send(req.body);
    var issue = new issue_1.default();
    issue.name = req.body.name;
    issue.description = req.body.description;
    issue.assigned_to = req.body.assigned_to;
    issue.save(function (err, newIssue) {
        res.send(newIssue);
    });
});
exports.default = router;
