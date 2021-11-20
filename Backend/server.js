const express = require('express');
const app = express();
const mongoose = require('mongoose');
const apiHelper = require('./helper/ApiHelper');
const conf = require('./conf')

let db =conf.MONGODB_URL;
mongoose.connect(db, { useNewUrlParser: true }).then(() => console.log("conected"))

app.get('/getAllDetails', apiHelper.getAllDetails);
app.get('/getItem/:id', apiHelper.getDetailsByID);
app.post('/addItem', apiHelper.addItem);
app.post('updateItem/:id', apiHelper.updateDetailsByID);
app.delete('/deleteItem/:id', apiHelper.deleteItem);

app.get('/', (req, res) => {
    res.send('server Is Up');
})

app.listen(conf.PORT, console.log(`server started ${conf.PORT}`));