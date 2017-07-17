import * as express from 'express';
// import database from '../db';
// import * as mongodb from 'mongodb';
import * as mongoose from 'mongoose';
import Issue from '../models/issue';
import Project from '../models/project';

let router = express.Router();

// GET single project
// router.get('/:id', (req, res) => {
//   let projectId = new mongodb.ObjectID(req.params['id']);
//   database.db.collection('projects').findOne(projectId).then((project)=> {
//     res.json(project);
//   });
// });

// GET projects
router.get('/', (req, res) => {
  Project.find({}, function(err, result){
    res.send(result);
  })
});

// Create/Update project
router.post('/', (req, res) => {
  let project:any = new Project();
  project.name = req.body.name;
  project.description = req.body.description;
  project.group_id = 1;

  project.save((err, newProject) => {
    res.send(newProject);
    // if (err) {
    //   res.send(err);
    // } else {
    //   Project.findByIdAndUpdate(req.body.project_id, { "$push": { "issues": newIssue._id }}, { "new": true, "upsert": true},
    //     function (err, updatedProject) {
    //       if (err) {
    //         res.send(err)
    //       } else {
    //         res.send(updatedProject);
    //       }
    //     });
    //   }
  });
});

// router.delete('/:id', (req, res) => {
//   let projectId = new mongodb.ObjectID(req.params['id']);
//   database.db.collection('projects').remove({_id:projectId}).then(()=> {
//     res.sendStatus(200);
//   });
// });

export default router;
