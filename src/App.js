import styled from "styled-components";
import { useState } from "react";
import ContactListComponent from "./components/ContactListComponents";
import ConversationComponent from "./components/ConversationComponents";
import { contactList, messagesList } from './Data';

const Container = styled.div`
display : flex;
flex-direction: row;
height: 100vh;
width: 100%;
background: #f8f9fb;
`;
function App() {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleContactClick = (contactData) => {
    setSelectedContact(contactData);
  };
  return (
    <>
      <Container>
        <ContactListComponent contactList={contactList}
          onContactClick={handleContactClick}
        />
        <ConversationComponent selectedContact={selectedContact}
          messagesList={messagesList} />
      </Container>
    </>
  );
}

export default App;
