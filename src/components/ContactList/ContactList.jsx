import { Contact } from 'components/Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const applyFilters = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <h2 className="text-center text-2xl font-bold">Contacts</h2>
      <ul className=" flex gap-3 flex-col">
        {applyFilters().map(({ name, number, id }) => (
          <li className="flex gap-6" key={id}>
            <Contact name={name} number={number} />
            <button
              className=" text-md px-2 hover:bg-blue-700 bg-blue-600 rounded-md text-white"
              type="button"
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
