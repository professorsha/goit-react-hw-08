import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from "react-redux";
import { filteredContacts } from "../../redux/contactsOps";

export default function ContactList() {
  const contacts = useSelector(filteredContacts);
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li className={css.listItem} key={contact.id} >
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}


  

 
      // {contacts.map((contact) => (
      //   <li key={contact.id} className={css.contactItem}>
      //     <Contact
      //       name={contact.name}
      //       number={contact.number}
      //       id={contact.id}
      //     />
      //   </li>
      // ))}
    
 