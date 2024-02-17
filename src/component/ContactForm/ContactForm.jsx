import { useState } from "react";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import styles from "./ContactForm.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  const onViaCall = () => {
    alert("Connecting...");
  };

  const onViaSupportChat = () => {
    alert("Opening chat...");
  };

  const onViaEmail = () => {
    alert("Please fill the form.");
  };

  const onSubmitButton = () => {
    alert("Message sent, Thank you!");
  };

  const [name, setName] = useState("Name");
  const [email, setEmail] = useState("example@mail.com");
  const [message, setMessage] = useState("Message");

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setMessage(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            onClick={onViaSupportChat}
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button
            onClick={onViaCall}
            text="VIA CALL"
            icon={<FaPhoneAlt fontSize="24px" />}
          />
        </div>
        <Button
          onClick={onViaEmail}
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">E-Mail</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">MESSAGE</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginRight: "10px",
            }}
          >
            <Button onClick={onSubmitButton} text="SUBMIT BUTTON" />
          </div>
          <div>
            {name + ",  "}
            {email + ",  "}
            {message}
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
