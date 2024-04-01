import React, { useState } from 'react';
import { CiMenuKebab } from 'react-icons/ci';
import styled from 'styled-components';
import MenuItems from './MenuItems';
import { contactList } from '../Data';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 30%;
`;

export const ProfileInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #ededed;
  padding: 15px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Menu = styled(CiMenuKebab)`
  width: 40px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer; // Add cursor pointer for better UX
`;

export const SearchBox = styled.div`
  display: flex;
  background: #f6f6f6;
  padding: 10px;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 16px;
  width: 100%;
  padding: 20px 0;
`;

export const SearchIcon = styled.img`
  width: 28px;
  height: 28px;
  padding-left: 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding-left: 15px;
  font-size: 17px;
  margin-left: 10px;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #f2f2f2;
  background: white;
  cursor: pointer;
  padding: 15px 12px;
  &:hover {
    background: #f2f2f2;
  }
`;

const ProfileIcon = styled(ProfileImage)`
  width: 38px;
  height: 38px;
`;

const ContactName = styled.span`
  width: 100%;
  font-size: 16px;
  color: black;
`;

const MessageText = styled.span`
  width: 80%;
  font-size: 14px;
  margin-top: 3px;
  color: rgba(0, 0, 0, 0.8);
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 19px;
`;

const ContactComponent = ({ userData }) => {
  return (
    <ContactItem>
      <ProfileIcon src={userData.profilePic} />
      <ContactInfo>
        <ContactName>{userData.name}</ContactName>
        <MessageText>{userData.lastText}</MessageText>
      </ContactInfo>
      <MessageText>{userData.lastTextTime}</MessageText>
    </ContactItem>
  );
};

const ContactListComponent = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    // console.log("Menu Clicked!");
  };

  return (
    <>
      <Container>
        <ProfileInfoDiv>
          <ProfileImage src="/profile/chadhar.png" />
          <Menu onClick={toggleMenu} />
          {showMenu && <MenuItems setShowMenu={setShowMenu} />}
        </ProfileInfoDiv>
        <SearchBox>
          <SearchContainer>
            <SearchIcon src={'/search-icon.svg'} />
            <SearchInput placeholder="Search or start new chat" />
          </SearchContainer>
        </SearchBox>
        {contactList.map((userData, index) => (
          <ContactComponent key={index} userData={userData} />
        ))}
      </Container>
    </>
  );
};

export default ContactListComponent;