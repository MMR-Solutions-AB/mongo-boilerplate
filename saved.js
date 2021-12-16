const app = require('../../loaders/express-handlebars');
import { User } from '../../models/User';


const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()


app.post('/database-test', jsonParser, async function (req, res, next) {
    const {username, password, gender, email, age} = req.body;
    const newUser = new User({
        username: username,
        password: password,
        gender: gender,
        email: email,
        age: age,
    });

    newUser.save(function(error){
        if(error) {
            console.error("Something went wrong");
            res.status(400).send('NOT OK');
            return; // get oooout
        }
        console.log("Insert Successful!");
        res.status(200).send('OK');
    })
});

app.get('/database-find/:userID', async function (req, res, next) {
    try {
        const userID = new ObjectId(req.params.userID);

        const currentUser = await User.findOne({_id: userID});

        if (!currentUser) {
            res.status(404).send("User not found");
            return; // get out
        }

        res.status(200).send(currentUser);
    } catch(e) {
        res.status(400).send('Invalid User Id in URL Params');
    }
});


app.put('/database-update/:userID', jsonParser, async function (req, res, next) {
    try {
        const userID = new ObjectId(req.params.userID);
        const updatedUserData = req.body;
        console.log(updatedUserData, userID)

        const userExists = await User.exists({_id: userID});
        if (!userExists) {
            res.status(404).send("User not found");
            return; // get out
        }
        console.log(userExists);

        await User.updateOne({_id: userID}, updatedUserData);

        res.status(204).send("OK");
    } catch(e) {
        res.status(400).send("Error: ", e);
    }
});


module.exports = app;
