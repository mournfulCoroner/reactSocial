import style from './Post.module.css';

function Post(props) {
    return (
        <div className={style.post}>
            <div className={style.main_area}>
                <img className={style.post_avatar} alt='' src='https://cdn.xxl.thumbs.canstockphoto.ru/%D0%BF%D1%83%D1%80%D0%BF%D1%83%D1%80%D0%BD%D1%8B%D0%B9-%D1%86%D0%B2%D0%B5%D1%82-%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82-%D0%BC%D0%BE%D0%B7%D0%B0%D0%B8%D0%BA%D0%B0-%D0%B7%D0%B0%D0%B4%D0%BD%D0%B8%D0%B9-%D0%BF%D0%BB%D0%B0%D0%BD-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%8B%D0%B5-%D0%B2-%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B5-eps_csp34882537.jpg'></img>
                <div className={style.post_text}>{props.post_text}</div>
            </div>
            <div className={style.add_area}>
                Лайки: {props.likes}
            </div>
        </div>
    );
}

export default Post;