import Layout from "../Components/Dashboard Components/Layout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../Components/Notes_Components/Loading";
import TextArea from "../Components/Dashboard Components/TextArea";
import Background from "../Components/framerComponents/background";
// import Sidebar from "../Components/Dashboard Components/Sidebar";
const Dashboard = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [Name, Username] = useState("");
  useEffect(() => {
    fetch("http://localhost:4000/Notes/" + id)
      .then((res) => res.json())
      .then((res) => {
        // console.log("hello = ", res);
        Username(res.name);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div className="flex">
        <Layout Name={Name} id={id} />
        <TextArea />
      </div>
    </>
  );
};

export default Dashboard;
