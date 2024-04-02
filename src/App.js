import styled from "styled-components";
import { useState, useEffect } from "react";
import ContactListComponent from "./components/ContactListComponents";
import ConversationComponent from "./components/ConversationComponents";
import { contactList } from './Data';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  background: #f8f9fb;
`;

function App() {
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    if (contactList.length > 0) {
      setSelectedContact(contactList[0]);
    }
  }, []);

  const handleContactClick = (contactData) => {
    setSelectedContact(contactData);
  };

  return (
    <>
      <Container>
        <ContactListComponent
          contactList={contactList}
          onContactClick={handleContactClick}
        />
        <ConversationComponent
          selectedContact={selectedContact}
          messagesList={selectedContact ? selectedContact.messages : []} // Pass messages specific to the selected contact
        />
      </Container>
    </>
  );
}

export default App;