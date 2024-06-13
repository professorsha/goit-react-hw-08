import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact: { name, number, id }}) {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div className={css.contactName}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={css.contactName}>
          <BsFillTelephoneFill />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </>
  );
}
