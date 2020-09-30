# Uplevel Account Notifications with a Cross-Channel Strategy - Twilio Signal 2020
Accompanying content for Signal 2020 session by John Maitz and Tim Wittbrod
View session here: https://signal.twilio.com/sessions/QnOuftgmEeqJic6p_X03FQ

Whether it's IT service alerts, emergency notifications, or reminders, Account Notifications should all be treated differently. Learn best practices on defining the functionality you need, upleveling with cross-channel notifications, and enabling two-way notifications.

## Studio Flows
(for documentation on importing Studio flows, see https://www.twilio.com/docs/studio/user-guide#importing-and-exporting-flows)

* ### Demo1: [NotificationsWorkflow.json](https://github.com/twittbrod/uplevelAlerts_Signal2020/blob/master/NotificationsWorkflow.json)
  - Send a notification on opted-in channels including: SMS, voice, Whatsapp, email, or fax.
  - Parameters:
    - To: recipient phone number (E.164)
    - From: Twilio phone number (E.164)
    - Parameters: Sample: 
      > {
          "smsOptIn":1,
          "whatsappOptIn":"0",
          "emailOptIn":"1",
          "voiceOptIn":"1",
          "faxOptIn":"0",
          "emailaddress":"twittbrod@gmail.com",
          "emailsubject":"Signal 2020 - Uplevel Notifications Demo",
          "msgBody":"This is a notification to notify you that you are being notified."
        }
* ### Demo2: [EscalatedNotificationsWorkflow.json](https://github.com/twittbrod/uplevelAlerts_Signal2020/blob/master/EscalatedNotificationsWorkflow.json)
  - Escalate a notification based on the whether the recipient has acknowledged it yet.
    - Call the recipient and play a message.
    - If the recipient does not answer or acknowledge (press 1), send a text message.
    - If the recipient does not acknowledge (reply ACK) within 1 hour, call the recipient and play a message
    - If the recipient does not answer or acknowledge (press 1), send a text message.
    - If the recipient does not acknowledge (reply ACK) within 1 hour, End
    - Log result to system of record
  - Parameters:
    - To: recipient phone number (E.164)
    - From: Twilio phone number (E.164)
    - Parameters: Sample: 
      > {
          "msgbody":"This is a notification to notify you that you are being notified."
        }
* ### [InteractiveDemoLauncher.json](https://github.com/twittbrod/uplevelAlerts_Signal2020/blob/master/InteractiveDemoLauncher.json)
  - The Interactive Demo Launcher flow emulates a system of record or application triggering the Notification Workflow.  In this case, it receives a text message, prompts the initiator to for required information such as channels for the notification and email address, and then triggers the Notification Workflow to execute.
  - This is a live demo that can be accessed by sending ALERT (or really anything other than STOP, CANCEL, UNSUBSCRIBE, HELP, or INFO) to any of these phone numbers:
    - +1 304 449 8743 (+1-304-HI-WUPHF) (US)
    - +44 7429 874329 (+44 PI 2 WUPHF BY) (UK)
    - +1 833 313 0845 (US/Canada)
    - +1 404 574 4625 (US)
  - To re-use this flow, update the http_executeflow widget to point to the REST API URL of your Notifications workflow.
    

## Widget Functions

* ### [SendGridEmailWidget.js](https://github.com/twittbrod/uplevelAlerts_Signal2020/blob/master/SendGridEmailWidget.js)
  - Function invoked from Studio to send an email through Twilio SendGrid
  - Parameters:
    - to: recipient email address
    - subject: email subject
    - body: email content
  - Note: this uses an email template in my account.  This should be updated to use your template.  For information on templates, see https://sendgrid.com/blog/how-to-use-sendgrids-dynamic-templates-for-your-transactional-emails/.
  - SendGrid API key is set as an environment variable

* ### [SendFaxWidget.js](https://github.com/twittbrod/uplevelAlerts_Signal2020/blob/master/SendFaxWidget.js)
  - Function invoked from Studio to send a fax using Twilio's Programmable Fax
  - Parameters:
    - to: recipient phone number (E.164)
    - from: Twilio phone number (E.164)
    - body: URL to PDF to send
 
    

