'use strict';

const plivoCredentials = {
    authId : 'MAZWJLNJNHMDU1MMNMMZ',
    authToken : 'NmMwYzUzMDE3NDBiMTQ4ODBkYzQ5YmY3YjY5MmUw',
};

const twilioCredentials = {
    accountSid : 'ACea42ebb73974dd5c9f75f3d061602f07',
    authToken : '84fd7bec6e6c66d48fcbfbe44656cfa6',
    smsFromNumber : '+14154291567'
};

const SMS_CONFIG = {
    plivoCredentials: plivoCredentials,
    twilioCredentials: twilioCredentials
};

module.exports = SMS_CONFIG;
