"use client";

import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Implement actual form submission logic
    console.log("Form submitted:", formData);
    
    // Simulate API call
    setTimeout(() => {
      alert("Vielen Dank für Ihre Nachricht! Ich melde mich schnellstmöglich bei Ihnen.");
      setFormData({ name: "", email: "", website: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="kontakt" className="py-20 md:py-24 bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6">
            Bereit für mehr Sichtbarkeit?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-4">
            Buchen Sie Ihr kostenloses SEO-Erstgespräch (15 Min.) direkt in meinem Kalender.
          </p>
          <p className="text-base text-accent font-semibold">
            Keine Verpflichtung. Nur echte Einblicke in Ihr Potenzial.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Info & Form */}
          <div className="space-y-8">
            {/* Contact Information Card */}
            <div className="card">
              <h3 className="text-2xl font-poppins font-bold text-primary mb-6">
                Kontaktinformationen
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-600 mb-1">E-Mail</div>
                    <a 
                      href="mailto:kontakt@myhiwe.de" 
                      className="text-lg text-primary hover:text-accent transition-colors"
                    >
                      kontakt@myhiwe.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-600 mb-1">Telefon</div>
                    <a 
                      href="tel:+49" 
                      className="text-lg text-primary hover:text-accent transition-colors"
                    >
                      +49 (0) XXX XXXXXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-600 mb-1">Region</div>
                    <p className="text-lg text-slate-700">
                      Deutschland
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-600 mb-1">Verfügbarkeit</div>
                    <p className="text-lg text-slate-700">
                      Mo-Fr: 9:00 - 18:00 Uhr
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="card">
              <h3 className="text-2xl font-poppins font-bold text-primary mb-6">
                Schreiben Sie mir
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-accent focus:outline-none transition-colors text-slate-900"
                    placeholder="Ihr Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-accent focus:outline-none transition-colors text-slate-900"
                    placeholder="ihre@email.de"
                  />
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-semibold text-slate-700 mb-2">
                    Website (optional)
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-accent focus:outline-none transition-colors text-slate-900"
                    placeholder="https://ihre-website.de"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-accent focus:outline-none transition-colors resize-none text-slate-900"
                    style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.15)" }}
                    placeholder="Erzählen Sie mir von Ihrer Firma..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-cta w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Wird gesendet..."
                  ) : (
                    <>
                      Nachricht senden
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Calendly Widget */}
          <div className="space-y-8">
            <div className="card">
              <h3 className="text-2xl font-poppins font-bold text-primary mb-6">
                Termin direkt buchen
              </h3>
              
              {/* Calendly Embed Placeholder */}
              <div className="relative w-full bg-slate-100 rounded-lg overflow-hidden" style={{ minHeight: "600px" }}>
                {/* TODO: Replace with actual Calendly embed */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                    <Clock className="w-10 h-10 text-accent" />
                  </div>
                  <h4 className="text-xl font-poppins font-bold text-primary mb-4">
                    Calendly Widget
                  </h4>
                  <p className="text-slate-600 mb-6 max-w-sm">
                    Hier erscheint das Calendly-Widget zur direkten Terminbuchung.
                  </p>
                  <div className="bg-white rounded-lg p-6 shadow-sm max-w-md w-full text-left">
                    <p className="text-sm text-slate-700 mb-4 font-mono">
                      {`<!-- Calendly inline widget begin -->`}
                    </p>
                    <p className="text-sm text-slate-700 mb-4 font-mono">
                      {`<div class="calendly-inline-widget"`}<br/>
                      {`  data-url="https://calendly.com/YOUR_LINK"`}<br/>
                      {`  style="min-width:320px;height:630px;">`}<br/>
                      {`</div>`}
                    </p>
                    <p className="text-sm text-slate-700 font-mono">
                      {`<!-- Calendly inline widget end -->`}
                    </p>
                  </div>
                  <p className="text-xs text-slate-500 mt-6">
                    [PLACEHOLDER - Bitte mit echtem Calendly-Link ersetzen]
                  </p>
                </div>
                
                {/* When ready to use Calendly, uncomment and add your link: */}
                {/* <div 
                  className="calendly-inline-widget" 
                  data-url="https://calendly.com/YOUR_CALENDLY_USERNAME" 
                  style={{ minWidth: "320px", height: "630px" }}
                ></div> */}
              </div>
            </div>

            {/* FAQ Shortlist */}
            <div className="card bg-primary/5">
              <h4 className="text-lg font-poppins font-bold text-primary mb-4">
                Häufige Fragen
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-slate-700">
                    <strong>Kostenlos:</strong> Das Erstgespräch ist unverbindlich und kostenlos.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-slate-700">
                    <strong>15 Minuten:</strong> Kurz und präzise – perfekt für einen ersten Eindruck.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-slate-700">
                    <strong>Keine Verpflichtung:</strong> Sie entscheiden nach dem Gespräch, ob wir zusammenarbeiten.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
