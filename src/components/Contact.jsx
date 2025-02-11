import { useState ,useRef} from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
function Contact() {
  const API = "19c2f795-3464-491b-ae84-589794559686";
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name.trim()) {
      toast.info("Please enter your name");
      nameRef.current.focus();
      return;
    }
    if (!email.trim()) {
      toast.info("Please enter your email");
      emailRef.current.focus();
      return;
    }
    if (!message.trim()) {
      toast.info("Please enter your message");
      messageRef.current.focus();
      return;
    }
    setLoading(true);
    try {
      const data = new FormData(e.target);
      data.append("access_key", API);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      }).then((res) => res.json());

      if (res.success) {
        toast.success(res.message);
         setFormData({
          name: "",
          email: "",
          message:''
         })
      } else {
        toast.error("Submission failed, please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Try again later...");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h2>

        <motion.div
          className="max-w-lg mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-2 outline-none border-blue-600 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm 
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:text-white p-3 transition-all duration-300"
                placeholder="Your Name"
                ref={nameRef}
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md outline-none border-2 border-blue-600  dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm 
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:text-white p-3 transition-all duration-300"
                placeholder="Your Email "
                ref={emailRef}
              />
            </motion.div>

            {/* Message Input */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-2 outline-none border-blue-600 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm 
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:text-white p-3 transition-all duration-300"
                placeholder="Your Message..."
                ref={messageRef}
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-lg font-semibold hover:bg-blue-700 
                dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {loading ? "Submitting" : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
