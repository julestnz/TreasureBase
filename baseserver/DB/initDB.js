// make sure you npm i mongoose first
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/TreasureBaseDB')
  .then(() => console.log('Connected to MongDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

//create the Schema for the Treasure Hunts
const huntSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String
});

async function createHunt() {
  //Create a model - a class
  const Hunt = mongoose.model('Hunt', huntSchema);
//remove any exisitng HUnt receords
  const result1 = await Hunt.remove({});
  console.log(result1);
//create an object holding a huntSchema
  const hunt = new Hunt({
    name: 'First treasure hunt',
    description: 'First treasure hunt for TreasureBase',
    location: 'not yet defined'
  });

  const result = await hunt.save();
  console.log(result);
}

//create the Schema for Clues
const clueSchema = new mongoose.Schema({
  question: String,
  answer: String
});

async function createClue(iClue,iAnswer) {
  //Create a model - a class
  const Clue = mongoose.model('Clue', clueSchema);
//remove any exisitng Clue receords
  const result1 = await Clue.remove({});
  console.log(result1);
  const clue = new Clue({
    question: iClue,
    answer: iAnswer
  });

  const result = await clue.save();
  console.log(result);
}

createHunt();
createClue('First Clue','First Answer');
createClue('Second Clue','Second Answer');
