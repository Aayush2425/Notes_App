import Header from "./Components/Header";
import Notes from "./Pages/Notes";
import {
  BrowserRouter,
  Route,
  Link,
  HashRouter,
  Routes,
} from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
export default function App() {
  return (
    <>
      <div className="w-full ">
        <BrowserRouter>
          <Routes>
            <Route path="/Notes_App/" element={<SignIn />} />
            <Route path="/Notes_App/SignUp" element={<SignUp />} />
            <Route path="/Notes_App/Notes/:id" element={<Notes />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
