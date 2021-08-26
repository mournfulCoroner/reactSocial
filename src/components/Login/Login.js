import React from 'react';
import styles from './Login.module.css'
import errorStyles from './../Content/common/errorStyles.module.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { getAuthorized } from '../../redux/reducers/auth-reducer';
import { Redirect } from 'react-router-dom';

const LoginForm = (props) => {
    return (
        <Formik
            initialValues={{ email: '', password: '', rememberMe: false}}
            validationSchema={Yup.object({
                email: Yup.string()
                    .required('Required'),
                password: Yup.string()
                    .required('Required'),
            })}
            onSubmit={(values, { setSubmitting, setErrors }) => {

                setTimeout(() => {
                    props.getAuthorized(values).then(()=>{
                        setErrors({rememberMe: props.successAuth})
                    })
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmittig, touched, errors, status}) => (
                <Form className={styles.login_form}>
                    <Field name='email' type='email' placeholder={'Email'} 
                    className={touched.email && errors.email  && `${errorStyles.error}`}/>
                    <ErrorMessage name='email' component="div" className={styles.error_message} />

                    <Field name='password' type='password' placeholder={'Password'} 
                     className={touched.password && errors.password && `${errorStyles.error}`}/>
                    <ErrorMessage name='password' component="div" className={styles.error_message} />
{/* 
                    {status?.apiError ? <div className={styles.error_message}>{status.apiError}</div> : null} */}
                    
                    <ErrorMessage name='rememberMe' component="div" className={styles.error_message} /> 

                    <div className={styles.remember_area}>
                        <Field name='rememberMe' type='checkbox' />
                        <label htmlFor='rememberMe'>Remember me</label>
                    </div>

                    <button type='submit' disabled={isSubmittig} >Клик</button>
                </Form>)}
        </Formik>
    )
}

const Login = (props) => {

    if (props.isAuth){
        return <Redirect to={`/profile`} /> 
    }
    return (
        <div>
            {props.isAuth ? <div>Вы залогинены</div> :  
            <>
            <div className={styles.login_name}>Логин</div>
            <LoginForm getAuthorized={props.getAuthorized} successAuth={props.successAuth} />
            </>
            }
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        id: state.auth.id,
        successAuth: state.auth.successAuth
    }
}


export default connect(mapStateToProps, {
    getAuthorized
}) (Login)