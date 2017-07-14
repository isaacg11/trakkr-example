import * as express from 'express';
import database from '../db';
import * as mongodb from 'mongodb';
import Issue from '../models/issue';
import Project from '../models/project';

let router = express.Router();

// GET single project
router.get('/:id', (req, res) => {
  let projectId = new mongodb.ObjectID(req.params['id']);
  database.db.collection('projects').findOne(projectId).then((project)=> {
    console.log(project);
    res.json(project);
  });
});

// GET projects
router.get('/', (req, res) => {
  database.db.collection('projects').find().toArray().then((projects)=>{
    console.log("From Router: " + projects);
    res.json(projects);
  })
});

// Create/Update project
router.post('/', (req, res) => {
  let project = req.body;
  project._id = new mongodb.ObjectID(project.id); // convert _id to object
  database.db.collection('projects').save(project).then((newproject) => {
    res.json(newproject);
  })
});

router.delete('/:id', (req, res) => {
  let projectId = new mongodb.ObjectID(req.params['id']);
  database.db.collection('projects').remove({_id:projectId}).then(()=> {
    res.sendStatus(200);
  });
});

export default router;
