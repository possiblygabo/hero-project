import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

const ACCENT = "#5E0ED7";
const PHONE_LINK = "tel:+17866163622";
const VIDEO_URL = "/background.mov";

const NAV_LINKS = ["Story", "Expertise", "About Me", "Feedback"];

const STATS = [
  { num: "100", label: "PROJECTS" },
];

const HEADING_WORDS = ["15", "YEAR-OLD", "DESIGNER"];

const easing = [0.22, 1, 0.36, 1];

const NAV_CONTENT = {
  Story: "I started designing websites because I enjoy turning ideas into something businesses can actually use. What began as a passion for design has grown into a goal of helping local businesses create a stronger online presence.",
  Expertise: "I specialize in creating modern, responsive websites that look professional and are easy for customers to navigate. I focus on clean design, strong visuals, mobile-friendly layouts, and making sure each website fits the business behind it.",
  "About Me": "I'm a 15-year-old web designer based in Miami, Florida, focused on helping businesses stand out online. I'm constantly learning, improving my skills, and working to create websites that don't just look good, but help businesses attract more customers.",
};

const fadeDown = {
  initial: { opacity: 0, y: -20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: easing },
  }),
};

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: easing },
  }),
};

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(null);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    if (NAV_CONTENT[link]) {
      setActiveNav(activeNav === link ? null : link);
    }
  };

  return (
    <div
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="relative min-h-screen flex flex-col overflow-hidden bg-white"
    >
      {/* Background Video */}
      <video
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* ── NAV ── */}
        <nav className="flex items-center justify-between px-5 sm:px-8 md:px-12 pt-5 md:pt-6">
          {/* Logo */}
          <motion.div
            custom={0}
            variants={fadeDown}
            initial="initial"
            animate="animate"
            className="w-8 h-8 rounded-full border-2 flex items-center justify-center"
            style={{ borderColor: ACCENT }}
          >
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: ACCENT }}
            />
          </motion.div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link}
                href="#"
                custom={i + 1}
                variants={fadeDown}
                initial="initial"
                animate="animate"
                onClick={(e) => handleNavClick(e, link)}
                className="text-sm font-semibold tracking-widest uppercase transition-opacity hover:opacity-60"
                style={{ color: activeNav === link ? ACCENT : "#000" }}
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Hamburger */}
          <motion.button
            custom={5}
            variants={fadeDown}
            initial="initial"
            animate="animate"
            onClick={() => setMenuOpen(true)}
            className="w-9 h-9 rounded-full bg-black flex flex-col items-center justify-center gap-1"
          >
            <span className="w-4 h-0.5 bg-white" />
            <span className="w-4 h-0.5 bg-white" />
            <span className="w-4 h-0.5 bg-white" />
          </motion.button>
        </nav>

        {/* ── NAV CONTENT PANEL ── */}
        <AnimatePresence>
          {activeNav && NAV_CONTENT[activeNav] && (
            <motion.div
              key={activeNav}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: easing }}
              className="hidden md:block px-5 sm:px-8 md:px-12 pt-4"
            >
              <p
                className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black leading-relaxed max-w-md"
              >
                {NAV_CONTENT[activeNav]}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── STATS ROW ── */}
        <div className="flex-1 flex items-center justify-end px-5 sm:px-8 md:px-12 py-8 md:py-0">
          <div className="flex items-center gap-5 sm:gap-8 md:gap-10">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.num + stat.label}
                custom={i + 2}
                variants={fadeUp}
                initial="initial"
                animate="animate"
                className="flex flex-col items-end"
              >
                <div
                  style={{
                    fontSize: "clamp(1.5rem, 5vw, 3.5rem)",
                    fontWeight: 600,
                    lineHeight: 1,
                  }}
                  className="flex items-baseline"
                >
                  <span
                    style={{
                      color: ACCENT,
                      fontSize: "0.5em",
                      fontWeight: 600,
                    }}
                  >
                    +
                  </span>
                  <span className="text-black">{stat.num}</span>
                </div>
                <p className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black text-right whitespace-pre-line leading-tight mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── BOTTOM SECTION ── */}
        <div className="px-5 sm:px-8 md:px-12 pb-8 md:pb-12 flex flex-col gap-6 md:gap-12">
          {/* Row A: Tagline + CTA */}
          <div className="flex items-center justify-between gap-4">
            <motion.p
              custom={5}
              variants={fadeUp}
              initial="initial"
              animate="animate"
              className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black max-w-[130px] sm:max-w-[160px] md:max-w-xs"
            >
              Best 15 year-old
              <br />
              web designer
            </motion.p>

            <motion.a
              href={PHONE_LINK}
              custom={6}
              variants={fadeUp}
              initial="initial"
              animate="animate"
              className="flex items-center gap-1 text-base sm:text-xl md:text-2xl font-semibold whitespace-nowrap"
              style={{ color: ACCENT }}
            >
              Work With Me
              <ArrowUpRight className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]" />
            </motion.a>
          </div>

          {/* Row B: Description + Main Heading */}
          <div className="flex items-end justify-between gap-3 sm:gap-4">
            {/* Description */}
            <motion.div
              custom={7}
              variants={fadeUp}
              initial="initial"
              animate="animate"
              className="w-[120px] sm:w-[180px] md:w-[280px] shrink-0"
            >
              <p className="text-[9px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black text-left md:text-right leading-snug">
                Web Designer Built Around Elevating Your Vision Into A Reality
              </p>
            </motion.div>

            {/* Main Heading */}
            <div className="flex flex-col items-end">
              {HEADING_WORDS.map((word, i) => (
                <div key={word} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      delay: 0.4 + i * 0.14,
                      duration: 0.7,
                      ease: easing,
                    }}
                    style={{
                      fontSize: "clamp(2rem, 9vw, 9rem)",
                      lineHeight: 0.88,
                      fontWeight: 600,
                    }}
                    className="uppercase text-black text-right"
                  >
                    {word}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU OVERLAY ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-white flex flex-col px-5 pt-5 pb-8 overflow-y-auto"
          >
            {/* Top row */}
            <div className="flex items-center justify-between">
              <div
                className="w-8 h-8 rounded-full border-2 flex items-center justify-center"
                style={{ borderColor: ACCENT }}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: ACCENT }}
                />
              </div>
              <button
                onClick={() => { setMenuOpen(false); setActiveNav(null); }}
                className="w-9 h-9 rounded-full bg-black flex items-center justify-center"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Nav links with expandable content */}
            <div className="flex flex-col gap-6 mt-16">
              {NAV_LINKS.map((link) => (
                <div key={link}>
                  <a
                    href="#"
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-3xl font-semibold tracking-widest uppercase block"
                    style={{ color: activeNav === link ? ACCENT : "#000" }}
                  >
                    {link}
                  </a>
                  <AnimatePresence>
                    {activeNav === link && NAV_CONTENT[link] && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-black leading-relaxed mt-3 overflow-hidden"
                      >
                        {NAV_CONTENT[link]}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-auto pt-8">
              <a
                href={PHONE_LINK}
                className="flex items-center gap-1 text-xl font-semibold tracking-widest uppercase"
                style={{ color: ACCENT }}
              >
                CONTACT ME
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
