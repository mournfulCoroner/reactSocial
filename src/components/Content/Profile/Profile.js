import style from './Profile.module.css';
import Profile_header from './Profile_header/Profile_header';
import Wall from './Wall/Wall';

function Profile() {
    return (
        <div className={style.profile}>
            <div className={style.back_profile}>
                <img src='https://st.depositphotos.com/1006076/3995/i/600/depositphotos_39951147-stock-photo-spring-landscape-watercolor-flowering-trees.jpg'></img>
            </div>
            <Profile_header />
            <div className={style.description}>О себе ничего пока сказать не могу. Посмотрим, что будет дальше.</div>
            <Wall />
        </div>
    );
}

export default Profile;