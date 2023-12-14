//Connect mongodb   
const express = require('express');
const mongoose = require('mongoose');

const app = express();
var cors=require('cors')
app.use(cors())
const port = 4000;

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/LIC', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
const propSchema = new mongoose.Schema({
  adhno: { type: Number, required: true },
  propname: { type: String, required: true },
  phoneno:{type:Number, required:true},
  gmail:{type:String, required:true},
  term:{type:Number, required:true},
  sum:{type:Number, required:true},
  income:{type:Number, required:true},
  nation:{type:String, required:true},
  state:{type:String, required:true},  
 gender:{type:String, required:true},
 mode:{type:String, required:true},
   dob:{type:Number, required:true},
});

const Prop = mongoose.model('Prop', propSchema,'proposal');
app.use(express.json());

// Create an proposal
app.post('/proposals', (req, res) => {
  const { adhno, propname,phoneno,gmail,term,sum,income,nation,state, gender,mode,dob  } = req.body;
  const newProp = new Prop({ adhno, propname,phoneno,gmail,term,sum,income,nation,state, gender,mode,dob });
  newProp.save()
    .then((proposal) => {
      res.status(201).json(proposal);
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred while creating the employee' });
    });
});

// Get all proposals
app.get('/Prop', (req, res) => {
  Prop.find()
    .then((proposals) => {
      res.json(proposals);
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred while retrieving employees' });
    });
});

// Get an proposal by Adhno   //all view  in browcer this function //
app.get('/proposals/:adhno', (req, res) => {
  const adhno = req.params.adhno;
  Prop.findOne({ adhno })
    .then((proposal) => {
      if (proposal) {
        res.json(proposal);
      } else {
        res.status(404).json({ error: 'Proposal not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred while retrieving the employee' });
    });
});

// Update an prposer details
app.put('/proposals/:adhno', (req, res) => {
  const adhno = req.params.adhno;
  const { propname, phoneno, gmail, term, sum, income, nation, state, gender, mode, dob } = req.body;
  Prop.findOneAndUpdate({ adhno }, { propname, phoneno, gmail, term, sum, income, nation, state, gender, mode, dob }, { new: true })
    .then((proposal) => {
      if (proposal) {
        res.json(proposal);
      } else {
        res.status(404).json({ error: ' Proposal not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred while updating the employee' });
    });
});


// Delete an proposer//
app.delete('/proposals/:adhno', (req, res) => {
  const adhno = req.params.adhno;
  Prop.findOneAndDelete({ adhno })
    .then((proposal) => {
      if (proposal) {
        res.json({ message: 'Proposal deleted successfully' });
      } else {
        res.status(404).json({ error: 'Proposal not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred while deleting the employee' });
    });
});