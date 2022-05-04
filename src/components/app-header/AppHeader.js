import "./AppHeader.css";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
    :hover {
      color: blue;
    }
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`;

const AppHeader = ({ data }) => {
  const value = data.length;
  return (
    <Header as="a">
      <h1>John Rambo</h1>
      <h2>{value} записей, из них понравилось 0</h2>
    </Header>
  );
};

export default AppHeader;