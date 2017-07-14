import * as express from 'express';
import database from '../db';``
import * as mongodb from 'mongodb';
import User from '../models/user';

let router = express.Router();

// GET single user
router.get('/:id', (req, res) => {
  let userId = new mongodb.ObjectID(req.params['id']);
  database.db.collection('users').findOne(userId).then((user)=> {
    res.json(user);
  });
});

// GET users
router.get('/', (req, res) => {
  database.db.collection('users').find().toArray().then((users)=>{
    res.json(users);
  })
});

// Create/Update user and save token
router.post('/', (req, res) => {
  let user_instance;

  database.db.collection('users').findOne({'id': req.body.id}, function(err,user) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    if (user) {
      console.log(user);
      //user.generateJWT();
      res.json(user);
    } else {
      let user:any = new User(req.body);
      user._id = new mongodb.ObjectID(); // convert _id to object
      if (user.user_role != 'admin') {
        user.user_role='normal';
      }
      let tok = user.generateJWT();
      console.log('Token: ' + tok);
      database.db.collection('users').save(user).then((newuser) => {
        res.json(newuser);
      });
    }
  });


});

router.delete('/:id', (req, res) => {
  let userId = new mongodb.ObjectID(req.params['id']);
  database.db.collection('users').remove({_id:userId}).then(()=> {
    res.sendStatus(200);
  });
});

export default router;
