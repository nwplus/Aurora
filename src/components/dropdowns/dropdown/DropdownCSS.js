import { colors } from '../../colors/index';

export const dropdownWrapperCSS = `
	font-family: "HK Grotesk", sans-serif;
	border-radius: 5px;
	border-style: solid;
	border-width: 2px;
	border-color: ${colors.emerald400};
	cursor:pointer;
`;

export const dropdownOuterCSS = `
	padding: 12px;
	font-weight: 700;
	font-size: 18px;
	background: ${colors.white};
	color: black;
	display: flex;
	justify-content: space-between;
	border-radius: 5px 5px 0 0;
`;

export const dropdownInnerCSS = `
	font-size: 14px;
	font-weight: 400;
	padding: 12px;
	color: ${colors.white};
	background: ${colors.midnight450};
	border-radius: 0 0 5px 5px;
`;

export const dropdownArrowCSS = `
	font-size: 18px;
	padding-right: 5px;
`;
