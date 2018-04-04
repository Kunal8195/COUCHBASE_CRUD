'use strict';
/**
 * Created by akash kamboj on 12/7/15.
 */
var Config = require('../config');
var async = require('async');

var client = require('twilio')(Config.SMS_CONFIG.twilioCredentials.accountSid, Config.SMS_CONFIG.twilioCredentials.authToken);


var sendSMSToUser = function (four_digit_verification_code, countryCode, phoneNo, externalCB) {
    console.log('sendSMSToUser', four_digit_verification_code)
    console.log('countryCode', countryCode)
    console.log('phoneNo', phoneNo)


    //var templateData = Config.APP_CONSTANTS.notificationMessages.verificationCodeMsg;
    var templateData = 'Your 4 digit verification code for Seed Project is ' + four_digit_verification_code;
    var variableDetails = {
        four_digit_verification_code: four_digit_verification_code
    };

    var smsOptions = {
        from: Config.SMS_CONFIG.twilioCredentials.smsFromNumber,
        to: countryCode + phoneNo.toString(),
        body: null
    };

    async.series([
        function (internalCallback) {
            smsOptions.body = renderMessageFromTemplateAndVariables(templateData, variableDetails);
            internalCallback();
        }, function (internalCallback) {
            sendSMS(smsOptions, function (err, res) {
                internalCallback(err, res);
            })
        }
    ], function (err, responses) {
        if (err) {
            externalCB(err);
        } else {
            externalCB(null, Config.APP_CONSTANTS.STATUS_MSG.SUCCESS.DEFAULT);
        }
    });
};

function renderMessageFromTemplateAndVariables(templateData, variablesData) {
    var Handlebars = require('handlebars');
    return Handlebars.compile(templateData)(variablesData);
}

/*
 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 @ sendSMS Function
 @ This function will initiate sending sms as per the smsOptions are set
 @ Requires following parameters in smsOptions
 @ from:  // sender address
 @ to:  // list of receivers
 @ Body:  // SMS text message
 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 */
function sendSMS(smsOptions, cb) {
    client.messages.create(smsOptions, function (err, message) {
        console.log('SMS RES', err, message);
        if (err) {
            console.log(err)
        }
        else {
            console.log(message.sid);
        }
    });
    cb(null, null); // Callback is outside as sms sending confirmation can get delayed by a lot of time
}

module.exports = {
    sendSMSToUser: sendSMSToUser
};