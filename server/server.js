const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database.js')
const app = express();
const Product = require('./models/Product.js');
const User = require('./models/User.js')
require('dotenv').config();

app.use(cors());
app.use(express.json());


//db senkronu
sequelize.sync().then(()=>{
    console.log('Database synced')
})


//route tanimlama

app.use('/api/products',require('./routes/products.js'));
app.use('api/users', require('./routes/users.js'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})