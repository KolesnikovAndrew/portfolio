import React from 'react'
import styles from './Contacts.module.scss';
import {AiFillGithub} from "react-icons/ai";
import {MdOutlineEmail} from "react-icons/md";
import {FaCity} from "react-icons/fa"
import {BiHeading} from "react-icons/bi"
import ContactCard from '../../common/ContactCard/ContactCard';



export function Contacts() {
  console.log(typeof(<AiFillGithub/>));
  return (
    <div>
      <h1>Contacts</h1>
      <div className={styles.contactIcons}>
        <ContactCard name="KolesnikovAndrew" icon={<AiFillGithub/>} link={"https://github.com/KolesnikovAndrew"}/> 
        <ContactCard name="kolesnikov6@inbox.lv" icon={<MdOutlineEmail/>}/>   
        <ContactCard name="HH.ru resume" icon={<BiHeading/>} link={"https://hh.ru/resume/5ada2402ff09787b0b0039ed1f6e7068433662"}/>
      </div>
      <div className={styles.emailForm}>
      <h1>Send me an email!</h1>
      <form action="mailto:kolesnikov6@inbox.lv" method="POST" encType='multipart/form-data' name='EmailForm'>
        <label className={styles.name}>Name: <input type="text" name="ContactName"></input></label>
        <label className={styles.message}>Message: <textarea name="ContactMessage"></textarea></label>
        <label><input type="submit" value="Send email" className={styles.submit}></input></label>
      </form>
      </div>
    </div>
  )
}
export default Contacts