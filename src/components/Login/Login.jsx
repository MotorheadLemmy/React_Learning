import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { Input } from '../common/FormsControls/FormsControls'
import {login} from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import style from './../common/FormsControls/FormsControls.module.css'

const LoginForm=(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} 
                validate={[required]}
                component={Input}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'}
                validate={[required]} component={Input}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememeberMe'} component={Input}/>Remember me
            </div>
            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl &&  <Field name={'captcha'} component={Input} validate={[required]} placeholder={'symbols from image'} />}
            {props.error && <div className={style.formSummaryError}>
                {props.error}

            </div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm= reduxForm({
    form: 'login'
  })(LoginForm)
const Login=(props)=>{
    const onSubmit=(formData)=>{
        props.login(formData.email,formData.password,formData.rememberMe,formData.captcha)
    }   
    if (props.isAuth){
        return <Redirect to ={'/profile'}/>
    }
     return (
        <div> 
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
    captchaUrl:state.auth.captchaUrl,
    isAuth:state.auth.isAuth
    }
}
export default connect(mapStateToProps, {login} )(Login)