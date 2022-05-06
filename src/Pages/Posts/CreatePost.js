import { useState } from "react";
import Swal from 'sweetalert2';
const CreatePost = () => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: id,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setError(null);
                setLoading(false);
                Swal.fire(
                    'Post Created Successfully',
                    `title: ${title}`,
                    'success',
                )
            }).catch((err) => {
                setError(err);
                setLoading(false);
                Swal.fire(
                    'Post Couldn\'t Be Created',
                    `error: ${error}`,
                    'warning',
                )
            });
    }
    return (
        <>
            <div className="col-9 m-auto mt-4">
                <form onSubmit={(e) => { handleSubmit(e) }}>
                    <div className="form-group">
                        <input onChange={(e) => { setId(e.target.value); }} type="text" className="form-control my-2" id="input-id" placeholder="Enter id" />
                    </div>
                    <div className="form-text text-danger">
                        {id ? '' : 'user id is required'}
                    </div>
                    <div className="form-group">
                        <input onChange={(e) => { setTitle(e.target.value) }} type="text" className="form-control my-2" id="input-title" placeholder="Enter post title" />
                    </div>
                    <div className="form-text text-danger">
                        {title ? '' : 'post title is required'}
                    </div>
                    <div>
                        <textarea onChange={(e) => { setBody(e.target.value) }} className="form-control my-2" id="input-body" placeholder="Enter post body" rows="3"></textarea>
                    </div>
                    <div className="form-text text-danger">
                        {body ? '' : 'post body is required'}
                    </div>
                    <button type="submit" className="btn btn-success mt-2" disabled={title === '' || body === '' || id === ''}>{loading && <div className="spinner-border spinner-border-sm mx-2"></div>}Submit</button>

                </form>
            </div>


        </>
    );
}

export default CreatePost;