import {MdPostAdd, MdMessage} from 'react-icons/md'; //third party library, run npm
//run npm install react-icons to download the library into the project
//this will update the packgae.json file
import classes from './MainHeader.module.css';

function MainHeader({onCreatePost}) {
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
               <MdMessage/>
               React Poster
            </h1>
            <p>
                <button className={classes.button} onClick={onCreatePost}>
                    <MdPostAdd size={18}/>
                    New Post
                </button>
            </p>
        </header>
    );
}

export default MainHeader