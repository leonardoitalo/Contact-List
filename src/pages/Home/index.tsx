import ContactList from "containers/ContactList"
import AddContactLink from "./styles"

const Home = () => {
    return (
        <>
            <ContactList />
            <AddContactLink to={"/new"}>+</AddContactLink>   
        </>
    )
}

export default Home