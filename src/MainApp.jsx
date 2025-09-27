import Post from "./components/Post";

function add(a, b) {
    return a + b;
}

function MainApp() {
    const answer = add(4, 5);
    return (
        <main>
            <Post author="Hassan" body="React.js is awesome!" />
            <Post author="Mike" body="I am loving this course"/>
            <Post />
        </main>
    )
}

export default MainApp