const app = require('../../../../loaders/express-handlebars');
import { User } from '../../../../models/User';

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

app.delete('/v1/users/:userID', async function (req, res, next) {
    try {
        const userID = new ObjectId(req.params.userID);
        const userExists = await User.exists({_id: userID});

        if (!userExists) {
            res.status(404).send("User not found");
            return; // get out
        }

        await User.deleteOne({_id: userID});

        res.status(200).send(`USER DELETED: ${userID}`);
    } catch(e) {
        console.error(e);
        res.status(400).send('Invalid User Id in URL Params', e);
    }
});

module.exports = app;