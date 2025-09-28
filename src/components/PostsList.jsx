import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import { useState } from 'react';
import Modal from './Modal';

function PostList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
       /*
        This is not optimal but works
        setPosts([postData, ...posts]);
       */
        // Rule: if you update state and the new state 
        // is based/depends on the previous state, you should pass
        // a function instead to the `setState` function like so
        // The function you pass will receive the current state value
        // which can be used to update the new state 
        // This ensures you have the latetest corrct state in case of
        // multiple updates which React doesn't guarantee will be run immediately
        setPosts((currentPosts) => [postData, ...currentPosts])
    }

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost
                        onCancel={onStopPosting}
                        onAddpost={addPostHandler}
                    />
                </Modal>
            )}
            <ul className={classes.posts}>
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