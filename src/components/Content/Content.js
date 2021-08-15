import { Route } from 'react-router-dom';
import style from './Content.module.css';
import DialogsContainer from './Dialogs/DialogsContainer';
import Profile from './Profile/Profile';

function Content(props) {
    return (
        <div className={style.content}>
            <Route path='/profile' render={() => <Profile store={props.store}/>}></Route>
            <Route path='/messages' render={() => <DialogsContainer store={props.store} />}></Route>
        </div>
    );
}

export default Content;