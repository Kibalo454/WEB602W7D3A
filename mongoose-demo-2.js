const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/test");

const catSchema = new mongoose.Schema({
  name: String
});

// schema method
catSchema.methods.speak = function () {
  return `Meow name is ${this.name}`;
};

const Cat = mongoose.model("Cat", catSchema);

const kitty = new Cat({ name: "fluffy" });

console.log(kitty.speak());

mongoose.connection.close();
