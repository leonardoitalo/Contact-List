import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonRed, ButtonSave } from "global/styles/GlobalComponents";
import { Card, ContactInfo, Name } from "./styles";
import { remove, editContact } from "store/reducers/contacts-reducer";
import { RootReducer } from "store/store";
import { IContact } from "interfaces/IContact";

const Contact = () => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedContact, setEditedContact] = useState({
    telephone: "",
    email: ""
  });
  const dispatch = useDispatch();

  const contacts = useSelector((state: RootReducer) => state.contact);

  const handleEdit = (contact: IContact) => {
    setEditedContact({
      telephone: contact.telephone,
      email: contact.email
    });
    setEditingId(contact.id);
  };

  const handleSave = (id: number) => {
    dispatch(editContact({ id, updatedContact: editedContact }));
    setEditingId(null); 
  };

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Card>
            <Name>{contact.name}</Name>
            Telefone: 
            <ContactInfo
              disabled={editingId !== contact.id}
              value={editingId === contact.id ? editedContact.telephone : contact.telephone}
              onChange={(e) =>
                setEditedContact((prev) => ({
                  ...prev,
                  telephone: e.target.value
                }))
              }
            />
            Email: 
            <ContactInfo
              disabled={editingId !== contact.id}
              value={editingId === contact.id ? editedContact.email : contact.email}
              onChange={(e) =>
                setEditedContact((prev) => ({
                  ...prev,
                  email: e.target.value
                }))
              }
            />
            {editingId === contact.id ? (
              <>
                <ButtonSave onClick={() => handleSave(contact.id)}>
                  Salvar
                </ButtonSave>
                <ButtonRed onClick={() => setEditingId(null)}>
                  Cancelar
                </ButtonRed>
              </>
            ) : (
              <>
                <Button onClick={() => handleEdit(contact)}>Editar</Button>
                <ButtonRed onClick={() => dispatch(remove(contact.id))}>
                  Remover
                </ButtonRed>
              </>
            )}
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default Contact;
