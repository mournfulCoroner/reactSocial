import styles from './Preloader.module.css'
import GhostFetching from './../../../../assets/images/Ghost.gif';

let Preloader = (props) => {
    return <div className={styles.fetch_wrapper}><img className={styles.fetching} src={GhostFetching} alt=''></img>
    <p>learn react...</p>  </div>
}

export default Preloader;