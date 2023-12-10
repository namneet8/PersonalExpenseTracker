const mongoose = require('mongoose');
const {isEmail} = require('validator')


const UserSchema = new mongoose.Schema({
    nameUser: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    email: {
        type: String,
        required: [true, 'Pls enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Pls enter a valid email']
    },
    
    password: {
        type: String,
        required: [true, 'Please enter password'],
        minlength: [6, 'Min length of password is 6']
    },
}, {timestamps: true})
// Hash password before saving to the database
UserSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    }
    next();
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;