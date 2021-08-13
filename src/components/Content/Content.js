import { BrowserRouter, Route } from 'react-router-dom';
import style from './Content.module.css';
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';

function Content(props) {
    return (
        <div className={style.content}>
            <Route path='/profile' render={() => <Profile state={props.state.profile} addPost={props.addPost}/>}></Route>
            <Route path='/messages' render={() => <Dialogs state={props.state.dialogs} />}></Route>
        </div>
    );
}

export default Content;