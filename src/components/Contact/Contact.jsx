import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

export default function Contact({ data:{ id, name, number }, onDelete }) {
  return (
    <div>
      <div>
        <div>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
        <div>
          <IoPerson />
          <p>{name}</p>
        </div>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
