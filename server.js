const express = require('express');
const bodyParser = require('body-parser');
const lamp = require('./src/lamp');
require('dotenv').config();

const port = process.env.PORT;
const host = process.env.HOST;

const app = express();


app.use(bodyParser.json());

app.get('/', (req, res) => {
            console.log('get request was successful');
	    res.send("The get request was successful");
});

// POST requestの受け取り先
app.post('/lamp/on', async(req, res) => {
	    console.log('Post request was received');
	    
	    await lamp.turnLamp('on');
	
	    await res.send(req.body);
});


// POST requestの受け取り先
app.post('/lamp/off', async(req, res) => {
	    console.log('Post request was received');
	    
	    await lamp.turnLamp('off');
	
	    await res.send(req.body);
});

app.listen(port, host, () => {
	    console.log(`Server is running on port ${port} and host ${host}.`);
});
