import styles from './Users.module.css'
import basePhoto from './../../../assets/images/achhi.jpg'
import UserPile from './UserPile/UserPile';
import Preloader from '../common/Preloader/Preloader';



let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let users = props.users.map((user) => <UserPile key={user.id} id={user.id}
        userName={user.name} status={user.status} isFollow={user.followed}
        followUser={props.followUser} avatar={
            user.photos.small != null ? user.photos.small : basePhoto} />)

            
    return (
        <div className={styles.page_users_wrapper}>
            <div className={styles.pages}>
                {
                    pages.map((page) => {
                        return (<span className={props.activePage === page ? styles.active_page : styles.inactive_page}
                            onClick={() => (props.onPageChange(page))}>
                            {page}</span>)
                    })
                }
            </div>
            {props.isFetching ?
                <Preloader />
                : <div className={styles.users_wrapper}>
                    {users}
                </div>}

        </div>
    )
}

export default Users;