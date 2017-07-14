import * as mongoose from 'mongoose';

let Schema = mongoose.Schema;

let IssueSchema = new Schema({
  name: {
    type:String,
    required: true
  },
  description: {
    type: String,
  },
  group_id: {
    type: Number
  },
  assigned_to: {
    type:String,
  },
  created_by: {
    type:String,
  },
  date_created: {
    type:Date,
  },
  due_date: {
    type:String
  },
  links: {
    type:String
  },
  status: {
    enum: {
      values: ['open', 'priority', 'pending', 'complete'],
    }
  },
  /*file_name: {
    type: ???
  },*/
  date_completed: {
    type:Date
  }
});

let Issue = mongoose.model('Issue', IssueSchema);

export default Issue;
