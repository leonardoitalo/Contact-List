import { ButtonRed, ButtonSave, MainContainer } from "global/styles/GlobalComponents"
import { Field, Form, Title } from "./styles"
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addContact } from "store/reducers/contacts-reducer";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newContact = {
        id: Date.now(),  
        name,
        telephone,
        email,
        };

        dispatch(addContact(newContact));

        setName("");
        setTelephone("");
        setEmail("");

        navigate('/')
    }

    const handleGoBack = () => {
        navigate("/")
    }

    return (
        <MainContainer>
            <Title>Novo Contato</Title>
            <Form onSubmit={handleSubmit}>
                Nome: 
                <Field 
                    type="text" 
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
                Telefone: 
                <Field 
                    type="number" 
                    placeholder="Telefone" 
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                />
                Email: 
                <Field 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <ButtonSave type="submit">Salvar</ButtonSave>
                <ButtonRed onClick={handleGoBack}>Voltar</ButtonRed>
            </Form>
        </MainContainer>
    )
}

export default FormRegister