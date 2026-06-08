import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  ArrowRight,
  Database
} from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Data Analytics Project Inquiry');
  const [message, setMessage] = useState('');
  
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const emailVal = 'pratikhirave59@gmail.com';
  const phoneVal = '+91 9881430109';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailVal);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(phoneVal);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSending(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "7b9be00f-2f19-48e8-908d-b755c3f59bd8",
          name: name,
          email: email,
          subject: subject,
          message: message,
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        setSendSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setSendSuccess(false), 5000);
      } else {
        console.error("Form submission error:", result);
      }
    } catch (error) {
      console.error("Failed to submit form:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-6 bg-slate-50/50 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 mb-2">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
            Connect With Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full mt-4" />
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Details Panel (Left) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-orange-100 shadow-xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Contact Details</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                Are you looking to hire an entry-level Data Analyst, or discuss database workflows? Drop me an email, call, or message.
              </p>

              {/* Items */}
              <div className="flex flex-col gap-4">
                
                {/* Email Item */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-slate-100/50 border border-slate-100 transition-colors">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-orange-500" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[9px] uppercase font-bold text-slate-400 block">Email Address</span>
                      <a href={`mailto:${emailVal}`} className="text-xs font-semibold text-slate-700 hover:text-orange-500 truncate block">
                        {emailVal}
                      </a>
                    </div>
                  </div>
                  <button 
                    onClick={copyEmail}
                    className="p-2 text-slate-400 hover:text-orange-500 rounded-lg hover:bg-white transition-all shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-slate-100/50 border border-slate-100 transition-colors">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-xl bg-rose-500/10 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-rose-500" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[9px] uppercase font-bold text-slate-400 block">Phone Number</span>
                      <a href={`tel:${phoneVal}`} className="text-xs font-semibold text-slate-700 hover:text-orange-500 block">
                        {phoneVal}
                      </a>
                    </div>
                  </div>
                  <button 
                    onClick={copyPhone}
                    className="p-2 text-slate-400 hover:text-orange-500 rounded-lg hover:bg-white transition-all shrink-0"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Item */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-slate-100/50 border border-slate-100 transition-colors">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                      <Linkedin className="w-4 h-4 text-amber-500" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[9px] uppercase font-bold text-slate-400 block">LinkedIn Profile</span>
                      <a 
                        href="https://linkedin.com/in/pratikhirave" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-xs font-semibold text-slate-700 hover:text-orange-500 block truncate"
                      >
                        linkedin.com/in/pratikhirave
                      </a>
                    </div>
                  </div>
                  <a 
                    href="https://linkedin.com/in/pratikhirave" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-2 text-slate-400 hover:text-orange-500 rounded-lg hover:bg-white transition-all shrink-0"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-400 block">Current Location</span>
                    <span className="text-xs font-semibold text-slate-700 block">
                      Pune, Maharashtra, India
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom branding footer */}
            <div className="border-t border-slate-100 pt-6 mt-6 flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
              <Database className="w-4 h-4 text-orange-500" />
              <span>Pratik Hirave &copy; {new Date().getFullYear()}</span>
            </div>

          </div>

          {/* Contact Form Panel (Right) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-orange-100 shadow-xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-slate-800 mb-2">Send Message</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Write a message to trigger an instant email template response mock.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] uppercase font-bold tracking-wide text-slate-400">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-slate-50 border border-slate-150 rounded-xl px-4 py-3 text-xs text-slate-700 placeholder-slate-400 focus:bg-white focus:border-orange-500 focus:outline-none transition-all"
                  />
                </div>
                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] uppercase font-bold tracking-wide text-slate-400">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-50 border border-slate-150 rounded-xl px-4 py-3 text-xs text-slate-700 placeholder-slate-400 focus:bg-white focus:border-orange-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] uppercase font-bold tracking-wide text-slate-400">Inquiry Subject</label>
                <input 
                  type="text" 
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="bg-slate-50 border border-slate-150 rounded-xl px-4 py-3 text-xs text-slate-700 focus:bg-white focus:border-orange-500 focus:outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] uppercase font-bold tracking-wide text-slate-400">Message Content</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Hello Pratik, we reviewed your analytics project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-slate-50 border border-slate-150 rounded-xl px-4 py-3 text-xs text-slate-700 placeholder-slate-400 focus:bg-white focus:border-orange-500 focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Form Statuses */}
              {sendSuccess && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl text-xs font-semibold flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>Thank you! Your message was mock-submitted. Pratik will get in touch shortly.</span>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-rose-500 hover:opacity-95 active:scale-[0.99] transition-all py-3.5 rounded-xl shadow-md shadow-orange-500/10 flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
              >
                {isSending ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending message...
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" /> Send Message Inquiry
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
