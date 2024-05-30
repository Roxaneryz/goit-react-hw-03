
import { FaUserAlt, FaPhoneVolume } from "react-icons/fa";



const Contact = ({ id, name, number, deleteContact }) => {
    const handleClick = () => {
        deleteContact(id)
    }

  return (
    <div>
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