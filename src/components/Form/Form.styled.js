import styled from '@emotion/styled/macro';

export const FormEl = styled.form`
  display: flex;
  align-items: stretch;
  justify-content:space-between;
  gap: 16px;
  flex-direction:column;
  /* & > input:invalid {
        border: 2px solid #E43F3F;
      }
  & > input:focus{
    border: 2px solid #4BCFA0;
  } */
`;

export const Input = styled.input`
  position:relative;
  padding:16px;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  &:focus {
    outline: none;
    border: 1px solid #4BCFA0;
  }
  /* &:invalid {
        border: 2px dashed red;
      } */

  &:focus:valid {
    border-color: #4BCFA0;
}
/* &:focus:invalid {
    border-color: red;
    color: red;
    box-shadow: none;
} */

  &:valid {
        border: 2px solid #4BCFA0;
      }
`;

export const ErrorMessage = styled.p`
position:absolute;
bottom: 53%;
left:35%;
font-size: 12px;
line-height: 1.4;
/* identical to box height, or 133% */

letter-spacing: -0.02em;

color: #E43F3F;
  `;

export const Button = styled.button`
display: flex;
flex-direction: column;
align-items: center;
padding: 16px 103px;
background: #4BCFA0;
border-radius: 16px;
border-color: transparent;
outline:none;

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 1.5;


letter-spacing: 0.04em;
text-transform: uppercase;

color: #FFFFFF;

  &:hover,
  :focus {
    border-color: #4BCFA0;
    background-color: #FFFFFF;
    color: #4BCFA0;
  }
`;
