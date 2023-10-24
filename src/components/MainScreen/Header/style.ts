import styled from 'styled-components';
import theme from '@/style/theme';

const { colors } = theme;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
`;

// Header
const ButtonDownloadApp = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: ${colors.buttons.dark};
  border-radius: 20px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  padding: 0 14px;
`;

export default { Container, ButtonDownloadApp };
