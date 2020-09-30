exports.handler = function(context, event, callback) {

    // invoke Twilio REST API client
    var client = context.getTwilioClient();
    
    // send fax
    client.fax.faxes
        .create({
            from: event.from,
            to: event.to,
            mediaUrl: event.body  // this must actually be a URL to the fax media as a pdf
            
        })
        .then(fax => console.log(fax.sid));

};