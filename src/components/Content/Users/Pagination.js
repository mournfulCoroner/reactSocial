import {  useState } from 'react';
import styles from './Users.module.css'


let Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let pageRange = props.pageRange;
    let [activePageRange, setActivePageRange] = useState(1);
    let leftEdge = (activePageRange - 1) * pageRange + 1;
    let rightEdge = activePageRange * pageRange;

    return (
        <div className={styles.pages}>
            {
                activePageRange > 1 && <button className={styles.arrow_button} onClick={() => {setActivePageRange(activePageRange - 1)}}>{'<--'}</button>
            }
            {
                pages.filter((page) => page >= leftEdge && page <= rightEdge)
                .map((page) => {
                    return (<span key={page} className={props.activePage === page ? styles.active_page : styles.inactive_page}
                        onClick={() => { props.setActivePage(page) }}>
                        {page}</span>
                    )
                })
            }
            {
                activePageRange < pageRange && <button className={styles.arrow_button} onClick={() => {setActivePageRange(activePageRange + 1)}}>{'-->'}</button>
            }
        </div>
    )
}

export default Pagination;