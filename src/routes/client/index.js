const app = require('../../loaders/express-handlebars');
import { User } from '../../models/User';

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

app.get('/database-test', async function (req, res, next) {
    const newUser = new User({
        username: "hello",
        password: "world",
        gender: "male",
        email: "matt@mmrsolutions.se",
        age: 24,
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


module.exports = app;
