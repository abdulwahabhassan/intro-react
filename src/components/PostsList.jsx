import Post from './Post';
import styles from './PostsList.module.css';

function PostList() {
    return (
        <ul className={styles.posts}>
            <Post author="Hassan" body="React.js is awesome!" />
            <Post author="Mike" body="I am loving this course" />
        </ul>
    );
}

export default PostList;