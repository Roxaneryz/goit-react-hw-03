
import { FaUserAlt, FaPhoneVolume } from "react-icons/fa";

import css from "./Contact.module.css"

const Contact = ({ id, name, number, deleteContact }) => {
    const handleClick = () => {
        deleteContact(id)
    }

  return (
    <div className={css.contact}>
      <p>
        <FaUserAlt />: {name}{" "}
      </p>

      <p>
        <FaPhoneVolume size = '24'/>: {number}
      </p>

      <button type="button" onClick={handleClick}> Delete</button>
    </div>
  );
}

export default Contact