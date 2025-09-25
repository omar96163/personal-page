import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [status, setStatus] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xyznyaoo", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        form.reset();
        setStatus(false);
        toast.success("Message sent successfully !", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
        });
      } else {
        setStatus(false);
        toast.error("Something went wrong.", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
        });
      }
    } catch {
      setStatus(false);
      toast.error("Network error. Please try later.", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="w-[300px] md:w-[400px] lg:w-[500px] flex flex-col items-center gap-y-8"
      >
        <h2 className="md:text-2xl font-bold">Talk To Me</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full font-bold px-3 py-2 rounded-lg outline-none border-[3px] border-yellow-200 hover:border-yellow-400 
          focus:border-yellow-600 bg-transparent shadow-lg shadow-black transition duration-300 placeholder:font-thin focus:-translate-y-1"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full font-bold px-3 py-2 rounded-lg outline-none border-[3px] border-yellow-200 hover:border-yellow-400 
          focus:border-yellow-600 bg-transparent shadow-lg shadow-black transition duration-300 placeholder:font-thin focus:-translate-y-1"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          className="w-full font-bold px-3 py-2 rounded-lg outline-none border-[3px] border-yellow-200 hover:border-yellow-400 resize-y
          focus:border-yellow-600 bg-transparent shadow-lg shadow-black transition duration-300 placeholder:font-thin focus:-translate-y-1"
        ></textarea>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-lg p-2 border-2 border-yellow-500 hover:text-yellow-500 transition duration-300 bg-yellow-500 
          text-black font-semibold hover:bg-black active:scale-90"
        >
          {status ? "Sending..." : "Send"}
        </button>
      </form>

      <ToastContainer limit={3} newestOnTop />
    </div>
  );
};

export default ContactForm;
