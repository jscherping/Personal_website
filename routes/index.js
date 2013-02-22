var client = require('twilio')('##########', '########');

exports.home = function(req, res){
	res.render('home', {locals:{title: 'Nicholas Otto'}});
};

exports.map = function(req, res){
	res.render('map', {locals:{title: 'Life Map'}});
};

exports.message = function(req, res){
	console.log(req.body.number);
	client.sendSms({

		to:'+1'+req.body.number, // Any number Twilio can deliver to
	    from: '+##########', // A number you bought from Twilio and can use for outbound communication
	    body: 'Nicholas Otto - Junior in CS @ UMich; knows C++ > JS > PY > VB; 5 hack-a-thons; works @ EMR company PCE Systems' // body of the SMS message

	}, function(err, responseData) { //this function is executed when a response is received from Twilio

    	if (err) { // "err" is an error received during the request, if any

        	// "responseData" is a JavaScript object containing data received from Twilio.
        	// A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        	// http://www.twilio.com/docs/api/rest/sending-sms#example-1
			res.render('message', {title:'SMS', status:'Error', message:'Message could not be sent'});

    	}
    	else{
    		console.log(responseData.from); // outputs "+14506667788"
        	console.log(responseData.body); // outputs "word to your mother."
        	res.render('message', {title:'SMS', status:'Success!', message:'A message was sent to the requested number'});
		}
	});
}
