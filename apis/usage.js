const request = require('browser-request');

let usage = function(API_KEY){
	return new Promise((resolve,reject) => {
		if(!API_KEY){
			reject({error: 'API key is not set'});
		}
		request.post({url:'http://apis.paralleldots.com/usage', form: {api_key:API_KEY},json:true}, function(err,httpResponse,body){ 
			if(err){
				reject({"Error":err})
			}
			resolve(body);
		 })
	})
}

module.exports = usage;