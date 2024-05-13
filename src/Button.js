// Button.js
import styled from "styled-components";

const Button = styled.button`
  background-color: #eee;
  color: black;
  padding: 15px 30px;
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
  font-size: 1rem; /* Установка большего размера шрифта */

  &:hover {
    background-color: #ccc; /* Темно-зеленый цвет при наведении */
  }
`;

export default Button;
