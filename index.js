//Requerir el módulo recién instalado
const express = require('express');
const mongoose = require('mongoose');
const user = require('./models/user');
const userClass = require('./models/user');

//Guardo la ejecución en la variable app
const app = express();
//Analiza las solicitudes JSON entrantes y coloca los datos analizados en formato req.body
app.use(express.json());

//rutas
app.get("/", (req, res) => {
    res.send("Bienvenidos a mi API");
})

/*
app.post("/users", (req, res) => {
    res.send("Usuario creado");
})
*/

//Creación de usuario

app.post("/users", (req, res) => {
    const user = userClass(req.body);
    user.save().then((data) => res.json(data))
});

//Búsqueda de usuarios

app.get("/users", (req, res) => {
    userClass.find().then((data) => res.json(data))
});

//Búsqueda de usuario

app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    userClass.findById(id).then((data) => res.json(data))
});

//Actualizar un usuario

app.put("/users/:id", (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const age = req.body.age;
    userClass.updateOne({ _id: id},{$set:{name, age}}).then((data) => res.json(data))
});

//Eliminar un usuario

app.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    userClass.deleteOne({ _id: id}).then((data) => res.json(data))
});

//mongodb conection
mongoose.connect("mongodb+srv://uscudum:jap2022@bd-jap.tgrow0c.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("Conected to MongoDB Atlas"))
.catch((error) => console.log(error));

app.listen(8000, () => console.log('server listening on port', 8000));