import classes from './NewPost.module.css';

function NewPost() {
    function changeBodyHandler(event) {
        // The target of the event will be textarea
        // Calling .value allows us to access the value of the target
        // when the event was triggered
        console.log(event.target.value);
    }

    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required />
            </p>
        </form>
    );
}

export default NewPost;