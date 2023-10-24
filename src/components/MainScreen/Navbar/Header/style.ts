import styled from 'styled-components';
import theme from '@/style/theme';

const { colors } = theme;

const Container = styled.button`
  width: 465px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  background-color: ${colors.palette.grayLightest};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #4b4b4b;
  }
`;

export default { Container };
