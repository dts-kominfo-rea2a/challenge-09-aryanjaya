// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import './Contact.css';

const Contact = ({ data }) => {
  return (
    <section className="content">
      <div className="left">
        <img
          src={data.photo}
          alt={data.name}
          className="rounded"
        />
      </div>
      <div className="right">
        <div className="container">
          <section>
            <p className="header">{data.name}</p>
            <p className="sub-header">{data.phone}</p>
            <p className="sub-content">{data.email}</p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Contact;
