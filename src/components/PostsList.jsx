import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';

function PostList() {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author="Hassan" body="React.js is awesome!" />
                <Post author="Mike" body="I am loving this course" />
            </ul>
        </>
    );
}

export default PostList;