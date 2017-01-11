exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);
      
      
if (event.session.application.applicationId !== "amzn1.ask.skill.99d85a48-aaf7-4552-b47b-990350016e92") {
  context.fail("Invalid Application ID");
}
