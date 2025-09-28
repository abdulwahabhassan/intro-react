import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import { useState } from 'react';
import Modal from './Modal';

function PostList({ isPosting, onStopPosting }) {
    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost
                        onCancel={onStopPosting}
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