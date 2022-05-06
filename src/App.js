import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Users from './Pages/Users/RouterUsers';
import Posts from './Pages/Posts/RouterPosts';
import RouterPosts from "./Pages/Posts/RouterPosts";
import RouterUsers from "./Pages/Users/RouterUsers";
import CreatePostComponent from "./Pages/Posts/Components/SinglePost";
import ShowAllPosts from "./Pages/Posts/ShowAllPosts";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <div className="container">


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/*" element={< RouterPosts />} />
          <Route path="/users/*" element={<RouterUsers />} />
        </Routes>


      </div>
    </BrowserRouter>




  );
}

export default App;
