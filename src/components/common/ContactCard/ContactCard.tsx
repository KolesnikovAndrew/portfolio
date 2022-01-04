import React, {FC} from 'react'
import styles from './ContactCard.module.scss'

export interface ContactCardProps {
  name: string;
  icon: object;
  link?: string;
}



const ContactCard: FC<ContactCardProps> = ({ name, icon, link }) => {
  return (
    <div className={styles.contactCard}>
      <a href={link}><div className={styles.contactIcon}>{icon}</div></a>
      <div className={styles.name}>{name}</div>
    </div>
  );
};
export default ContactCard
