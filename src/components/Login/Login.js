import React from 'react';
import styles from './Login.module.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { loginAPI } from '../../api/api';
import { connect } from 'react-redux';

const LoginForm = (props) => {
    return (
        <Formik
            initialValues={{ email: '', password: '', rememberMe: false }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .required('Required'),
                password: Yup.string()
                    .required('Required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    loginAPI.getAuthorized(values);
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmittig }) => (
                <Form className={styles.login_form}>
                    <Field name='email' type='email' placeholder={'Email'} />
                    <ErrorMessage name='email' component="div" className={styles.error_message} />

                    <Field name='password' type='password' placeholder={'Password'} />
                    <ErrorMessage name='password' component="div" className={styles.error_message} />

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
    return (
        <div>
            {props.isAuth ? <div>Вы залогинены</div> :  
            <>
            <div className={styles.login_name}>Логин</div>
            <LoginForm />
            </>
            }
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps) (Login)