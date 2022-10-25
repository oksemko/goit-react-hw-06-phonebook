// import { useState} from 'react';
// import { nanoid } from 'nanoid';

import { ContactsForm } from '../ContactsForm/ContactsForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';

import { Container, Title } from './App.styled';

// import useLocalStorage from 'hooks/useLocalStorage';


function App() {
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactsForm />
        <Title>Contacts</Title>
        <Filter
        title="Find contact by name" />
        <ContactsList />
      </Container>
    );
}

export { App };



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
