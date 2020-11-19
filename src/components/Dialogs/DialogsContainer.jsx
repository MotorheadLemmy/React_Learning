import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
//import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


// const DialogsContainer=()=>{
   
//     return(
//         <StoreContext.Consumer>
//             {
//             (store)=>{
//                 //let state=store.getState().dialogsPage
//                 let onSendMessageClick=()=>{
//                     store.dispatch(sendMessageCreator())
            
//                  }
//                  let onNewMessageChange=(body)=>{
                     
//                      store.dispatch(updateNewMessageBodyCreator(body))
            
//                  }

//        return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
//         dialogsPage={store.getState().dialogsPage} />
//             }
// }

//         </StoreContext.Consumer>

//     )
// }
let mapStateToProps=(state)=>{
    return {
        dialogsPage:state.dialogsPage,
       // isAuth:state.auth.isAuth

    }

}
let mapDispatchToProps=(dispatch)=>{
    return{
        sendMessage:()=>{
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody:(body)=>{
            dispatch(updateNewMessageBodyCreator(body))
        }

    }

}

//let AuthRedirectComponent=withAuthRedirect(Dialogs)

// const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs)





// const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent)
// export default DialogsContainer;

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)