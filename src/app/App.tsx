import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Dumbbell, Flame, Users, Clock, Star, ArrowRight } from "lucide-react";

const logoImage = new URL("../../WhatsApp Image 2026-07-18 at 8.58.05 PM.jpeg", import.meta.url).href;
const heroImage = new URL("../../ChatGPT Image Jul 18, 2026, 07_43_14 PM.png", import.meta.url).href;
const featureVideo = new URL("../../WhatsApp Video 2026-07-18 at 9.48.43 PM.mp4", import.meta.url).href;
const planImage = new URL("../../WhatsApp Image 2026-07-18 at 9.13.02 PM.jpeg", import.meta.url).href;
const dumbbellZoneImage = new URL("../../WhatsApp Image 2026-07-18 at 9.22.35 PM.jpeg", import.meta.url).href;
const equipmentFloorImage = new URL("../../ec9571a2-7dde-46b9-8f9e-fc12c39b8b37.png", import.meta.url).href;
const gallery1 = new URL("../../ChatGPT Image Jul 18, 2026, 07_43_14 PM.png", import.meta.url).href;
const functionalTrainingImage = new URL("../../ChatGPT Image Jul 18, 2026, 09_56_18 PM.png", import.meta.url).href;


const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const GALLERY_IMAGES = [
  {
    url: gallery1,
    alt: "Man working out intensely in the gym",
    label: "Strength Training",
  },
  {
    url: dumbbellZoneImage,
    alt: "Athlete lifting dumbbells",
    label: "Dumbbell Zone",
  },
  {
    url: equipmentFloorImage,
    alt: "Exercise equipment in the gym",
    label: "Equipment Floor",
  },
  {
    url: functionalTrainingImage,
    alt: "Woman training with battle ropes",
    label: "Functional Training",
  },
  {
    url: new URL("../../WhatsApp Image 2026-07-19 at 1.26.33 AM.jpeg", import.meta.url).href,
    alt: "Woman lifting barbell",
    label: "Powerlifting",
  },
  {
    url: new URL("../../WhatsApp Image 2026-07-19 at 1.19.16 AM.jpeg", import.meta.url).href,
    alt: "Two people exercising together",
    label: "Group Sessions",
  },
];

const PROGRAMS = [
  {
    icon: Dumbbell,
    name: "Strength & Conditioning",
    desc: "Build real power with periodized programming tailored to your level. Free weights, barbells, and coached technique.",
    price: "₹2,500/mo",
    tag: "Most Popular",
  },
  {
    icon: Flame,
    name: "HIIT & Metabolic",
    desc: "High-intensity intervals that torch fat and spike endurance. 45-minute sessions with rotating formats.",
    price: "₹2,000/mo",
    tag: "",
  },
  {
    icon: Users,
    name: "Personal Training",
    desc: "One-on-one sessions with a certified coach. Custom programming, form correction, and weekly progress reviews.",
    price: "₹5,000/mo",
    tag: "Premium",
  },
  {
    icon: Clock,
    name: "Early Bird Class",
    desc: "5:30 AM daily sessions for people who own the morning. Smaller batches, focused coaching.",
    price: "₹1,800/mo",
    tag: "",
  },
  {
    icon: Users,
    name: "Gym Membership",
    desc: "Flexible membership plans: ₹1,500/mo, 3 months for ₹4,000, 6 months for ₹7,000 (free t-shirt), and 12 months for ₹12,000 (free t-shirt + bag).",
    price: "₹1,500/mo",
    tag: "Best Value",
  },
];

const STATS = [
  { value: "4+", label: "Years in Business" },
  { value: "150+", label: "Active Members" },
  { value: "2", label: "Certified Trainers" },
  { value: "1,500", label: "Sq Ft Facility" },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Member since 2023",
    text: "Rich Gold Fitness Gym completely changed how I train. The coaches actually know what they&apos;re doing and the equipment is always in top shape.",
    stars: 5,
  },
  {
    name: "Rohan Desai",
    role: "Personal Training Client",
    text: "Lost 18 kg in 7 months with a PT plan from here. The one-on-one attention makes all the difference.",
    stars: 5,
  },
  {
    name: "Neha Kapoor",
    role: "HIIT Class Member",
    text: "The HIIT classes are intense but so well structured. I never get bored and I can see results month after month.",
    stars: 5,
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", program: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-background text-foreground" style={{ fontFamily: "'Barlow', sans-serif" }}>

      {/* ── HEADER / NAV ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 shrink-0 group">
            <img src={logoImage} alt="Rich Gold Fitness Gym logo" className="w-8 h-8 rounded-full object-cover transition-transform duration-300 ease-out group-hover:scale-110" />
            <span className="text-xl font-black tracking-tight uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Rich Gold <span className="text-primary">Fitness Gym</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-foreground/70 hover:text-primary hover:bg-accent rounded transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+919236142198" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              +91 92361 42198
            </a>
            <a
              href="#enquiry"
              className="bg-primary text-white px-5 py-2 text-sm font-bold rounded hover:bg-primary/90 transition-colors"
            >
              Free Trial
            </a>
          </div>

          {/* Mobile burger */}
          <button className="md:hidden p-2 rounded hover:bg-secondary transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2 px-3 text-sm font-semibold text-foreground hover:text-primary hover:bg-accent rounded transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#enquiry"
              onClick={() => setMenuOpen(false)}
              className="mt-3 bg-primary text-white text-center py-2.5 text-sm font-bold rounded hover:bg-primary/90 transition-colors"
            >
              Free Trial
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Athlete training in gym"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-40">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Kanpur&apos;s Premier Fitness Centre
            </div>
            <h1
              className="text-5xl md:text-7xl font-black text-white leading-tight uppercase mb-5"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Train Hard.<br />
              <span className="text-primary gold-glow">Live Stronger.</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 font-light max-w-lg">
              Rich Gold Fitness Gym is a 1,500 sq ft professional training facility in Kanpur — with elite equipment, certified coaches, and a culture built around real results.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 font-bold text-sm rounded hover:bg-primary/90 transition-colors gold-glow-box"
              >
                Book a Free Trial <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-7 py-3.5 font-bold text-sm rounded hover:bg-white/20 transition-colors"
              >
                View Facility
              </a>
            </div>
          </div>

        </div>

        {/* Stats strip */}
        <div className="relative z-10 bg-primary">
          <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {STATS.map((s) => (
              <div key={s.label} className="py-5 px-4 md:px-8 text-center">
                <div className="text-2xl md:text-3xl font-black text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {s.value}
                </div>
                <div className="text-xs text-white/70 font-semibold uppercase tracking-wider mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=700&h=800&fit=crop&auto=format"
              alt="Athlete with dumbbell"
              className="w-full aspect-[4/5] sm:aspect-[3/4] lg:h-[480px] object-cover rounded-lg bg-card"
            />
            <div className="absolute -bottom-5 -right-5 bg-white border border-border rounded-lg p-4 shadow-lg hidden md:block">
              <div className="text-3xl font-black text-primary" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>#1</div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">Rated Gym<br />in Kanpur</div>
            </div>
          </div>

          <div>
            <span className="text-primary text-xs font-bold tracking-widest uppercase">About Rich Gold Fitness Gym</span>
            <h2
              className="text-4xl md:text-5xl font-black uppercase leading-tight mt-2 mb-5"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Not Just a Gym.<br />
              <span className="text-primary">A Proving Ground.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in 2012, Rich Gold Fitness Gym was built for people who take training seriously. Our 18,000 sq ft facility houses Olympic lifting platforms, a full powerlifting setup, functional training rigs, and a premium cardio deck.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every coach holds professional certifications and brings real competition experience. We hire people who can teach, motivate, and deliver measurable, trackable results for every kind of member.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["Professional Equipment", "Olympic & powerlifting grade"],
                ["Certified Coaches", "2 qualified trainers on floor"],
                ["Open 6 Days", "6 AM – 11 PM daily"],
                ["Air Conditioned", "Full AC across all zones"],
              ].map(([title, sub]) => (
                <div key={title} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <ChevronRight className="w-3 h-3 text-primary" />
                  </span>
                  <div>
                    <div className="text-sm font-bold">{title}</div>
                    <div className="text-xs text-muted-foreground">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section id="programs" className="py-20 md:py-28 px-6 md:px-10 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <div className="mx-auto mb-10 w-full max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-transparent shadow-2xl transition-transform duration-500 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_35px_80px_rgba(15,23,42,0.35)]">
              <div className="relative aspect-video bg-transparent">
                <video
                  src={featureVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
              <div className="p-5 text-center bg-white/10 backdrop-blur-sm">
                <h3 className="text-sm uppercase tracking-[0.35em] text-primary font-semibold mb-2">Rich Gold Fitness Gym Preview</h3>
                <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                  Watch the energy, space and training intensity at Rich Gold Fitness Gym Singhpur — built for serious results.
                </p>
              </div>
            </div>
            <div className="text-center">
              <span className="text-primary text-xs font-bold tracking-widest uppercase">What We Offer</span>
              <h2
                className="text-4xl md:text-5xl font-black uppercase leading-tight mt-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Programs Built for <span className="text-primary">Results</span>
              </h2>
              <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
                Every program is designed by coaches with real competition backgrounds. Pick what fits your goal.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMS.map(({ icon: Icon, name, desc, price, tag }) => (
              <div key={name} className="bg-white rounded-lg border border-border p-6 flex flex-col hover:shadow-md hover:border-primary/30 transition-all duration-200 relative">
                {tag && (
                  <span className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                    {tag}
                  </span>
                )}
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-bold mb-2">{name}</h3>
                {name === "Gym Membership" && (
                  <div className="overflow-hidden rounded-[28px] border-2 border-primary/30 shadow-[0_20px_50px_rgba(15,23,42,0.15)] mb-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(15,23,42,0.24)]">
                    <img
                      src={planImage}
                      alt="Gym membership plan"
                      className="w-full aspect-[4/3] md:aspect-[16/9] object-contain bg-black/5 transition-transform duration-700 ease-out hover:scale-105"
                    />
                  </div>
                )}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
                <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-lg font-black text-primary" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{price}</span>
                  <a href="#enquiry" className="text-xs font-bold text-primary hover:underline uppercase tracking-wide">Enquire</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-primary text-xs font-bold tracking-widest uppercase">The Facility</span>
              <h2
                className="text-4xl md:text-5xl font-black uppercase leading-tight mt-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                See Where <span className="text-primary">Legends</span> Train
              </h2>
            </div>
            <a href="#enquiry" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline shrink-0">
              Book a Tour <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                className={`relative group overflow-hidden rounded-lg bg-card ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className={`w-full ${img.label === "Functional Training" ? "object-cover object-[center_center]" : img.label === "Group Sessions" ? "object-cover object-[center_35%]" : img.label === "Dumbbell Zone" ? "object-cover object-[center_60%]" : "object-cover object-center"} scale-95 group-hover:scale-110 transition-transform duration-500 ${i === 0 ? "h-[26rem] lg:h-[32rem]" : "h-[18rem]"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs font-bold uppercase tracking-widest bg-primary px-2 py-1 rounded">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 md:py-24 px-6 md:px-10 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Member Stories</span>
            <h2
              className="text-4xl md:text-5xl font-black uppercase leading-tight mt-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Real People. <span className="text-primary">Real Results.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white rounded-lg border border-border p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENQUIRY ── */}
      <section id="enquiry" className="py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          {/* Left info */}
          <div>
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Get in Touch</span>
            <h2
              className="text-4xl md:text-5xl font-black uppercase leading-tight mt-2 mb-5"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Ready to Start?<br />
              <span className="text-primary">We&apos;ll Guide You.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Fill out the form and one of our coaches will contact you within 24 hours to schedule a free facility tour and consultation — no commitment needed.
            </p>

            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-0.5">Phone</div>
                  <a href="tel:+919236142198" className="font-semibold hover:text-primary transition-colors">+91 92361 42198</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-0.5">Email</div>
                  <a href="mailto:rgffitness2023@gmail.com" className="font-semibold hover:text-primary transition-colors">rgffitness2023@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-0.5">Address</div>
                  <div className="font-semibold">Singhpur Chauraha,<br />In front of Aastha Hospital, Kanpur, UP — 208017</div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-secondary rounded-lg p-5 border border-border">
              <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">Opening Hours</div>
              <div className="space-y-1.5 text-sm">
                {[
                  ["Monday – Saturday", "6:00 AM – 11:00 PM"],
                  ["Sunday", "Closed"],
                ].map(([day, time]) => (
                  <div key={day} className="flex justify-between">
                    <span className="font-medium">{day}</span>
                    <span className="text-muted-foreground">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-white rounded-xl border border-border shadow-sm p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                  <Flame className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-black uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Enquiry Received!
                </h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  We&apos;ll reach out within 24 hours to schedule your free tour and first session.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm text-primary font-semibold hover:underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-black uppercase mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Send an Enquiry
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1.5">Full Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Arjun Mehta"
                        className="w-full bg-secondary border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1.5">Phone *</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98XXX XXXXX"
                        className="w-full bg-secondary border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1.5">Email Address *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="arjun@email.com"
                      className="w-full bg-secondary border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1.5">Interested Program</label>
                    <select
                      name="program"
                      value={form.program}
                      onChange={handleChange}
                      className="w-full bg-secondary border border-border rounded px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select a program...</option>
                      <option>Strength &amp; Conditioning</option>
                      <option>HIIT &amp; Metabolic</option>
                      <option>Personal Training</option>
                      <option>Early Bird Class</option>
                      <option>Gym Membership</option>
                      <option>General Membership</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1.5">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your fitness goals..."
                      className="w-full bg-secondary border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 text-sm font-bold rounded hover:bg-primary/90 transition-colors uppercase tracking-wide"
                  >
                    Send Enquiry
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    We respond within 24 hours. No spam, ever.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="contact" className="bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4 group">
              <img src={logoImage} alt="Rich Gold Fitness Gym logo" className="w-10 h-10 rounded-full object-cover transition-transform duration-300 ease-out group-hover:scale-110" />
              <span className="text-lg font-black uppercase tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Rich Gold <span className="text-primary">Fitness Gym</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Kanpur&apos;s most serious training facility. Est. 2012.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Quick Links</div>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/70 hover:text-white hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Programs</div>
            <ul className="space-y-2">
              {PROGRAMS.map((p) => (
                <li key={p.name}>
                  <a href="#programs" className="text-sm text-white/70 hover:text-white transition-colors">{p.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Contact</div>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Singhpur Chauraha, In front of Aastha Hospital, Kanpur, UP 208017</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+919236142198" className="hover:text-white transition-colors">+91 92361 42198</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:rgffitness2023@gmail.com" className="hover:text-white transition-colors">rgffitness2023@gmail.com</a>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              {["Instagram", "YouTube", "Facebook"].map((s) => (
                <a key={s} href="#" className="text-xs text-white/50 hover:text-primary transition-colors font-semibold uppercase tracking-wide">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">Find Us</div>
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <iframe
              title="Rich Gold Fitness Gym Singhpur Kanpur map"
              src="https://maps.google.com/maps?q=Rich%20Gold%20Fitness%20Gym%20Singhpur%20Kanpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-xs text-white/40">© 2026 Rich Gold Fitness Gym Pvt. Ltd. All rights reserved.</p>
            <p className="text-xs text-white/40">Singhpur Chauraha, Kanpur, UP, India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
