import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';

const ShowPost = () => {
    const postId = useParams().id;
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false);
    const [loadingDelete, setLoadingDelete] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        setError(null);
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response) => response.json())
            .then((json) => {
                setTitle(json.title);
                setBody(json.body);
                setLoading(false);
                setError(null);
            }).catch((err) => {
                setLoading(false);
                setError(err);
                console.log(err);
            });

    }, []);
    const handleDelete = () => {
        setLoadingDelete(true);
        setError(null);
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE',
        }).then((response) => {
            setError(null);
            setLoadingDelete(false);
            Swal.fire(
                'Post Deleted Successfully',
                `title: ${title}`,
                'warning'
            )
        })

            .catch((err) => {
                setError(err);
                setLoadingDelete(false);
                Swal.fire(
                    'Post Couldn\'t Be Deleted',
                    `error: ${error}`,
                    'warning'
                )
            });

    }

    return (
        <>
            <div className="mt-4">
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
            <button onClick={() => handleDelete()} className="btn btn-danger mt-2 mx-2">{loadingDelete && <div className="spinner-border spinner-border-sm mx-2"></div>}Delete Post</button>


        </>
    );
}

export default ShowPost;