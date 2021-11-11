import styled from '@emotion/styled';

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style:none;
  gap:32px;
  background-color: inherit;
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;
