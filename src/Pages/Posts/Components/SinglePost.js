import { useNavigate } from "react-router-dom";

const SinglePost = ({ id, title, body }) => {



    const navigate = useNavigate();
    const navigateToEditPost = () => {
        navigate('/posts/' + id + '/edit');
    }
    const navigateToViewPost = () => {
        navigate('/posts/' + id);
    }
    return (

        <div className="col-md-3 d-flex single-post">
            <div className="card bg-secondary m-2 py-2 border-4 border-dark rounded-3 shadow-lg">
                <div className="card-body text-center">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text h6">{body}</p>
                    <button onClick={() => { navigateToEditPost() }} to={id + "/edit"} className="btn btn-dark mx-2">Edit Post</button>
                    <button onClick={() => { navigateToViewPost() }} className="btn btn-dark ">View Post</button>
                </div>
            </div>
        </div>

    );
}
export default SinglePost;