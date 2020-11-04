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
        type:"SET_USERNAME",
        payload:name,
    }
}