import styled from "styled-components";
import { SearchContainer, SearchInput } from "./ContactListComponents";
import { IoMdSend } from "react-icons/io";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 70%;
  background: #f6f7f8;
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding: 15px;
  align-items: center;
  gap: 10px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const ChatBox = styled.div`
  display: flex;
  background: #f0f0f0;
  padding: 10px;
  align-items: center;
  bottom: 0;
`;

const EmojiImage = styled.img`
  width: 30px;
  height: 28px;
  opacity: 0.4;
  cursor: pointer;
`;

const SendIcon = styled(IoMdSend)`
  width: 30px;
  height: 28px;
  opacity: 0.4;
  cursor: pointer;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #e5ddd6;
`;

const MessageDiv = styled.div`
  justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
  display: flex;
  margin: 5px 16px;
`;

const Message = styled.div`
  background: ${(props) => (props.isYours ? "#daf8cb" : "white")};
  max-width: 50%;
  color: #303030;
  padding: 8px 10px;
  font-size: 19px;
`;

const ConversationComponent = ({ selectedContact }) => {
    return (
        <Container>
            {selectedContact && (
                <>
                    <ProfileHeader>
                        <ProfileImage src={selectedContact.profilePic} />
                        <div>{selectedContact.name}</div>
                    </ProfileHeader>
                    <MessageContainer>
                        {selectedContact.messages.map((messageData) => (
                            <MessageDiv isYours={messageData.MsgMode === "sendMsg"} key={messageData.id}>
                                <Message isYours={messageData.MsgMode === "sendMsg"}>
                                    {messageData.text}
                                </Message>
                            </MessageDiv>
                        ))}
                    </MessageContainer>
                </>
            )}
            <ChatBox>
                <SearchContainer>
                    <EmojiImage src={"/data.svg"} />
                    <SearchInput placeholder="Type a message" />
                    <SendIcon />
                </SearchContainer>
            </ChatBox>
        </Container>
    );
};

export default ConversationComponent;