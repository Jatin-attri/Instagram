import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Components/Homepage';
import Registration from './Components/Registration';
import FeedSection from "./Components/FeedSection";
import CreatePost from "./Components/createPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
     
        <Route path="/" element={<Homepage />}>
         
          <Route index element={<FeedSection />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/post" element={<CreatePost/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
