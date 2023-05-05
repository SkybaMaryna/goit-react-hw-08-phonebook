import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export const ContactsPage = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-6 p-10 bg-gradient-to-r from-cyan-200 to-blue-200">
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
