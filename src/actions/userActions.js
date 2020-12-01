export function fetchUser(){
    return{
        type:"INC",
        payload:{
            userid:123,
        }
    }
}


export function demo(name){
    return{
        type:"SET_USERID",
        payload:name,
    }
}

export function prodcutsave(data){
    return{
        type:"fetch",
        payload:data,
    }
}