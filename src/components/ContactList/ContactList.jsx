import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";

export default function ContactList({ contacts })  {
  
  return (
    <>
    <Contact data={contacts}/>
    </>
  );
}
