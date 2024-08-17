import { Button } from "global/styles/GlobalComponents"
import { Card, ContactInfo, Name, Tag } from "./styles"
import contacts from "data/contacts.json"

const Contact = () => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Card>
            <Name>{contact.name}</Name>
            <Tag>favorito</Tag>
            <ContactInfo>Telefone: {contact.telephone}</ContactInfo>
            <ContactInfo>Email: {contact.email}</ContactInfo>
            <Button>Salvar</Button>
            <Button>Cancelar</Button>
          </Card>
        </li>
      ))}
    </ul>
  )
}

export default Contact
