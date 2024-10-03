'use client'

import styled from 'styled-components'
import { LanguageSwitcher } from '../LanguageSwitcher'

export function Header({ title = 'ETHZ', subTitle, dark }: { title: string; subTitle?: string; dark?: boolean }) {
  return (
    <HeaderContainer dark={dark}>
      <div>
        <h1 className="text-3xl h1">{title}</h1>
        {subTitle && <h2>{subTitle}</h2>}
      </div>
      <div>
        <LanguageSwitcher />
      </div>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header<{ dark?: boolean }>(({ dark }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '1rem',
  h1: {
    color: dark ? '#fff' : '#000',
  },
  h2: {
    color: dark ? '#fff' : '#000',
  },
}))
