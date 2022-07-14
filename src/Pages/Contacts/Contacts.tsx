import React from "react";
import styles from "./Contacts.module.scss";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { FaCity } from "react-icons/fa";
import { BiHeading } from "react-icons/bi";
import ContactCard from "../../components/common/ContactCard/ContactCard";
import emailjs from "emailjs-com"

export function Contacts() {

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) =>{
     e.preventDefault();
    
    emailjs.sendForm('service_0edu1xd', 'template_eu2bve8', e.currentTarget, 'user_HuvfZ5vMV0Ed1fL3pLIOb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log("ERROR"+error.text);
      });
    e.currentTarget.reset()
  }


  return (<div className={styles.contactsContainer}>
    <h1>Contacts</h1>
    <div className={styles.contacts}>
      
      <div className={styles.contactIcons}>
        <ContactCard
          name="KolesnikovAndrew"
          icon={<AiFillGithub />}
          link={"https://github.com/KolesnikovAndrew"}
        />
        <ContactCard name="kolesnikov6@inbox.lv" icon={<MdOutlineEmail />} />
        <ContactCard
          name="HH.ru resume"
          icon={<BiHeading />}
          link={"https://hh.ru/resume/5ada2402ff09787b0b0039ed1f6e7068433662"}
        />
      </div>
      <div className={styles.emailForm}>
        <h2>Send me an email!</h2>
        <form
          onSubmit={sendEmail}
        >
          <label className={styles.name}>
            Name: <input type="text" name="from_name"></input>
          </label>
          <label className={styles.message}>
            Message: <textarea name="message"></textarea>
          </label>
          <label>
            <input
              type="submit"
              value="Send email"
              className={styles.submit}
            ></input>
          </label>
        </form>
      </div>
    </div>
    </div>
  );
}
export default Contacts;
