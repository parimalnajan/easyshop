export function fetchUser(){
    return{
        type:"INC",
        payload:{
            userid:123,
        }
    }
}


export function setUserName(name){
    return{
        type:"SET_USERID",
        payload:name,
    }
}

export function demo(){
    return{
        type:"TEST",
        payload:"Hello, this is redux!",
    }
}