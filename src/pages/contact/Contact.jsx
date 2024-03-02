import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { API_URL } from "../../config/EnvironmentVariables";
import axios from "axios";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [send, setSend] = useState("");

  async function feedback(e) {
    e.preventDefault();
    console.log({ name, email, message });
    setSend("");
    try {
      const feed = await axios({
        method: "post",
        url: `${API_URL}/contact`,
        data: {
          name: name,
          email: email,
          msg: message,
        },
      });
      setSend("Feedback sent");
      console.log(feed.data);
      setTimeout(() => {
        setSend("");
      }, 3000);
    } catch (err) {
      console.log(err);
    }

    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <div className="container">
      <h1 className="text-center text-3xl p-3 text-slate-400">Contact Us</h1>
      <section className="text-gray-600  body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-1/ md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.5579305851784!2d85.5109329747594!3d27.638204876222215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb08cf00000001%3A0x3012131bbbefbd33!2sITBRIDGE!5e0!3m2!1sen!2snp!4v1709198394825!5m2!1sen!2snp"
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Banepa-8,kavre <br />
                  Nepal
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  example@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <form
            onSubmit={feedback}
            className="lg:w-1/2 rounded-xl  md:w-1/2 bg-grey-600 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          >
            <h2 className="text-gray-200 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-white ">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-200">
                Name
              </label>
              <input
                required
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                value={name}
                name="name"
                className="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-200"
              >
                Email
              </label>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-200"
              >
                Message
              </label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                name="message"
                className="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            {send}
            <button
              type="submit"
              className="text-white  flex items-center w-[20%] bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              <IoIosSend />
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
