import Post from './Post';
import classes from './PostsList.module.css';
import { useLoaderData } from 'react-router-dom';

function PostList() {
    //returns the loader data (posts) from the loader function
    //assigned to this component's route and triggered by React
    //when the route is navigated to
    const posts = useLoaderData();
   
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
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {/* The key prop which should be a guaranteed unique value 
                is not a prop you must accept or use in your component.
                It is a way for React to efficienty handle JSX elements/components in a list */}
                    {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
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