// Profile.js
import React from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Button = styled.button`
  background-color: #eee;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Плавное изменение цвета при наведении */
  display: flex;
  align-items: center; /* Центрируем содержимое вертикально */
  justify-content: center; /* Центрируем содержимое горизонтально */
  line-height: 1; /* Устанавливаем высоту строки равной 1, чтобы выровнять текст по центру */
  height: auto; /* Разрешаем кнопке изменять высоту в зависимости от её содержимого */
  margin: auto; /* Выравниваем по центру горизонтально */

  &:hover {
    background-color: #ccc; /* Темно-зеленый цвет при наведении */
  }
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
