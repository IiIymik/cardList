import styled from "@emotion/styled";

export const Article = styled.article`
  padding: 32px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
  }
`;

export const Category = styled.p`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 0.7;

margin-bottom: 8px;

letter-spacing: 0.04em;
text-transform: uppercase;

color: #000000;

opacity: 0.5;
`;

export const Name = styled.h2`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 1.2;

margin-bottom:40px;

letter-spacing: -0.02em;

color: #000000;
`;

export const Price = styled.h3`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 60px;
line-height: 1.2;

margin-right: 24px;
letter-spacing: -0.02em;

color: #000000;
`;


export const Container = styled.div`
display: flex;
align-items:center;
justify-content:space-between;
`;
