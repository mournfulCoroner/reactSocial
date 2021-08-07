import style from './Content.module.css';
import Profile from './Profile/Profile';

function Content() {
    return (
        <div className={style.content}>
            <Profile />
        </div>
    );
}

export default Content;