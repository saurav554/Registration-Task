const userInitialState={}
const profileReducer=(state=userInitialState,action)=>{
    switch(action.type)
    {
        case 'SET_PROFILE':{
            return {...action.payload}
        }
        default:{
            return {...state}
        }
    }
}
export default profileReducer