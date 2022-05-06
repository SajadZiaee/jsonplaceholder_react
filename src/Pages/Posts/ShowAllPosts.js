import { useEffect, useState } from 'react';
import SinglePost from './Components/SinglePost';
const ShowAllPosts = () => {
    const [posts, setPosts] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                setError(null);
                setLoading(false);
                setPosts(json);
            })
            .catch((err) => {
                setLoading(false);
                setError(err);
            });


    }, []);

    return (

        <div className="mt-4">

            {loading && <div className="spinner-border mx-2"></div>}
            {error && <h1>{error}</h1>}

            {posts && <div className="row">
                {posts.map((post) =>

                    <SinglePost key={post.id} id={post.id} title={post.title} body={post.body}></SinglePost>


                )
                }

            </div>}



        </div>
    );
}

export default ShowAllPosts;