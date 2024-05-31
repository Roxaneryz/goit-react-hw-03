import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"


const ContactList = ({ contacts, deleteContact }) => {
//   console.log(contacts);
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contactLiItem} key={id}>
          <Contact
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
