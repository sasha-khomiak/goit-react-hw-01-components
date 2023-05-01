import styled from 'styled-components';

export const Li = styled.li`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px 5px 5px 5px;

  background-color: white;

  list-style: none;
  margin: 0;
  padding: 5px;
  display: flex;
  align-items: center;

  margin-top: 10px;
`;

export const Status = styled.span`
  background-color: ${props => (props.isOnline ? `green` : `red`)};
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 50%;
`;

export const Name = styled.span`
  color: blueviolet;
  margin-left: 10px;
`;
