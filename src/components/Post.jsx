import styles from './Post.module.css' //this is how you must import styles from CSS modules
//this way (the name you choose for the import, in this case 'styles' doesn't matter), 
// each specified style selector can be referenced during usage

// Attributes added to components are called props
// They allow components to take arguments like regular functions do
// props here is an object that allows access to any custom value
// passed to the Post component wherever it is used 
// (I find this weird tho coming from a statically typed OOP language as a mobile developer!)

function Post(props) {
   
    return <div className={styles.post}>
        <p className={styles.author}>{props.author}</p>
        <p className={styles.text}>{props.body}</p>
    </div>
}

export default Post;