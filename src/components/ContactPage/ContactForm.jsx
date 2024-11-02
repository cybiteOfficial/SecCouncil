import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div className="border border-black-600 text-black-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
      <h1 className="text-4xl 
            leading-10 
            font-semibold 
            tex-black-5">
        Got an Idea? We&apos;ve got the skills. Let&apos;s team up !!
      </h1>
      <p>
        Tell us more about yourself and what you&apos;re got in mind.
      </p>

      <div className="mt-7">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;
