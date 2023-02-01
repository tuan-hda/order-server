const mongoose = require('mongoose');
const dbURL = process.env.DB_PATH || 'mongodb+srv://nnhoa2011:Nguyenhoa2011@cluster0.sktbr28.mongodb.net/?retryWrites=true&w=majority'
async function connect() {
    try {
        await mongoose.connect(dbURL);
        console.log('connect successfuly');
    } catch (error) {
        console.log('Cannot connect', error);
    }
}

module.exports = { connect };
