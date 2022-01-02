import styled from "styled-components";

export const Wrapper = styled.main`
  background: #06092b;
  height: 100%;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  text-align: center;
`;

export const Logo = styled.img`
  width: 25rem;
`;

export const Title = styled.h1`
  margin-top: 2rem;
  font-size: 2.5rem;
`;

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin-top: 1.5rem;
`;

export const Illustration = styled.img`
  width: min(30rem, 100%);
  margin-top: 3rem;
`;
