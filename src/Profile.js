// Profile.js
import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ProfileContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const GithubIcon = styled.img`
  width: 24px; /* Задаем размер иконки */
  margin-right: 8px; /* Добавляем небольшой отступ между иконкой и текстом */
`;

const Profile = () => {
  const handleLogin = () => {
    // Implement GitHub OAuth login logic here
  };

  return (
    <ProfileContainer>
      <h2>Welcome to Your Profile</h2>
      <Button onClick={handleLogin}>
        <GithubIcon
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="GitHub Logo"
        />
        <span>Login with GitHub</span>{" "}
        {/* Оборачиваем текст в span для применения line-height */}
      </Button>
    </ProfileContainer>
  );
};

export default Profile;
