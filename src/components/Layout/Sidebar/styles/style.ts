import theme from '@/style/theme';
import styled from 'styled-components';

const { colors } = theme;

// Sidebar
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 112px;
  background-color: ${colors.palette.darkest};
  border-radius: 8px;
  padding: 8px 12px;
`;

const Li = styled.li`
  color: ${colors.palette.gray};
  font-size: 15px;
  font-weight: 700;
  padding: 4px 12px;
  cursor: pointer;
  display: block;

  &:hover svg {
    fill: #fff;
  }
  &:hover span {
    color: #fff;
  }
`;

// Header (Library)
const ContainerLibrary = styled.div`
  width: 420px;
  height: 120px;
  background-color: ${colors.palette.darkest};
  border-radius: 8px;
`;

const HeaderLibrary = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 16px;
`;

const ButtonHeader = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 4px 6px;
  color: ${colors.palette.gray};
  font-size: 15px;
  font-weight: 700;

  &:hover span {
    color: #fff;
  }
  &:hover svg {
    fill: #fff;
  }
`;

const Buttons = styled.button`
  border-radius: 20px;
  background-color: ${colors.palette.grayDarkest};
  color: #fff;
  font-weight: 500;
  font-size: 13px;
  padding: 6px 12px;

  &:hover {
    background-color: ${colors.palette.grayLightest};
  }
`;

// Body
const WrapperBody = styled.section`
  background-color: ${colors.palette.darkest};
  min-height: 66.6vh;
  max-height: 66.6vh;
  border-radius: 8px;
  padding: 0px 8px 8px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.palette.grayLightest};
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${colors.palette.darkest};
  }
`;

const WrapperButtonsSearchAndFilter = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 8px 8px 16px;
`;

const ButtonBodyRecent = styled.button`
  display: flex;
  gap: 8px;
  padding: 8px;
  color: ${colors.palette.gray};
  font-size: 14px;

  &:hover {
    color: #fff;
    transform: scale(1.03);
  }
  &:hover svg {
    fill: #fff;
  }
`;

// PlayList

const SectionPlayList = styled.section`
  display: flex;
  gap: 12px;
  align-items: center;
  height: 100%;
  padding: 0 8px;
`;

export default {
  Ul,
  Li,
  ContainerLibrary,
  HeaderLibrary,
  ButtonHeader,
  Buttons,
  WrapperBody,
  WrapperButtonsSearchAndFilter,
  ButtonBodyRecent,
  SectionPlayList,
};
