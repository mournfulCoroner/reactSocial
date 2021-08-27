import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import Login from '../Login/Login';
import Preloader from './common/Preloader/Preloader';
import styles from './Content.module.css';
import UsersContainer from './Users/UsersContainer';

const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'))

function Content(props) {
    return (
        <div className={styles.content}>
            <Suspense fallback={<Preloader />}>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />}></Route>
                <Route path='/messages' render={() => <DialogsContainer />}></Route></Suspense>
            <Route path='/users' render={() => <UsersContainer />}></Route>
            <Route path='/login' render={() => <Login />}></Route>
        </div>
    );
}

export default Content;