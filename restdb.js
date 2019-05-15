const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");

var app = Express();

Mongoose.connect("mongodb://localhost/mydb");

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

const PersonModel = Mongoose.model("person", {
    firstname: String,
    lastname: String
});

app.post("/person", async (request, response) => {
        var result = await new PersonModel(request.body).save();
        response.send(result);
});

app.get("/person", async (request,response) => {
        var result = await PersonModel.find().exec();
        response.send(result);
});

app.get("/person/:id", async (request, response) => {
    var person = await PersonModel.findById(request.params.id).exec();
    response.send(person);
    console.log(person)
});

app.put("/person/:id", async (request, response) => {
        var person = await PersonModel.findById(request.params.id).exec();
        person.set(request.body);
        var result = await person.save();
        response.send(result);
});

app.delete("/person/:id", async (request, response) => {
        var result = await PersonModel.deleteOne({ firstname: request.params.id }).exec();
        response.send(result);
});

app.delete("/personall", async (request, response) => {
    var result = await PersonModel.deleteMany().exec();
    response.send(result);
});

app.listen(3000, () => {
    console.log("Listening at :3000");
});