import { AnimatePresence, motion } from "framer-motion";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import Orb from "./Orb";

import { useState } from "react";

interface FormErrors {
  email?: string;
  phone?: string;
  message?: string;
  [key: string]: string | undefined;
}

function Contact() {
  const [fields, setFields] = useState<{
    email: string;
    phone: string;
    message: string;
  }>({ email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!fields.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      e.email = "Enter a valid email.";
    if (fields.phone && !/^[\d\s\-+()]{7,20}$/.test(fields.phone))
      e.phone = "Enter a valid phone number.";
    if (!fields.message.trim()) e.message = "Message is required.";
    else if (fields.message.trim().length < 10)
      e.message = "At least 10 characters please.";
    return e;
  };

  const handleChange = (k: string, v: string) => {
    setFields((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setStatus("sending");

    const res = await fetch("https://formspree.io/f/mwvnarok", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields),
    });

    setStatus(res.ok ? "sent" : "idle");
  };

  return (
    <section id="contact" className="section">
      <Orb
        size="500px"
        color="radial-gradient(circle, #6366f1, transparent)"
        top="0%"
        left="100%"
        opacity={0.06}
      />
      <Orb
        size="350px"
        color="radial-gradient(circle, #a5b4fc, transparent)"
        top="100%"
        left="20%"
        opacity={0.04}
      />
      <div className="container">
        <SectionHeading label="Contact" index={4} />
        <div className="contact-layout">
          {/* Left */}
          <FadeIn>
            <p className="contact-blurb">
              Have a project in mind, want to collaborate, or just want to say
              hi? Drop me a message and I'll get back to you as soon as I can.
            </p>
            {/* <a
              href="https://github.com/milanz14"
              target="_blank"
              rel="noreferrer"
              className="contact-gh">
              GitHub ↗
            </a> */}
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={0.1}>
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="ok"
                  className="form-success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}>
                  <span style={{ fontSize: "1.25rem" }}>✓</span>
                  <span>Message sent! I'll be in touch soon.</span>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}>
                  <div className="contact-form">
                    <div className="contact-row">
                      <div className="form-field">
                        <label className="form-label">Email *</label>
                        <input
                          className="form-input"
                          type="email"
                          placeholder="you@example.com"
                          value={fields.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                        />
                        {errors.email && (
                          <span className="form-error">{errors.email}</span>
                        )}
                      </div>
                      <div className="form-field">
                        <label className="form-label">
                          Phone{" "}
                          <span
                            style={{
                              color: "#3f3f46",
                              fontWeight: 400,
                              textTransform: "none",
                              letterSpacing: 0,
                            }}>
                            (optional)
                          </span>
                        </label>
                        <input
                          className="form-input"
                          type="tel"
                          placeholder="+1 (416) 000-0000"
                          value={fields.phone}
                          onChange={(e) =>
                            handleChange("phone", e.target.value)
                          }
                        />
                        {errors.phone && (
                          <span className="form-error">{errors.phone}</span>
                        )}
                      </div>
                    </div>
                    <div className="form-field">
                      <label className="form-label">Message *</label>
                      <textarea
                        className="form-input form-textarea"
                        placeholder="Tell me about your project, idea, or just say hello..."
                        value={fields.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                      />
                      {errors.message && (
                        <span className="form-error">{errors.message}</span>
                      )}
                    </div>
                    <button
                      className="form-submit"
                      onClick={handleSubmit}
                      disabled={status === "sending"}>
                      {status === "sending" ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{
                              repeat: Infinity,
                              duration: 0.8,
                              ease: "linear",
                            }}
                            style={{
                              display: "inline-block",
                              width: 14,
                              height: 14,
                              border: "2px solid rgba(255,255,255,0.3)",
                              borderTopColor: "#fff",
                              borderRadius: "50%",
                            }}
                          />
                          Sending…
                        </>
                      ) : (
                        "Send Message →"
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default Contact;
