import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, Clock, 
  ShieldCheck, HelpCircle, Compass, Calendar, Users 
} from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const prefilledDest = searchParams.get('destination') || searchParams.get('package') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: prefilledDest,
    travelDate: '',
    travellers: '2 Travellers',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledDest) {
      setFormData((prev) => ({
        ...prev,
        destination: prefilledDest
      }));
    }
  }, [prefilledDest]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#08140c] text-[#f7f4ee] pt-20 sm:pt-24 pb-16 sm:pb-20">
      
      {/* =========================================
          HERO BANNER
      ========================================= */}
      <section className="relative h-[45vh] sm:h-[55vh] min-h-[360px] flex items-center justify-center overflow-hidden mb-8 sm:mb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hero/contact-banner.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08140c] via-black/60 to-black/75" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-forest-300 backdrop-blur-md mb-3 sm:mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Plan Your Journey</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-cream-100 tracking-tight mb-3 sm:mb-4">
            Contact & Travel Desk
          </h1>

          <p className="text-xs sm:text-base md:text-lg text-cream-200/90 font-light max-w-2xl mx-auto leading-relaxed">
            Get in touch with our Odisha tourism specialists to organize your safari permits, accommodations, and guided travel.
          </p>
        </div>
      </section>

      {/* =========================================
          MAIN CONTACT & INQUIRY SECTION
      ========================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-forest-800/70 shadow-2xl">
              <div className="mb-6 sm:mb-8">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-forest-400">
                  Online Inquiry Form
                </span>
                <h2 className="font-serif text-xl sm:text-3xl font-bold text-cream-100 mt-1">
                  Start Your Odisha Adventure
                </h2>
                <p className="text-xs sm:text-sm text-cream-300/70 mt-1">
                  Fill in your travel preferences and our Mayurbhanj travel desk will respond within 4 hours.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 sm:p-8 rounded-2xl bg-forest-950/90 border border-forest-600/50 text-center space-y-4"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-forest-800/80 text-forest-300 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    Inquiry Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-cream-200/80 leading-relaxed max-w-md mx-auto">
                    Thank you, <span className="text-white font-medium">{formData.fullName || 'Traveler'}</span>. Our Similipal expedition coordinator has received your request for <span className="text-forest-300 font-medium">{formData.destination || 'Odisha'}</span> and will contact you shortly via email and phone.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        destination: '',
                        travelDate: '',
                        travellers: '2 Travellers',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-forest-700 hover:bg-forest-600 text-xs font-semibold text-white uppercase tracking-wider touch-manipulation"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-cream-300 mb-1.5 sm:mb-2">
                        Full Name <span className="text-forest-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Ananya Das"
                        className="w-full px-3.5 py-3 rounded-xl bg-forest-950/80 border border-forest-800 text-base sm:text-sm text-white placeholder:text-cream-400/40 focus:outline-none focus:border-forest-500 transition-colors"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-cream-300 mb-1.5 sm:mb-2">
                        Email Address <span className="text-forest-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="e.g. ananya@example.com"
                        className="w-full px-3.5 py-3 rounded-xl bg-forest-950/80 border border-forest-800 text-base sm:text-sm text-white placeholder:text-cream-400/40 focus:outline-none focus:border-forest-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-cream-300 mb-1.5 sm:mb-2">
                        Phone Number <span className="text-forest-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-3.5 py-3 rounded-xl bg-forest-950/80 border border-forest-800 text-base sm:text-sm text-white placeholder:text-cream-400/40 focus:outline-none focus:border-forest-500 transition-colors"
                      />
                    </div>

                    {/* Destination of Interest */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-cream-300 mb-1.5 sm:mb-2">
                        Destination of Interest
                      </label>
                      <select
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full px-3.5 py-3 rounded-xl bg-forest-950/80 border border-forest-800 text-base sm:text-sm text-white focus:outline-none focus:border-forest-500 transition-colors"
                      >
                        <option value="">Select Destination / Tour</option>
                        <option value="Similipal National Park">Similipal National Park</option>
                        <option value="Barehipani & Joranda Waterfalls">Barehipani & Joranda Waterfalls</option>
                        <option value="Chilika Lake & Dolphins">Chilika Lake & Dolphins</option>
                        <option value="Konark Sun Temple & Puri">Konark Sun Temple & Puri</option>
                        <option value="Deomali Hills & Koraput">Deomali Hills & Koraput</option>
                        <option value="Daringbadi Hill Station">Daringbadi Hill Station</option>
                        <option value="Bhitarkanika Sanctuary">Bhitarkanika Mangrove Sanctuary</option>
                        <option value="Custom Tour Package">Custom Complete Odisha Tour</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Travel Date */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-cream-300 mb-1.5 sm:mb-2 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-forest-400" />
                        <span>Travel Date</span>
                      </label>
                      <input
                        type="date"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        className="w-full px-3.5 py-3 rounded-xl bg-forest-950/80 border border-forest-800 text-base sm:text-sm text-white focus:outline-none focus:border-forest-500 transition-colors"
                      />
                    </div>

                    {/* Number of Travellers */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-cream-300 mb-1.5 sm:mb-2 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-forest-400" />
                        <span>Number of Travellers</span>
                      </label>
                      <select
                        name="travellers"
                        value={formData.travellers}
                        onChange={handleChange}
                        className="w-full px-3.5 py-3 rounded-xl bg-forest-950/80 border border-forest-800 text-base sm:text-sm text-white focus:outline-none focus:border-forest-500 transition-colors"
                      >
                        <option value="Solo Traveler">Solo Traveler</option>
                        <option value="2 Travellers (Couple / Friends)">2 Travellers (Couple / Friends)</option>
                        <option value="3-5 Travellers (Small Family)">3-5 Travellers (Small Family)</option>
                        <option value="6-10 Travellers (Group)">6-10 Travellers (Group)</option>
                        <option value="10+ Travellers (Corporate/Tour)">10+ Travellers (Corporate/Tour)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-cream-300 mb-1.5 sm:mb-2">
                      Message / Special Requests
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your safari preferences, vehicle needs, or questions..."
                      className="w-full px-3.5 py-3 rounded-xl bg-forest-950/80 border border-forest-800 text-base sm:text-sm text-white placeholder:text-cream-400/40 focus:outline-none focus:border-forest-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-forest-500 via-forest-600 to-forest-700 hover:from-forest-400 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:shadow-forest-500/25 transition-all flex items-center justify-center gap-2 touch-manipulation active:scale-[0.98]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Contact info & Google Maps integration placeholder */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Cards */}
            <div className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-forest-800/70 space-y-5 sm:space-y-6">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream-100">
                Tourism Information Center
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-forest-900/80 text-forest-400 border border-forest-700/50 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-cream-400/70 block">Office Address</span>
                    <p className="text-xs sm:text-sm font-medium text-cream-100 mt-0.5">
                      Mayurbhanj Tourism Cell, Near Bhanjpur, Baripada, Odisha 757001
                    </p>
                    <p className="text-[11px] text-cream-400/80 mt-0.5">
                      Secondary Desk: Jayadev Vihar, Bhubaneswar, Odisha 751013
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-forest-900/80 text-forest-400 border border-forest-700/50 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-cream-400/70 block">Phone & WhatsApp</span>
                    <p className="text-xs sm:text-sm font-medium text-cream-100 mt-0.5">
                      +91 94370 12890 / +91 (06792) 252 573
                    </p>
                    <p className="text-[11px] text-forest-400 mt-0.5">
                      Mon - Sun: 7:00 AM – 9:00 PM IST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-forest-900/80 text-forest-400 border border-forest-700/50 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-cream-400/70 block">Email Inquiries</span>
                    <p className="text-xs sm:text-sm font-medium text-cream-100 mt-0.5">
                      info@odishatourism-similipal.in
                    </p>
                    <p className="text-[11px] text-cream-400/80 mt-0.5">
                      safaris@odishatourism-similipal.in
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-forest-800/80 flex items-center gap-2.5 text-xs text-cream-300/80">
                <ShieldCheck className="w-4 h-4 text-forest-400 shrink-0" />
                <span>Authorized Government Eco-Tourism Partner</span>
              </div>
            </div>

            {/* Google Maps Integration Placeholder */}
            <div className="glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-forest-800/70 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-forest-400">
                  <MapPin className="w-4 h-4" />
                  <span>Google Maps Location</span>
                </div>
                <span className="text-[10px] text-cream-400/60 uppercase">Mayurbhanj / Similipal</span>
              </div>

              {/* Styled Interactive/Visual Google Maps container */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] border border-forest-800/60 shadow-inner group">
                <iframe
                  title="Similipal National Park Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471900.5709425447!2d86.08272846933458!3d21.849615598695026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1ef5d19bf9d6a3%3A0x6b4efbbdb53da5f2!2sSimilipal%20National%20Park!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-[10px] sm:text-[11px] text-cream-200 flex items-center justify-between pointer-events-none">
                  <span className="font-medium truncate">Similipal Biosphere Reserve</span>
                  <span className="text-forest-400 font-semibold shrink-0 ml-1">21.8°N, 86.4°E</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
