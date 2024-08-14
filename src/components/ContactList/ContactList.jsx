import Contact from "../Contact/Contact.jsx";
import Filter from "../Filter/Filter.jsx";
import css from "./ContactList.module.css";

export default function ContactList({ value, onFilter, contacts, onDelete }) {

  console.log(contacts)
  return (
    <div className={css.contactList}>
      <Filter value={value} onFilter={onFilter} />
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
