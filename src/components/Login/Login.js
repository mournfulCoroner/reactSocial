import React from 'react';
import styles from './Login.module.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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


        // <div>
        //     <form className={styles.login_form}>
        //         <div>
        //             <input placeholder={'Login'} />
        //         </div>
        //         <div>
        //             <input placeholder={'Password'} />
        //         </div>
        //         <div>
        //             <input type={'checkbox'}/> Remember me?
        //         </div>
        //         <div>
        //             <button>Клик</button>
        //         </div>
        //     </form>
        // </div>
    )
}

const Login = (props) => {
    return (
        <div>
            <div className={styles.login_name}>Логин</div>

            <LoginForm />
        </div>
    )
}

export default Login;