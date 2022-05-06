import { useState, useEffect } from "react";
import SingleUser from "./Components/SingleUser";
const ShowAllUsers = () => {
    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => {
                setError(null);
                setLoading(false);
                setUsers(json);
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

            {users && <div className="row">
                {users.map((user) =>

                    <SingleUser key={user.id} id={user.id} name={user.name} userName={user.username} email={user.email}></SingleUser>


                )
                }

            </div>}

        </div>


    );
}
export default ShowAllUsers;