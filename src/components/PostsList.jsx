import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import { useState } from 'react';
import Modal from './Modal';

function PostList() {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    const [modalIsVisible, setModalIsVisible] = useState(true);

    function onBodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function onAuthorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function onClickModalBackdropHandler() {
        setModalIsVisible(false)
    }

    // let modalContent;

    // if (modalIsVisible) {
    //     modalContent = (
    //         <Modal onClickModalBackdrop={onClickModalBackdropHandler}>
    //             <NewPost
    //                 onBodyChange={onBodyChangeHandler}
    //                 onAuthorChange={onAuthorChangeHandler}
    //             />
    //         </Modal>
    //     );
    // }

    return (
        <>
            {modalIsVisible && (
                <Modal onClickModalBackdrop={onClickModalBackdropHandler}>
                    <NewPost
                        onBodyChange={onBodyChangeHandler}
                        onAuthorChange={onAuthorChangeHandler}
                    />
                </Modal>
            )
            }
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