"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var IssueSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    group_id: {
        type: Number
    },
    assigned_to: {
        type: String,
    },
    created_by: {
        type: String,
    },
    date_created: {
        type: Date,
    },
    due_date: {
        type: String
    },
    links: {
        type: String
    },
    status: {
        enum: {
            values: ['open', 'priority', 'pending', 'complete'],
        }
    },
    date_completed: {
        type: Date
    }
});
var Issue = mongoose.model('Issue', IssueSchema);
exports.default = Issue;
