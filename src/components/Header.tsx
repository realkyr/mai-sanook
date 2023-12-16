'use client'
import styled from 'styled-components'
import { Dropdown, Layout, Menu, Switch, Typography } from 'antd'
import { useAtom } from 'jotai'
import { darkModeAtom } from '@/atom/dark-mode'
import classNames from 'classnames'
import Link from 'next/link'

const { Header: AntdHeader } = Layout
const { Title } = Typography

const StyledHeader = styled(AntdHeader)`
  background-color: #fff;

  // transition
  transition: all 0.5s ease-in-out;

  h4 {
    margin: 0;
  }

  &.dark {
    color: #fff;
    background-color: #1a1a1a;
  }
`

interface IHeaderProps {
  categories: any[]
}

const Header = ({ categories }: IHeaderProps) => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom)

  const onChange = (checked: boolean) => {
    setDarkMode(checked)
  }

  const menu = (
    <Menu>
      {categories.slice(4).map(({ id, category }) => (
        <Menu.Item key={id}>
          <a href={`/category/${category}`}>{category}</a>
        </Menu.Item>
      ))}
    </Menu>
  )

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
      <Link href={'/'}>
        <Title level={4}>Mai Sanook App</Title>
      </Link>

      <div>
        {categories.slice(0, 4).map(({ id, category }) => (
          <span style={{ marginRight: 10 }} key={id}>
            <Link href={`/category/${category}`}>{category}</Link>
          </span>
        ))}
        <Dropdown overlay={menu} trigger={['click']}>
          <span
            style={{
              marginRight: 10,
              color: '#1890ff',
              cursor: 'pointer'
            }}
          >
            Others
          </span>
        </Dropdown>
      </div>

      <div>
        <Link href='/archive'>
          <span style={{ marginRight: 10 }}>Archive</span>
        </Link>
      </div>
      {/*  light dark toggle*/}
      <div>
        Light <Switch value={darkMode} onChange={onChange} /> Dark
      </div>
    </StyledHeader>
  )
}

export default Header
