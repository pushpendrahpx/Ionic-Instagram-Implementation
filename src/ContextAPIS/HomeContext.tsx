import React from 'react';


let defaultValue = {
    userFirestore:{
        photoURL:'',
        username:'',
        name:'',
        website:'',
        bio:'',
        email:'',
        phoneNumber:0,
        gender:''
    },
    userAuthData:{
        photoURL:'',
        uid:''
    }
}

const HomeContext = React.createContext(defaultValue);

export default HomeContext;