import { Formik, Field, Form, ErrorMessage } from 'formik';


const ProfileInfoForm = (props) => {
    return (
        <div>
            <Formik
            initialValues={{ aboutMe: '', lookingForAJob: false, lookingForAJobDescription: '',
        contacts_github: '', contacts_vk: '', contacts__facebook:'', contacts_instagram:'',
        contacts_twitter: '', contacts_website: '', contacts_youtube: '', contacts_mainLink='' }}
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
                    <Field name='aboutMe' as='textarea' />

                    <div className={styles.remember_area}>
                        <Field name='lookingForAJob' type='checkbox' />
                        <label htmlFor='lookingForAJob'>Ищем работу?</label>
                    </div>

                    <Field name='lookingForAJob' placeholder={'Описание'} />
                    
                    

                    <button type='submit' disabled={isSubmittig} >Клик</button>
                </Form>)}
        </Formik>
        </div>
    )
}

export default ProfileInfoForm;