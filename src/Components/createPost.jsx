import { useState } from "react";
import Swal from "sweetalert2";
import "./CreatePost.css";

export default function CreatePost() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user")); // Assuming user data is stored in localStorage
    if (!user) {
      Swal.fire({
        title: "❌ Error",
        text: "User not logged in!",
        icon: "error",
      });
      return;
    }

    // Create form data to send to the server
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("content", formData.content);
    formDataToSend.append("authorId", user.id);
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    try {
      const res = await fetch("http://localhost:5000/post", {
        method: "POST",
        body: formDataToSend,
      });

      if (!res.ok) throw new Error("Failed to create post");

      const data = await res.json();
      console.log("Post created:", data);

      Swal.fire({
        title: "✅ Post Created Successfully!",
        text: `Title: ${data.title}`,
        icon: "success",
      });

      setFormData({ title: "", content: "", image: null });

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

        <form onSubmit={handleSubmit} encType="multipart/form-data">
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

          <label htmlFor="content">Description:</label>
          <textarea
            id="content"
            name="content"
            placeholder="Enter post description"
            value={formData.content}
            onChange={handleChange}
            required
          />

          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />

          <button type="submit">Create Post</button>
        </form>
      </div>
    </div>
  );
}
