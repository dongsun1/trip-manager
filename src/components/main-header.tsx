import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';

const Header = styled.div`
  width: 100%;
  height: 50px;
  background-color: #81d4fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5px;
`;

const MainHeader = () => {
  return (
    <Header>
      <MenuIcon />
      <span>Trip Manager</span>
      <span></span>
    </Header>
  );
};

export default MainHeader;
