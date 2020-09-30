exports.handler = function(context, event, callback) {
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(context.SENDGRID_API_KEY);
  
  var emailFrom = "alerts@ryanburrer.com";
  
  if (!!event.from) {
      emailFrom = event.from;
  }

  const message = {
    to: event.to,
    from: emailFrom,
    subject: event.subject,
    html: event.body,
    template_id: 'd548bfc4-7a9b-4240-8cb7-9a4a5b653963'  
  };
  
  console.log(message);
  
  sgMail
    .send(message)
    .then(() => {
      callback(null, "Email sent successfully");
    })
    .catch(e => {
      console.log(e);
    });
};