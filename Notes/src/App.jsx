// import Header from "../Components/Notes_Components/Header";
import Notes from "./Pages/Notes";
import Dashboard from "./Pages/Dashboard";
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
            <Route path="/" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/dashboard/:id" element={<Dashboard />} />
            <Route path="/notes/:id" element={<Notes />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
