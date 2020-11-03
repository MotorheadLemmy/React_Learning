const UPDATE_NEW_MESSAGE_BODY='UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE='SEND-MESSAGE'

let initialState={
    messages:[
        {id:1,message:'hi'},
        {id:2,message:'oh yeah'},
        {id:3,message:'wow'},
      ],
      dialogs:[
        {id:1,name:'Joe'},
        {id:2,name:'Mark'},
        {id:3,name:'James'},
        {id:4,name:'Kirk'},
        {id:5,name:'Lars'},
      ],
      newMessageBody:''

  }
const dialogsReducer=(state=initialState,action)=>{
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody=action.body
            return state
        case SEND_MESSAGE:
            let body=state.newMessageBody
            state.newMessageBody=''
            state.messages.push({id:6,message:body})
            return state
        default:
            return state    
    }

}

export const sendMessageCreator=()=>{
    return{
      type:SEND_MESSAGE
    }
  }
  export const updateNewMessageBodyCreator=(body)=>{
    
    return{
      type:UPDATE_NEW_MESSAGE_BODY, body:body
    }
  }
export default dialogsReducer