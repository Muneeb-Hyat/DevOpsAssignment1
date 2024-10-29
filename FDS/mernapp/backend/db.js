const mongoose = require('mongoose');

// Correct connection string (Ensure yourDatabaseName is specified)
const mongoURI = 'mongodb+srv://aleenaarif14:123@cluster0.ls4r7.mongodb.net/yo?retryWrites=true&w=majority';

const db = async () => {
    try {
     
        // Connect to MongoDB (pass options separately)
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("MongoDB connected successfully!");
        console.log("Server Running on " + mongoose.connection.host);

        const fetched_data = await mongoose.connection.db.collection("food_items");

        try {
            const data = await fetched_data.find({}).toArray();
            global.food_items = data;

            const foodcat = await mongoose.connection.db.collection("foodCat");
            const catData = await foodcat.find({}).toArray();

            global.foodCat = catData;
        } catch (err) {
            console.error("Error fetching data from collections:", err);
        }
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);  // Exit process if MongoDB connection fails
    }
};

module.exports = db;
