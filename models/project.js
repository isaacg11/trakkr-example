"use strict";
var mongoose = require("mongoose");
var issue_1 = require("./issue");
var Schema = mongoose.Schema;
var ProjectSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    group_id: {
        type: Number,
        required: true
    },
    issues: [{
            type: Schema.Types.ObjectId,
            ref: issue_1.default
        }],
});
var Project = mongoose.model('Project', ProjectSchema);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Project;
