/*import Navbar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";*/
// import Hero from "./components/Hero.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  let contacts  = [
    {
      image:"mr-whiskerson",
      name:"Mr. Whiskerson",
      phone:"(212) 555-1234",
      email:"mr.whiskaz@catnap.meow",
    },
    {
      image:"fluffykins",
      name:"Fluffykins",
      phone:"(212) 555-2345",
      email:"fluff@me.com",
    },
    {
      image:"felix",
      name:"Felix",
      phone:"(212) 555-4567",
      email:"thecat@hotmail.com",
    },
    {
      image:"pumpkin",
      name:"Pumpkin",
      phone:"(0800) CAT KING",
      email:"pumpkin@scrimba.com",
    }
  ]

  return (
    <div>
      {/*<Navbar />
      <Hero />
      <Card />*/}
      <div className="contacts">
        {contacts.map((contact) => {
          return <Contact key={contact.email} contact={contact} />
        })}
      </div>
    </div>
  )
}

export default App
