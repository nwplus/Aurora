import { colors } from "../colors/index";

export const SidePanelCSS = `

width: 139px;
height: 26px;

font-family: 'HK Grotesk', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 1.6rem;
line-height: 26px;

letter-spacing: -0.45px;


color: ${colors.white};

&:hover {
    background: ${colors.midnight500};
    align-items: center;
    padding: 18px 66px 18px 66px;
    position: absolute;
    gap: 10px;
}
`;