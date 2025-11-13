import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import './dev.css'
import { useNavigate } from "react-router-dom";

function DeveloperDashboard() {
  const [contentList, setContentList] = useState([]);
  useEffect(() => {
    fetchContent();
  }, []);

    const navigate = useNavigate();

  const fetchContent = async () => {
    const { data, error } = await supabase
      .from("maintodo")
      .select("*");

    if (error) console.error(error);
    else setContentList(data);
  };

  const doneTask = async (id, isCompleted) => {
    const { error } = await supabase
      .from("maintodo")
      .update({ isCompleted: !isCompleted })
      .eq("id", id);

    if (error) console.error("Error updating task:", error);
    else fetchContent();
  };

 return (
  <div className="dashboard-container">
    <button onClick={() => navigate("/") }>Go to Login</button>
    <h2>Developer Dashboard</h2>
    {contentList.map((item) => (
      <div key={item.id} className="content-card">
        <h3>Tittle: {item.tittle}</h3>
        <p><strong>Section:</strong> {item.section}</p>
        <p><strong>Description:</strong> {item.description}</p>
        <p><strong>Link:</strong> <a href={item.link} target="_blank" rel="noreferrer">{item.link}</a></p>
        <button onClick={() => doneTask(item.id, item.isCompleted)} className={`doneBtn ${item.isCompleted ? "completed" : "notCompleted"}`}>{item.isCompleted ? "Completed" : "Not completed"}</button>
        
      </div>
    ))}
  </div>
);}
export default DeveloperDashboard;
