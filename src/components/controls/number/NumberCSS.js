import { colors } from "../../colors";

const ContainerCSS = `
  font-family: "HK Grotesk";
  display: flex;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid ${colors.midnight400};
  height: 34px;
  width: 34px;
  justify-content: center;
  align-items: center;
`;

export const UnfilledContainerCSS = `
  ${ContainerCSS};
  color: ${colors.midnight400};
  background: transparent;
`;

export const FilledContainerCSS = `
  ${ContainerCSS};
  color: ${colors.white};
  background: ${colors.midnight400};
`;

