import styled from 'styled-components';
import { Input, Button } from 'semantic-ui-react'

export const HeaderHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 5em;
`;

export const Logo = styled.div`
  background-image: url('${props => props.img}');
  width: 130px;
  height: 36px;
  margin-right: 50px;
`;

export const SearchBar = styled(Input)`
  width: 400px;
  height: 50px;
  border-radius: 5px;
  background-color: #f8f8fb;
  border: solid 1px #f8f8fb;
`;

export const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 5em;
`;

export const SignupButton = styled(Button)`
  width: 100px;
  height: 50px;
  border-radius: 5px !important;
  background-color: #2f9ed8 !important;
  color: white !important;
`;

export const LoginButton = styled(Button)`
  width: 100px;
  height: 50px;
  border-radius: 5px !important;
  background-color: #f8f8fb !important;
  border: solid 1px #f8f8fb !important;
  color: #2f9ed8 !important;
  margin-right: 20px !important;
`;