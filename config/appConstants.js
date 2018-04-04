'use strict';

const SERVER = {
    GOOGLE_API_KEY: 'AIzaSyAw8bFzBtRDWIKQhbVNlPPh73CIXm38kyY'
};

const DATABASE = {
    TASK_TYPE: {
        PICKUP: 'PICKUP',
        BUY: 'BUY',
        OTHERS: 'OTHERS'
    },
    PLACE_TYPE : {
    	CUSTOM : 'CUSTOM',
		USER : 'USER',
		THIRD_PARTY : 'THIRD_PARTY'
    },
    CANCEL_TYPE : {
        EXPECTED_SHORT_TIME : 'EXPECTED_SHORT_TIME',
        DELIVERY_CHARGES_HIGH : 'DELIVERY_CHARGES_HIGH',
        CHANGED_MY_MIND : 'CHANGED_MY_MIND',
        OTHER_ISSUE : 'OTHER_ISSUE'
    } 
};

const swaggerDefaultResponseMessages = [
    {code: 200, message: 'OK'},
    {code: 400, message: 'Bad Request'},
    {code: 401, message: 'Unauthorized'},
    {code: 404, message: 'Data Not Found'},
    {code: 500, message: 'Internal Server Error'}
];

const STATUS_MSG = {
    ERROR: {
        DB_ERROR: {
            statusCode:400,
            customMessage : 'DB Error : ',
            type : 'DB_ERROR'
        },
        USER_NOT_FOUND: {
            statusCode:400,
            customMessage : 'User not found',
            type : 'USER_NOT_FOUND'
        },
        INCORRECT_OTP: {
            statusCode:400,
            customMessage : 'You have entered the wrong OTP, Please check the OTP and try again!',
            type : 'INCORRECT_OTP'
        }
    },
    SUCCESS: {
        CREATED: {
            statusCode:201,
            customMessage : 'Created Successfully',
            type : 'CREATED'
        },
        DEFAULT: {
            statusCode:200,
            customMessage : 'Success',
            type : 'DEFAULT'
        },
        UPDATED: {
            statusCode:200,
            customMessage : 'Updated Successfully',
            type : 'UPDATED'
        },
        LOGOUT: {
            statusCode:200,
            customMessage : 'Logged Out Successfully',
            type : 'LOGOUT'
        },
        DELETED: {
            statusCode:200,
            customMessage : 'Deleted Successfully',
            type : 'DELETED'
        },
        DISABLE_SUCCESS: {
            statusCode:200,
            customMessage : 'Manager disabled successfully',
            type : 'DISABLE_SUCCESS'
        },
        ENABLE_SUCCESS: {
            statusCode:200,
            customMessage : 'Manager enabled successfully',
            type : 'ENABLE_SUCCESS'
        }
    }
}
const JOI = {
    OBJECT_ID_REGEX: /^[a-f\d]{24}$/i,
    OBJECT_ID_ENCODING: 'utf8',
    OTP_LENGTH: 4,
    PHONE_NO_LENGTH: 10
}

const APP_CONSTANTS = {
    SERVER: SERVER,
    DATABASE: DATABASE,
    STATUS_MSG: STATUS_MSG,
    swaggerDefaultResponseMessages: swaggerDefaultResponseMessages,
    JOI: JOI,
};

module.exports = APP_CONSTANTS;
