// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-movies-celebrities";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

  class Celebrity {
    constructor(name, occupation, catchPhrase) {
      this.name = name;
      this.occupation = occupation;
      this.catchPhrase = catchPhrase;
    }
  }

  let celebrities = [];

  let tomCruise = new Celebrity("Tom Cruise", "Actor", "Show me the money!");
  celebrities.push(tomCruise);

  let beyonce = new Celebrity("Beyonce", "Singer", "Who run the world? Girls!");
  celebrities.push(beyonce);

  let daffyDuck = new Celebritiy("Daffy Duck", "Cartoon Character", "You're despicable!");
  celebrities.push(daffyDuck);

  let kimKardashian = new Celebrity("Kim Kardashian", "TV Personality", "I'm not a regualr mom, I'm a cool mom.");
  celebrities.push(kimKardashian);