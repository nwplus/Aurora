import { colors } from "../../colors";
export const LabelCSS = `
display: flex;
align-items: center;
gap: 5px;
cursor: pointer;
color: white;

font-family: "HK Grotesk", sans-serif;
font-style: normal;
font-weight: 800;
font-size: 18px;
`;

export const SwitchCSS = `
position: relative;
width: 46px;
height: 20px;
background: ${colors.midnight500};
border-radius: 32px;
padding: 4px;
transition: 300ms all;
border: 2px white solid;

&:before {
  transition: 300ms all;
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 35px;
  top: 50%;
  left: 4px;
  background: ${colors.midnight600};
  transform: translate(0, -50%);
}`;

export const InputCSS = `
opacity: 0;
position: absolute;
display: none;`;
