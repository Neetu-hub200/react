import { useState } from "react";
import Accordion from "./Accordion";
import Profile from "./Profile";

function App() {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const handleAccordionClick = (accordionid) => {
    setOpenAccordionId((prevValue) => {
      return prevValue === accordionid ? null : accordionid;
    });
  };

  return (
    <div>
      <Accordion
        id="my-profile"
        labelText="My profile"
        open={openAccordionId === "my-profile"}
        onClick={handleAccordionClick}
      >
        <Profile />
      </Accordion>

      <Accordion
        id="my-hobbies"
        labelText="My Hobbies"
        open={openAccordionId === "my-hobbies"}
        onClick={handleAccordionClick}
      >
        <div>
          <strong>My second Accordion</strong>
          <p>My second p tag</p>
        </div>
      </Accordion>
    </div>
  );
}

export default App;
