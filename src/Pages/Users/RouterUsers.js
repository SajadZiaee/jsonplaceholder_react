import { Route, Routes } from "react-router-dom";
import ShowAllUsers from "./ShowAllUsers";
import ShowUserPosts from "./ShowUserPosts";

const RouterUsers = () => {
    return (
        <Routes>
            <Route path="/" element={<ShowAllUsers />} />
            <Route path="/:id" element={<ShowUserPosts />} />
        </Routes>
    );
}
export default RouterUsers;