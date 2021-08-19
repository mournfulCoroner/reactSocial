import { Route } from 'react-router-dom';
import styles from './Content.module.css';
import DialogsContainer from './Dialogs/DialogsContainer';
import Profile from './Profile/Profile';
import UsersContainer from './Users/UsersContainer';

function Content(props) {
    return (
        <div className={styles.content}>
            <Route path='/profile' render={() => <Profile />}></Route>
            <Route path='/messages' render={() => <DialogsContainer />}></Route>
            <Route path='/users' render={() => <UsersContainer />}></Route>
        </div>
    );
}

export default Content;