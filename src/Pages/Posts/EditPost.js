import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';

const EditPost = () => {
    const postId = useParams().id;
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false);
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
            });

    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: postId,
                title: title,
                body: body,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setLoading(false);
                setError(null);
                Swal.fire(
                    'Post Updated Successfully',
                    `title: ${title}`,
                    'success',
                )
            }).
            catch((err) => {
                setError(err);
                setLoading(false);
                Swal.fire(
                    'Post Couldn\'t Be Updated',
                    `error: ${error}`,
                    'warning',
                )
            });

    }
    const handleDelete = () => {

    }
    return (
        <>
            <div className="col-9 m-auto mt-4">
                <form onSubmit={(e) => { handleSubmit(e) }}>

                    <div className="form-group">
                        <input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" className="form-control my-2" id="input-title" placeholder="Enter post title" />
                    </div>
                    <div className="form-text text-danger">
                        {title ? '' : 'post title is required'}
                    </div>
                    <div>
                        <textarea value={body} onChange={(e) => { setBody(e.target.value) }} className="form-control my-2" id="input-body" placeholder="Enter post body" rows="3"></textarea>
                    </div>
                    <div className="form-text text-danger">
                        {body ? '' : 'post body is required'}
                    </div>
                    <button type="submit" className="btn btn-success mt-2" disabled={title === '' || body === ''}>{loading && <div className="spinner-border spinner-border-sm mx-2"></div>}Edit</button>

                </form>
            </div>


        </>
    );
}

export default EditPost;