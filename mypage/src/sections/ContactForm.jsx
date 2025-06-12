import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  formData,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
      .then(() => {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("Sending error: " + error.text);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Your name:"
        value={formData.name}
        onChange={handleChange}
        required
        className="border p-2 rounded bg-white text-black placeholder-gray-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email:"
        value={formData.email}
        onChange={handleChange}
        required
        className="border p-2 rounded bg-white text-black placeholder-gray-500"
      />
      <textarea
        name="message"
        placeholder="Your message:"
        value={formData.message}
        onChange={handleChange}
        required
        className="border p-2 rounded bg-white text-black placeholder-gray-500"
      />
      <button
  type="submit"
  className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 self-end w-28"
>
  Send
</button>
    </form>
  );
};

export default ContactForm;