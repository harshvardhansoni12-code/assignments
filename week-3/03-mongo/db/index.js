const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://harsh:harsh123@cluster0.emf99yo.mongodb.net/users?retryWrites=true&w=majority');

// Define schemas
const AdminSchema = new mongoose.Schema({
    admin: String,
    username: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

const CourseSchema = new mongoose.Schema({
    course: String,
    price: 5999
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
