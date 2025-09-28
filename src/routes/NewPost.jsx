import Modal from '../components/Modal';
import classes from './NewPost.module.css';
import { Link, Form, redirect } from 'react-router-dom';
// functions that state with `use` in React are called React hooks
// Hook functions are executed in React component functions

function NewPost() {
    return (
        <Modal>
            {/* Using React Form element causes React to handle the form submission instead of the browser
            sending a request as per default.
            React will gather the input data of the form and generate and object for us
            the value of the name attributes we set as properties of the object and call
            the `action` we provide in the route that contains the form.
            React will give the request object a method which could be used on the action
            to find out which form was submitted when the action was triggered in case we
            have multiple forms that belong to the same route with the same action
            */}
            <Form method='post' className={classes.form}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="body" required rows={3} />
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="author" required />
                </p>
                <p className={classes.actions}>
                    <Link to='..' type="button">Cancel</Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;

export async function action({request}) {
    // The request object generated and built by React router when action was triggered
    const formData = await request.formData(); // Retrieves the formdata wrapped in a promise and bundled in the request
    // Extract the fields in the form data
    // formData.get('body')
    // Anther approach
    const postData = Object.fromEntries(formData); // returns { body: '...', author: '...' }
    await fetch(
        'http://localhost:8080/posts', // our locally hosted dummy backend node server
        {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    //redirct can be called in loader or action functions and generates a response object
    //which in the end is returned by the function
    //it returns the result of calling the function
    return redirect('/'); // redirect to home
}

/*
NOTE:
By default if you add buttons to a form, the browser will subit the form when they are pressed.
A submit event will be triggered and the browswer will generate and send an http request to the server
that's serving the website
To ensue the cancel button doesn't trigger and submit the form, we give it a type of `button`
The default value for this is `submit`
*/
