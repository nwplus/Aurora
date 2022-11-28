import { SidePanelCSS } from './SidePanelCSS';
import { colors } from '../colors/Colors';
import styled from 'styled-components';

const SidePanel = ({ active, label }) => {
  const inactive = `color: ${colors.grey500}; pointer-events: none`;
  let styles = '';

  if (active) {
    styles += `${SidePanelCSS}`;
  } else {
    styles += inactive;
  }

  const SidePanel = styled.div`
    ${SidePanelCSS}
    ${styles}
  `;

  return <SidePanel active={styles}>{label}</SidePanel>;
};

export { SidePanel };
