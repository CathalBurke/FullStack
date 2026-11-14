import './App.css'

import Header from './Components/Header'
import MemberCard from './Components/MemberCard'
import Footer from './Components/Footer'

function App() {
  const members = [
    {
      id: 1,
      name: "Dylan Tierney-Martin",
      sport: "Rugby",
      position: "Hooker",
      age: 27,
      quote: "It was a no-brainer for me to sign on for three more years so I'm delighted to be staying on.",
      photo: "/players/dylan-tierney-martin.jpg",
    },
    {
      id: 2,
      name: "Darragh Murray",
      sport: "Rugby",
      position: "Lock",
      age: 25,
      quote: "That was special, that was.",
      photo: "/players/darragh-murray.jpg",
    },
    {
      id: 3,
      name: "Ciarán Frawley",
      sport: "Rugby",
      position: "Fly-half",
      age: 28,
      quote: "It's just getting game time is the main thing for me.",
      photo: "/players/ciaran-frawley.jpg",
    },
    {
      id: 4,
      name: "Will Connors",
      sport: "Rugby",
      position: "Back row",
      age: 30,
      quote: "It is a proud rugby province",
      photo: "/players/will-connors.jpg",
    },
  ];

  return (
    <div>
      <Header title="Connacht Rugby" welcome="Meet The Squad" />

      <div className="member-container">
        {members.map((member) => (
          <MemberCard
            key={member.id}
            photo={member.photo}
            name={member.name}
            sport={member.sport}
            position={member.position}
            age={member.age}
            quote={member.quote}
          />
        ))}
      </div>
      <br>
      </br>
      <br>
      </br>
      <Footer text="Connacht Rugby 2026 " />
    </div>
  );
}

export default App
