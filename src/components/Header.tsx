'use client'
import styled from 'styled-components'
import { Layout, Switch, Typography } from 'antd'
import { useAtom } from 'jotai'
import { darkModeAtom } from '@/atom/dark-mode'
import classNames from 'classnames'

const { Header: AntdHeader } = Layout
const { Title } = Typography

const StyledHeader = styled(AntdHeader)`
  background-color: #fff;

  // transition
  transition: all 0.5s ease-in-out;

  &.dark {
    color: #fff;
    background-color: #1a1a1a;
  }

  //
  // span {
  //   color: #fff;
  // }
  //
  // .search-icon {
  //   margin-right: 8px;
  //   position: absolute;
  //   top: 50%;
  //   left: 10px;
  //   color: #fff;
  //   transform: translateY(-50%);
  //   z-index: 9;
  //
  //   svg {
  //     color: #fff;
  //   }
  // }
  //
  // .ant-select {
  //   // placeholder
  //   .ant-select-selection-placeholder {
  //     color: #fff;
  //     font-family: 'Prompt', sans-serif;
  //     padding: 0 0 0 30px;
  //   }
  //
  //   &.menu-search {
  //     // only border bottom
  //     border: none;
  //
  //     .ant-select-selector {
  //       border: none;
  //       border-bottom: 1px solid #fff !important;
  //       border-radius: 0 !important;
  //
  //       box-shadow: none !important;
  //
  //       input {
  //         color: #fff;
  //         padding: 0 0 0 30px;
  //         font-family: 'Prompt', sans-serif;
  //       }
  //     }
  //   }
  // }
`

const Header = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom)

  const onChange = (checked: boolean) => {
    setDarkMode(checked)
  }

  return (
    <StyledHeader
      className={classNames({
        dark: darkMode
      })}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      {/* Logo or Brand Name */}
      <Title level={4}>Mai Sanook App</Title>
      {/*  light dark toggle*/}
      <div>
        Light <Switch onChange={onChange} /> Dark
      </div>
    </StyledHeader>
  )
}

export default Header
