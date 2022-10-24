import { useState} from 'react';
import { nanoid } from 'nanoid';

import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

import { Container, Title } from './App.styled';

import useLocalStorage from 'hooks/useLocalStorage';


export function App() {
  const [contacts, setContacts] = useLocalStorage('contactList', []);
  const [filter, setFilter] = useState('');


  const handleFilterChange = event => {
    setFilter(event.currentTarget.value);
  }

  const filteredContacts = value => {
    const filterNormalize = value.toLowerCase();

    return contacts
      .filter(contact => {
        return contact.name.toLowerCase().includes(filterNormalize);
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  };


  const contactDelete = id => {
      setContacts(state => state.filter(contact => contact.id !== id));
  };

  const formSubmit = ({ name, number }) => {
    const isContact = contacts.find(contact => contact.name === name);
    if (isContact) {
      alert(`${name} is already in contact`);
    } else {
      setContacts(state => {
        const newContact = {
          id: nanoid(),
          name,
          number,
        };
        return [newContact, ...state];
      });
    }
  };


    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactsForm onSubmit={formSubmit} />

        <Title>Contacts</Title>
        <Filter
        title="Find contact by name"
        onChange={handleFilterChange}
        value={filter}
        />

        <ContactsList
          filteredContacts={filteredContacts(filter)}
          onDelete={contactDelete}
        />
      </Container>
    );
  }



// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
