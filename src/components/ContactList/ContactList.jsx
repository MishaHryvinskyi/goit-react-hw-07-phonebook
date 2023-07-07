import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selector';
import { deleteContact } from 'redux/contactsSlice';
import { List, ListItem, BtnDelite, Contact } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts); 
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  if (!filteredContacts?.length) {
    return <Contact 
    style={{ 
      padding: '20px', 
      color: 'red', 
      fontSize: '24px'
    }}>
      No such contact found.
    </Contact>;
  }

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Contact>
            {name}: {number}
          </Contact>
          <BtnDelite onClick={() => handleDeleteContact(id)}>
          Remove
          </BtnDelite>
        </ListItem>
      ))}
    </List>
  );
}