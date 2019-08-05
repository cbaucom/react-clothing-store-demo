import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 90vw;
    align-items: center;
    > *:first-child {
      width: 100%;
      margin-bottom: 1rem;
      padding-bottom: 2rem;
      border-bottom: 1px dashed;
    }

    > *:last-child {
      width: 100%;
      margin-bottom: 0;
    }

    button {
      min-width: unset;
    }
  }
`;