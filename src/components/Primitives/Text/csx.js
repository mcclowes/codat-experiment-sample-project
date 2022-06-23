import styled from "styled-components/macro";

export const Header = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-size: 1.2em;
  font-family: "Cantarell", sans-serif;
`;

Header.defaultProps = {
  theme: {
    colors: {
      black: "#333333",
    },
  },
};

export const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-family: "Cantarell", sans-serif;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};

    &:hover {
      opacity: 0.75;
    }
  }
`;

Paragraph.defaultProps = {
  theme: {
    colors: {
      primary: "#666666",
      black: "#333333",
    },
  },
};

export const Meta = styled.p`
  margin: 0;
  font-size: 0.8em;
  color: ${(props) => props.theme.colors.gray};
  font-family: "Cantarell", sans-serif;
`;

Meta.defaultProps = {
  theme: {
    colors: {
      gray: "#aaaaaa",
    },
  },
};
