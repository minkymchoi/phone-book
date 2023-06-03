import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    const newContact = { ...contact, id: Date.now() };
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <h1>Phone Book</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
