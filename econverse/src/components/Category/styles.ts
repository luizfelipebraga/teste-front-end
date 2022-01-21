import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  align-items: center;

  padding: 2rem 0;
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Image = styled.img`
  height: 8rem;
  width: 8rem;
  object-fit: cover;
  border-radius: 50%;
  opacity: 0.7;
  background: #000;
`;

export const Title = styled.h3`
  color: #000;
  text-transform: uppercase;
`;