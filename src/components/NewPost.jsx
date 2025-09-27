import classes from './NewPost.module.css';
import { useState } from 'react'
// functions that state with `use` in React are called React hooks
// Hook functions are executed in React component functions

function NewPost() {
    const [enteredBody, setEnteredBody] = useState('');
    // Returns exactly two elements: current value and function used to update the value
    // Calling the state updating function re-renders your React component if the new value
    // differs from the current value

    function changeBodyHandler(event) {
        // The target of the event will be textarea
        // Calling .value allows us to access the value of the target
        // when the event was triggered
        setEnteredBody(event.target.value);
    }

    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={changeBodyHandler} />
            </p>
            <p>{enteredBody}</p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required />
            </p>
        </form>
    );
}

export default NewPost;