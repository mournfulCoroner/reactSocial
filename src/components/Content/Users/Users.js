import styles from './Users.module.css'
import basePhoto from './../../../assets/images/achhi.jpg'
import UserPile from './UserPile/UserPile';
import Preloader from '../common/Preloader/Preloader';
import Pagination from './Pagination';


let Users = (props) => {

    let users = props.users.map((user) => <UserPile key={user.id} id={user.id}
        userName={user.name} status={user.status} isFollow={user.followed}
        followUser={props.followUser} avatar={
            user.photos.small != null ? user.photos.small : basePhoto}
            isFollowingProgress={props.isFollowingProgress} toggleIsFollowingProgress={props.toggleIsFollowingProgress} />)

            
    return (
        <div className={styles.page_users_wrapper}>
            <Pagination totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
            activePage={props.activePage} setActivePage={props.setActivePage}
            pageRange={props.pageRange}/>
            {props.isFetching ?
                <Preloader />
                : <div className={styles.users_wrapper}>
                    {users}
                </div>}

        </div>
    )
}

export default Users;