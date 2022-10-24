import React, { useState } from 'react';

import { Form, Container, Label, Input, Button } from './ContactsForm.styled';

export function ContactsForm({ onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return new Error('Something went wrong in ContactForm');
    }
  };


  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({
      name,
      number,
    });
    setName('');
    setNumber('')
  };


    return (
      <Form action="submit" onSubmit={handleSubmit}>
        <Container>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleInputChange}
            />
          </Label>
          <Button type="submit">
            Add contact
          </Button>
        </Container>
      </Form>
    );
  }
