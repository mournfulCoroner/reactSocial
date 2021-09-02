import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ProfileInfoForm.module.css';
import errorStyles from './../../../common/errorStyles.module.css'

const ProfileInfoForm = (props) => {
    return (
        <div>
            <Formik
                initialValues={{
                    fullName: props.user.fullName, aboutMe: props.user.aboutMe || '',
                    lookingForAJob: props.user.lookingForAJob || false,
                    lookingForAJobDescription: props.user.lookingForAJobDescription || '',
                    github: props.user.contacts.github || '', vk: props.user.contacts.vk || '',
                    facebook: props.user.contacts.facebook || '', instagram: props.user.contacts.instagram || '',
                    twitter: props.user.contacts.twitter || '', website: props.user.contacts.website || '',
                    youtube: props.user.contacts.youtube || '', mainLink: props.user.contacts.mainLink || ''
                }}
                validationSchema={Yup.object({
                    fullName: Yup.string()
                    .required('Required'),
                    aboutMe: Yup.string()
                    .required('Required'),
                    lookingForAJobDescription: Yup.string()
                    .required('Required'),
                    github: Yup.string(),
                    vk: Yup.string(),
                    facebook: Yup.string(),
                    instagram: Yup.string(),
                    twitter: Yup.string(),
                    website: Yup.string(),
                    youtube: Yup.string(),
                    mainLink: Yup.string()
                })}
                onSubmit={(values, { setSubmitting }) => {

                    setTimeout(() => {
                        let contacts = {
                            github: values.github, vk: values.vk,
                            facebook: values.facebook, instagram: values.instagram, twitter: values.twitter,
                            website: values.website, youtube: values.youtube, mainLink: values.mainLink
                        };
                        let user = {
                            fullName: values.fullName, aboutMe: values.aboutMe,
                            lookingForAJob: values.lookingForAJob,
                            lookingForAJobDescription: values.lookingForAJobDescription,
                            contacts,
                            userId: props.user.userId
                        }
                        props.saveUserInfo(user).then(() => {
                            props.setEditInfoMode(false);
                        });
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmittig }) => (
                    <Form >
                        Полное имя: <Field name='fullName' />
                        <ErrorMessage name='fullName' component="div" className={errorStyles.error_message} />
                        Обо мне: <Field name='aboutMe' as='textarea' placeholder={'Обо мне'} />
                        <ErrorMessage name='aboutMe' component="div" className={errorStyles.error_message} />

                        <div>
                            <Field name='lookingForAJob' type='checkbox' />
                            <label htmlFor='lookingForAJob'>Ищем работу?</label>
                        </div>

                        Навыки: <Field name='lookingForAJobDescription' as='textarea' placeholder={'Навыки'} />
                        <ErrorMessage name='lookingForAJobDescription' component="div" className={errorStyles.error_message} />

                        {
                            Object.keys(props.user.contacts).map((key) => {
                                return <div key={key}>{key} <Field name={key} />
                                <ErrorMessage name={key} component="div" className={errorStyles.error_message} /></div>
                            })
                        }

                        <button type='submit' disabled={isSubmittig} >Клик</button>
                    </Form>)}
            </Formik>
        </div>
    )
}

export default ProfileInfoForm;