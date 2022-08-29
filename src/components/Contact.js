import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xwkzpake");
  if (state.succeeded) {
    return (
      <section id="contact" className="bg-primary">
        <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto mt-10 space-y-12 md:py-12 md:space-y-0 md:flex-row">
          <h2 className="text-5xl font-bold text-center text-white md:text-4xl md:max-w-xl md:text-left pr-6">
            Accelerate your development cycle by contacting me today.
          </h2>
          <form onSubmit={handleSubmit} className="my-16 flex flex-col">
            <label htmlFor="email" className="text-white py-2">
              Email Address
            </label>
            <input
              className="rounded w-80"
              id="email"
              type="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="message" className="text-white py-2">
              Message
            </label>
            <input className="rounded" id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              className="my-6 text-white bg-tertiary rounded transition ease-in delay-50 hover:scale-105"
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </button>
            <p className="text-white">
              Thanks for reaching out. I'll get back to you as soon as I can.
            </p>
          </form>
        </div>
      </section>
    );
  }
  return (
    <section id="contact" className="bg-primary">
      <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto mt-10 space-y-12 md:py-12 md:space-y-0 md:flex-row">
        <h2 className="text-5xl font-bold text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Accelerate your development cycle by contacting me today.
        </h2>
        <form onSubmit={handleSubmit} className="my-16 flex flex-col">
          <label htmlFor="email" className="text-white py-2">
            Email Address
          </label>
          <input
            className="rounded w-80"
            id="email"
            type="email"
            name="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message" className="text-white py-2">
            Message
          </label>
          <textarea className="rounded w-80 h-32" id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            className="my-6 text-white bg-tertiary rounded transition ease-in delay-50 hover:scale-105"
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
