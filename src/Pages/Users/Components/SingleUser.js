import { useNavigate } from "react-router-dom";

const SingleUser = ({ id, name, userName, email }) => {



    const navigate = useNavigate();

    const navigateToViewPost = () => {
        navigate('/users/' + id);
    }
    return (

        <div className="col-md-4 d-flex single-user">
            <div className="card bg-secondary m-2 py-2 border-4 border-dark rounded-3 shadow-lg w-100">
                <div className="card-body text-center">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text h6">{userName}</p>
                    <p className="card-text h6">{email}</p>

                    <button onClick={() => { navigateToViewPost() }} className="btn btn-dark ">View User Posts</button>
                </div>
            </div>
        </div>

    );
}
export default SingleUser;