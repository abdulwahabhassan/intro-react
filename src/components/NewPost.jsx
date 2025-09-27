import classes from './NewPost.module.css';
import { useState } from 'react'
// functions that state with `use` in React are called React hooks
// Hook functions are executed in React component functions

function NewPost(props) {
    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={props.onBodyChange} />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={props.onAuthorChange} />
            </p>
        </form>
    );
}

export default NewPost;