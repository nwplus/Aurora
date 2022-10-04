import { colors } from "../../colors/index";

export const InputMobileCSS = `
	height: 30px;
	border-radius: 3px;
	padding-left 10px;
	font-family: 'HK Grotesk', sans-serif;
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	outline: none;
	border: none;
`

export const InputMobileLightCSS = `
	background: ${colors.white};
	color: black;
	::-webkit-input-placeholder {
		color: ${colors.grey500};
	}
	:-ms-input-placeholder {
		color: ${colors.grey500};
	}
`

export const InputMobileDarkCSS = `
	background: ${colors.midnight500};
	color: ${colors.white};
	::-webkit-input-placeholder {
		color: ${colors.midnight400};
	}
	:-ms-input-placeholder {
		color: ${colors.midnight400};
	}
`

export const InputMobileTransparentCSS = `
	background: transparent;
	::-webkit-input-placeholder {
		color: ${colors.grey500};
	}
	:-ms-input-placeholder {
		color: ${colors.grey500};
	}
`