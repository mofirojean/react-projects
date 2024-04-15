/*import Navbar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";*/
// import Hero from "./components/Hero.jsx";
import Contact from "./components/Contact.jsx";
import {phoneContacts} from "./data/contacts.jsx";

function App() {
  return (
    <div>
      {/*<Navbar />
      <Hero />
      <Card />*/}
      <div className="contacts">
        {phoneContacts.map((contact) => {
          return <Contact key={contact.email} contact={contact} />
        })}
      </div>
    </div>
  )
}

export default App
