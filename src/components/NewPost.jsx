import classes from './NewPost.module.css';
import { useState } from 'react'
// functions that state with `use` in React are called React hooks
// Hook functions are executed in React component functions

function NewPost({ onSubmitPost, onCancel }) {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function onBodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function onAuthorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function onSubmitPostHandler(event) {
        // This prevents the default browser action of generating and
        // submitting an HTTP request
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        };
        console.log(postData);
        onCancel()
    }


    return (
        <form className={classes.form} onSubmit={onSubmitPostHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={onBodyChangeHandler} />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={onAuthorChangeHandler} />
            </p>
            <p className={classes.actions}>
                <button type='button' onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    );
}

export default NewPost;

/*
NOTE:
By default if you add buttons to a form, the browser will subit the form when they are pressed.
A submit event will be triggered and the browswer will generate and send an http request to the server
that's serving the website
To ensue the cancel button doesn't trigger and submit the form, we give it a type of `button`
The default value for this is `submit`
*/