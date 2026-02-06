import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaPinterest } from "react-icons/fa";
import WhatsAppButton from "../WhatsappButton";
import { useState } from "react";
import Reveal from "../Reveal";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    message: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const baseUrl = import.meta.env.VITE_DEV_API_URL;
    try {
      const response = await fetch(baseUrl + "/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      console.log(response);

      if (!response.ok) {
        throw new Error("Failed to send booking request");
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        whatsapp: "",
        message: ""
      });

      alert("Message sent successfully!");

    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/services.png')" }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-10">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Nunito',sans-serif] tracking-tight">
              Contact Us
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-sm md:text-lg text-white font-medium max-w-3xl mx-auto opacity-90 leading-relaxed drop-shadow-md">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Redesigned Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden min-h-[600px] border border-gray-100">

              {/* Left Side - Informational (Brand Color) */}
              <div className="lg:w-[40%] bg-[#8B5A1C] p-8 md:p-12 text-white flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-4 font-['Nunito',sans-serif]">Get In Touch</h2>
                  <p className="text-white/80 mb-10 text-sm leading-relaxed">
                    The standard lorem ipsum passage has been a printer's friend for centuries. Like stock photos today, it served as a placeholder for actual content.
                  </p>

                  <div className="space-y-8">
                    <div className="flex items-center gap-5">
                      <FaMapMarkerAlt className="text-2xl text-white/90 shrink-0" />
                      <div>
                        <p className="text-sm font-medium leading-relaxed">Mariamman kovil street, veeranam, tiruvannamalai, 606 706</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5">
                      <FaEnvelope className="text-2xl text-white/90 shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Email: enquiry@nkdroptaxi.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5">
                      <FaPhone className="text-2xl text-white/90 shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Call: +91 8489751086</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5">
                      <FaPhone className="text-2xl text-white/90 shrink-0 rotate-90" />
                      <div>
                        <p className="text-sm font-medium">Fax: +91 000 000 0000</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-8 mt-12">
                  <a href="#" className="hover:text-white/70 transition-colors text-lg"><FaFacebookF /></a>
                  <a href="#" className="hover:text-white/70 transition-colors text-lg"><FaPinterest className="rotate-0" /> {/* Using Pinterest as substitute for G+ if logo fits */} </a>
                  <a href="#" className="hover:text-white/70 transition-colors text-lg font-bold">G</a>
                  <a href="#" className="hover:text-white/70 transition-colors text-lg font-bold">in</a>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="lg:w-[60%] p-8 md:p-12 bg-white flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-8 font-['Nunito',sans-serif]">We want to hear from you!</h3>
                <form onSubmit={handleSubmit} className="flex-grow flex flex-col space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-5 py-4 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#E18B1C] transition-all text-sm placeholder:text-gray-400"
                      required
                    />
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full px-5 py-4 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#E18B1C] transition-all text-sm placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      className="w-full px-5 py-4 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#E18B1C] transition-all text-sm placeholder:text-gray-400"
                    />
                    <input
                      type="tel"
                      id="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="Whatsapp number"
                      className="w-full px-5 py-4 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#E18B1C] transition-all text-sm placeholder:text-gray-400"
                    />
                  </div>

                  <textarea
                    id="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="w-full px-5 py-4 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#E18B1C] transition-all text-sm placeholder:text-gray-400 resize-none"
                    required
                  ></textarea>

                  <div className="flex justify-end mt-auto pt-4">
                    <button
                      type="submit"
                      className="bg-[#B27E36] hover:bg-[#8B5A1C] text-white px-12 py-3 rounded-lg font-bold text-sm shadow-md transition-all active:scale-95"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* Full Width Map Section */}
      <section className="w-full h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2318.75033876636!2d78.90633761787652!3d12.203678934856677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac9348595ffc0f%3A0xee889866cc472618!2sSri%20Maha%20Sakthi%20Marriyamman%20Temple%2C%20Naickanoor!5e0!3m2!1sen!2sin!4v1753857163000!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location"
        ></iframe>
      </section>
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;