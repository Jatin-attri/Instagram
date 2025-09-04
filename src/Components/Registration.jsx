import { useState } from "react";
import Swal from "sweetalert2";
import "./Registration.css"; // Import scoped CSS

export default function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "USER"
  });

  async function register(e) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      console.log(data);
      sessionStorage.setItem('username', data.id);
       localStorage.setItem("user", JSON.stringify(data));


      Swal.fire({
        title: "Registration Completed!",
        icon: "success",
        draggable: true,
        
        

      });

   
      // Reset form after success
      setFormData({ name: "", email: "", role: "USER" });

    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Registration Failed!",
        text: "Something went wrong. Try again.",
        icon: "error"
      });
    }
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  return (
    <div className="registration-page">
      <div className="form-container">
        <h2>User Registration</h2>
        <p>Create your account to get started</p>

        <form onSubmit={register}>
          <label htmlFor="name">Enter the User Name:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Enter your Email id:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="role">Select Role:</label>
          <select
            id="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </select>

          <button type="submit">Register</button>
        </form>

        <div className="footer-text">
          © 2025 Jatin Attri | Secure & Simple Registration
        </div>
      </div>
    </div>
  );
}
