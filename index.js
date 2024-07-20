const express = require('express');
const app = express();

require('dotenv').config();
const dbConnect = require('./config/mongoDb')

const PORT = process.env.PORT || 4000


// Middleware to parse JSON request bodies
app.use(express.json())

// routes prefix
const todoRoutes = require('./routes/todoRoutes');
app.use('/api/v1',todoRoutes);


//creating backend server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


// database connection
dbConnect();
 


// git remote add origin <repository-url>
// git push -u origin master
