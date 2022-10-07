import { SidePanelCSS } from "./SidePanelCSS";
import { colors } from "../colors/Colors";
import styled from "styled-components"

const SidePanel = (props) => {

  const getActiveStyles = (p) => {
    const inactive = `color: ${colors.grey500}; pointer-events: none`;
    let styles = "";

    if (p.active) {
      styles += `${SidePanelCSS}`;
    } else {
      styles += inactive;
    }

    return styles;
  };
  
  const SidePanel = styled.div`
	  ${SidePanelCSS}
    ${(p)=> getActiveStyles}
`;

  return (
    <SidePanel active = {props.active}>
      {props.label}
    </SidePanel>
  );
};

export { SidePanel };