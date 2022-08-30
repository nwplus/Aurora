import { colors } from "../../colors";

export const InputShortComponentCSS = `
position: relative;
  background-color: transparent;
  width: 474px;
  height: 22px;
  border-radius: 8px;
  border: 2px solid white;
  gap: 10px;
  color: white;
  outline: none;
  z-index: 0;

  padding: 13px;
  font-family: "HK Grotesk", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  transition: 0.4s;

  ::placeholder {
    color: ${colors.grey500};
  }

  &:hover {
    border-color: ${colors.emerald400};
  }

  &:focus {
    color: ${colors.emerald400};
    border-color:white;
  }
`;

export const errorMessageCSS = `
font-size: 18px;
color: ${colors.red500};
font-family: "HK Grotesk", sans-serif;
font-style: normal;
font-weight: 400;
padding: 4px 0;
margin-top: 4px;
`;
