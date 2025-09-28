// This import allows us to navigate to a route in our SPA without sending a new request
// to the server which would cause the React app to be served again on every navigation
// to a route, such is not good for performance
import { Link } from 'react-router-dom';
import { MdPostAdd, MdMessage } from 'react-icons/md'; //third party library, run npm
//run npm install react-icons to download the library into the project
//this will update the packgae.json file
import classes from './MainHeader.module.css';

function MainHeader() {
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
                <MdMessage />
                React Poster
            </h1>
            <p>
                {/* <Link> tag is used here instead of <a> tag */}
                <Link to="/create-post" className={classes.button}>
                    <MdPostAdd size={18} />
                    New Post
                </Link>
            </p>
        </header>
    );
}

export default MainHeader