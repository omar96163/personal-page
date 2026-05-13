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
        toast.success("Message sent successfully!", { position: "bottom-right", autoClose: 4000, hideProgressBar: true });
      } else {
        setStatus(false);
        toast.error("Something went wrong.", { position: "bottom-right", autoClose: 4000, hideProgressBar: true });
      }
    } catch {
      setStatus(false);
      toast.error("Network error. Please try later.", { position: "bottom-right", autoClose: 4000, hideProgressBar: true });
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-5">
        <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-primary)" }}>
          Send a Message
        </h3>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="contact-input"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          className="contact-input resize-y"
        />
        <button
          type="submit"
          disabled={status}
          className="btn-primary justify-center w-full disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span>{status ? "Sending..." : "Send Message"}</span>
          {!status && (
            <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          )}
        </button>
      </form>
      <ToastContainer limit={3} newestOnTop />
    </div>
  );
};

export default ContactForm;
