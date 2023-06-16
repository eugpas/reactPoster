import { Link } from 'react-router-dom';
import classes from './Post.module.css';
import { MdDeleteForever } from 'react-icons/md';

function Post({id, name, body}) {

    return (
        <li className={classes.post}>
            <Link to={id}>
                <p className={classes.name}>{name}</p>
                <p className={classes.text}>{body}</p>
            </Link>
            <Link className={classes.icon} to={'/delete/' + id} >
                <MdDeleteForever size={25}/>
            </Link>
        </li>
    );
}

export default Post;
