import React from "react";

function Contact() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
  }
  return (
    <div>
      <h1>This is the contact page</h1>
    </div>
  );
}

export default Contact;
