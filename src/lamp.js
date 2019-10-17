const axios = require('axios');

function makeLampStatusJson(command){
	
	const jsonOn = `"on": {
		          "type" : "command",
		          "value" : ""
			}`;

	const jsonOff = `"off": {
			  "type" : "command",
			  "value" : ""
			}`;

	return command === 'on' ? jsonOn : jsonOff;
} 

function turnLamp(command){

	let json = makeLampStatusJson(command);
	
	// Orionにポストリクエストを送る
	axios.patch('http://orion:1026', {
		json
	})
	.then((res) => {
		if(res.status){
			console.log(res.status);
		}
	})
	.catch((error) => {
	
		console.error(error.code);
	});

}

module.exports = { turnLamp, makeLampStatusJson };
