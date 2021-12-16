// Connect the database
mongoose
	.connect('mongodb+srv://admin:admin123@cluster0.nqggq.mongodb.net/analysera-med-oss?retryWrites=true&w=majority', {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false
	})
	.then((con) => {
		console.log('DB connection Successfull!');
	});

// TODO: Move to Models
export const User = mongoose.model('User', new mongoose.Schema({
	// DID: Discord ID
	DID: String,
	// DRID: Discord Role ID
	DRID: Array,
	// Memberpress ID
	ID: String,
	accessToken: String,
}));


const existingUser = await User.findOne({ ID: memberspressUserId });

if (existingUser) {

}

const newUser = new User({
    DID: discordUser.id,
    DRID: discordRoleIds,
    ID: memberspressUserId,
    accessToken: accessToken
});

// Save user to database
newUser.save(function (err, user) {
    if (err) {
        return console.error(err);
    }
});