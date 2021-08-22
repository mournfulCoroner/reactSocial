import { Route } from 'react-router-dom';
import Login from '../Login/Login';
import styles from './Content.module.css';
import DialogsContainer from './Dialogs/DialogsContainer';
import ProfileContainer from './Profile/ProfileContainer';
import UsersContainer from './Users/UsersContainer';

function Content(props) {
    return (
        <div className={styles.content}>
            <Route path='/profile/:userId?' render={() => <ProfileContainer />}></Route>
            <Route path='/messages' render={() => <DialogsContainer />}></Route>
            <Route path='/users' render={() => <UsersContainer />}></Route>
            <Route path='/login' render={() => <Login />}></Route>            
        </div>
    );
}

export default Content;