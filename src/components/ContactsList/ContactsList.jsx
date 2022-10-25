import { useDispatch, useSelector } from 'react-redux';
import actions from 'components/redux/actions';
import { getFilteredContacts } from 'components/redux/selectors';

import { ContactsItem } from '../ContactsItem/ContactsItem';
import { List } from './ContactsList.styled';


export const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactsItem
            contact={{ id, name, number }}
            key={id}
            onDelete={id => dispatch(actions.contactDelete(id))}
          />
        );
      })}
    </List>
  );
}
