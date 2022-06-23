import styled from "styled-components/macro";

export const PageWrapper = styled("div")`
  align-items: center;
  background: ${(props) => props.theme.colors.primary};
  background: linear-gradient(
    52deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.alt} 100%
  );
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

export const PageContainer = styled("div")`
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.sizes.border.radius};
  display: flex;
  flex-direction: column;
  padding: 1em 2em;
  width: 80vw;

  -webkit-box-shadow: 0px 4px 28px 6px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 4px 28px 6px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 4px 28px 6px rgba(0, 0, 0, 0.3);
`;
