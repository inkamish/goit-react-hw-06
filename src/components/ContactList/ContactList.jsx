import Contact from "./Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts.length > 0 ? (
        <ul className={styles.contactList}>
          {" "}
          {contacts.map((contact) => (
            <li key={contact.id}>
              <Contact contact={contact} onDelete={onDelete} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts available</p>
      )}
    </>
  );
};

export default ContactList;
