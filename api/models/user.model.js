import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "https://hbimg.huabanimg.com/2a5575bd668c33a868afb3d7feb76077352eb5513ec0-ZIXWti_fw658",
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true })

const User = mongoose.model('User', userSchema);

export default User;