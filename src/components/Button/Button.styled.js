import styled from "@emotion/styled";

export const Btn = styled.button`
display: flex;
flex-direction: row;
align-items: center;
padding: 16px;
border: 1px solid rgba(0, 0, 0, 0.1);
box-sizing: border-box;
border-radius: 16px;

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

letter-spacing: 0.04em;
text-transform: uppercase;

color: #4BCFA0;
&:hover,:focus{
  background: #4BCFA0;
  color: #FFFFFF;
  border-radius: 16px;
}
`;

