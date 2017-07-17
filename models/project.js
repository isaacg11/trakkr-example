"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var issue_1 = require("./issue");
var Schema = mongoose.Schema;
var ProjectSchema = new Schema({
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
exports.default = Project;
