import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import { useState } from 'react';
import Modal from './Modal';

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
        {/* To give NewPost modal overlay look */}
            <Modal>
                <NewPost
                    onBodyChange={onBodyChangeHandler}
                    onAuthorChange={onAuthorChangeHandler}
                />
            </Modal>
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Mike" body="I am loving this course" />
            </ul>
        </>
    );
}

export default PostList;

/**
 * Note:
 * If you wrap a component inside another component, by default React
 * would not know where that component should be until you specifically
 * tell it using props.children
 */