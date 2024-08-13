import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {

  console.log(contacts)
  return (
    <div className={css.contactList}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          data={contact}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
