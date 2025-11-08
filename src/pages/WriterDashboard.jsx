
import { useState } from "react";
import { supabase } from "../supabaseClient";
import './writer.css'

function WriterDashboard() {
  const [formData, setFormData] = useState({
    tittle: "",
    section: "",
    description: "",
    link: "",
    isCompleted: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    // Simple validation
    if (!formData.tittle || !formData.section || !formData.description) {
      alert("Please fill in all required fields!");
      return;
    }

    const { data, error } = await supabase
  .from("maintodo")
  .insert([
    {
      tittle: formData.tittle,
      section: formData.section,
      description: formData.description,
      link: formData.link,
      isCompleted: formData.isCompleted
    },
  ]);


    if (error) {
      console.error(error);
      alert("Failed to add content.", error);
    } else {
      alert("Content added!");
      setFormData({ tittle: "", section: "", description: "", link: "", isCompleted: false });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Writer Dashboard</h2>
      <input
        name="tittle"
        placeholder="Tittle"
        value={formData.tittle}
        onChange={handleChange}
      />
      <input
        name="section"
        placeholder="Section"
        value={formData.section}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        name="link"
        placeholder="Link"
        value={formData.link}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add Content</button>
    </div>
  );
}

export default WriterDashboard;
