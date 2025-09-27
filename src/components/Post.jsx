const names = ['Hassan', 'Abdulwahab'];

// Attributes added to components are called props
// They allow components to take arguments like regular functions do
// props here is an object that allows access to any custom value
// passed to the Post component wherever it is used 
// (I find this weird tho coming from a statically typed OOP language as a mobile developer!)

function Post(props) {
    props.body
    return <div style={{color: 'white', textAlign:'left'}}>
        <p>{props.author}</p>
        <p>{props.body}</p>
    </div>
}

export default Post;