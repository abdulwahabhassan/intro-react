import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import { useState } from 'react';

function PostList() {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function onBodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function onAuthorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
            <NewPost onBodyChange={onBodyChangeHandler} onAuthorChange={onAuthorChangeHandler} />
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Mike" body="I am loving this course" />
            </ul>
        </>
    );
}

export default PostList;