// components/ContactSection.tsx
export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-goka-bg px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-goka-dark uppercase tracking-tighter">
              Get in <span className="text-goka-orange">Touch</span>
            </h2>
            <p className="text-goka-gray text-lg max-w-md">
              Have questions about our Menu, Franchise, or Ambassador programs? We're here to help.
            </p>

            <div className="space-y-4">
              {/* WhatsApp - High conversion for mobile users */}
              <a href="https://wa.me/yournumber" className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-goka-orange transition shadow-sm group">
                <span className="text-2xl group-hover:scale-110 transition-transform">💬</span>
                <div>
                  <h4 className="font-bold">Chat on WhatsApp</h4>
                  <p className="text-sm text-goka-gray">Fastest response time</p>
                </div>
              </a>
              
              <a href="mailto:support@gokafood.com" className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-goka-orange transition shadow-sm group">
                <span className="text-2xl group-hover:scale-110 transition-transform">📧</span>
                <div>
                  <h4 className="font-bold">Email Support</h4>
                  <p className="text-sm text-goka-gray">support@gokafood.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side: Inquiry Form */}
          <div className="bg-white p-8 md:p-10 rounded-4xl shadow-2xl border border-gray-50">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="w-full p-4 bg-goka-bg rounded-xl border-none focus:ring-2 focus:ring-goka-orange outline-none" />
                <input type="email" placeholder="Email Address" className="w-full p-4 bg-goka-bg rounded-xl border-none focus:ring-2 focus:ring-goka-orange outline-none" />
              </div>
              <select className="w-full p-4 bg-goka-bg rounded-xl border-none focus:ring-2 focus:ring-goka-orange outline-none text-goka-gray">
                <option>General Inquiry</option>
                <option>Franchise Application</option>
                <option>Campus Ambassador Program</option>
                <option>Restaurant Partnership</option>
              </select>
              <textarea placeholder="How can we help you?" rows={4} className="w-full p-4 bg-goka-bg rounded-xl border-none focus:ring-2 focus:ring-goka-orange outline-none" />
              <button className="w-full bg-goka-orange text-white py-5 rounded-2xl font-black text-lg shadow-lg hover:shadow-orange-200 transition-all active:scale-95">
                SEND MESSAGE
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}