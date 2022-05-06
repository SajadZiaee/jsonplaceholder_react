import { Route, Routes } from "react-router-dom";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";
import ShowAllPosts from "./ShowAllPosts";
import ShowPost from "./ShowPost";

const RouterPosts = () => {
    return (
        <Routes>
            <Route path="/" element={<ShowAllPosts />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/:id" element={<ShowPost />} />
            <Route path="/:id/edit" element={<EditPost />} />

        </Routes>
    );
}

export default RouterPosts;