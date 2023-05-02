import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Styledlink = styled(NavLink)`
  &.active {
    color: red;
  }
`;
