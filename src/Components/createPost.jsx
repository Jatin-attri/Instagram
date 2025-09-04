import { useState } from "react";
import Swal from "sweetalert2";
import "./CreatePost.css"; // Import CSS

export default function CreatePost() {
  const [formData, setFormData] = useState({
    title: "",
    authorId: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to create post");

      const data = await res.json();
      console.log("Post created:", data);

      Swal.fire({
        title: "✅ Post Created Successfully!",
        text: `Title: ${data.title}`,
        icon: "success",
      });

      // Reset form
      setFormData({ title: "", authorId: "" });

    } catch (err) {
      Swal.fire({
        title: "❌ Error",
        text: err.message,
        icon: "error",
      });
    }
  };

  return (
    <div className="create-post-page">
      <div className="create-post-container">
        <h2>Create New Post</h2>
        <p>Fill in the details below to publish your post</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Post Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter post title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <label htmlFor="authorId">Author ID:</label>
          <input
            type="text"
            id="authorId"
            name="authorId"
            placeholder="Enter author ObjectId"
            value={formData.authorId}
            onChange={handleChange}
            required
          />

          <button type="submit">Create Post</button>
        </form>
      </div>
    </div>
  );
}
