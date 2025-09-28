import Post from './Post';
import classes from './PostsList.module.css';
import { useState, useEffect } from 'react';

function PostList() {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    // our locally hosted dummy backend node server
    // GET is the default fetch function hence we don't need to
    // configure this request any further
    fetch('http://localhost:8080/posts')
    // .then(response => response.json())
    // .then(data => {
    //     setPosts(data.posts)
    // }); 
    // classic old way of handling the response (not recommended 
    // here as this would cause an infinite loop due to React updating the state
    // and rendering this component which triggers the fetch request again 
    // resulting in an infinite loop)
    //Use React's useEffect

    // accepts two arguments; a function that returns an object, and a list.
    // The function will be excuted by React whenever values in the list
    // (the second argument) changes referred to as dependencies
    // An empty list will only cause the useEffect to be executed once
    useEffect(() => {
        setIsFetching(true);
        // async/await keywords allows running of asynchronous code
        // since useEffect itself cannot take an async function that returns a promise,
        // hence we create a scoped/nested async function here
        async function fetchPosts() {
            const response = await fetch('http://localhost:8080/posts');
            const resData = await response.json();
            setPosts(resData.posts);
            setIsFetching(false);
        }

        fetchPosts();
    }, []);

    function addPostHandler(postData) {
        // Available in browsers out of the box and can be used to fetch and send http requests/data
        fetch(
            'http://localhost:8080/posts', // our locally hosted dummy backend node server
            {
                method: 'POST',
                body: JSON.stringify(postData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        /*
         This is not optimal but works
         setPosts([postData, ...posts]);
        */
        // Rule: if you update state and the new state 
        // is based/depends on the previous state, you should pass
        // a function instead to the `setState` function like so
        // The function you pass will receive the current state value
        // which can be used to update the new state 
        // This ensures you have the latetest corrct state in case of
        // multiple updates which React doesn't guarantee will be run immediately
        setPosts((currentPosts) => [postData, ...currentPosts])
    }

    return (
        <>
            {!isFetching && posts.length > 0 && (
                <ul className={classes.posts}>
                    {/* The key prop which should be a guaranteed unique value 
                is not a prop you must accept or use in your component.
                It is a way for React to efficienty handle JSX elements/components in a list */}
                    {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
                </ul>
            )}
            {!isFetching && posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
            {isFetching && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <p>Loading posts...</p>
                </div>
            )}
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