const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

// Define Schema Types


    //going to make a seperate schema for propertyInformation 
    const propertyInform = new mongoose.Schema({
        pID = new Schema.type.ObjectId,
        pName:{type: String, required: true},
        pStreet: {type: String, required: true},
        pPhone: {type: String, required: true},
        pUnit: {type: String, required: true},
        pCity:{type: String, required: true, default: "Charlotte"},
        pState: {type: String, required: true, default: "North Carolina"},
        pZipC: {type: String, required: true},
        pLightCap: {type: String, required: true},
    });
    




let userSchema = new Schema({
    //sets the default mongo _id for each new users, pID 
    _id: new Schema.Types.ObjectId,
    name: {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true}
    },

    email: {
        type: {type: String, required: true}
    },

    phone: {
        type: {type: String, required: true}
    },

    password: {
        type: {type: String, required: true}
    },

    title:{
        type:  String //returns job title if available [Stakeholder, System Adminstrator, Property Managers] 
    },

    company:{
        type: {type: String, required: true} //return which company this person orignates from 
    },

    propertyInformation: propertyInform,

    //batch setting choices
    //Weekly, every two weeks, once a month, daily, none, or number of days.
    batchSetting:{type: String},

    //department return a type of industry which this account is associated with, if avaiable.
    //healthcare, real estate, hospitality, .... etc.   
    department:{type: String, required: true}

}, { collection: 'CCID users'}

);

module.exports = mongoose.model("users", userSchema);

//insert into the server.js file
const user = require("./models/user");


/*
files implemented using 
https://kb.objectrocket.com/mongo-db/simple-mongoose-and-node-js-example-1007
https://youtu.be/5QEwqX5U_2M
*/
