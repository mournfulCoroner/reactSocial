import { BrowserRouter, Route } from 'react-router-dom';
import style from './Content.module.css';
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';

function Content() {
    return (

        <div className={style.content}>
            <Route path='/profile' component={Profile}></Route>
            <Route path='/messages' component={Dialogs}></Route>
        </div>

    );
}

export default Content;