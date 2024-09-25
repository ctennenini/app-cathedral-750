'use client'

import styled from 'styled-components'
import { LanguageSwitcher } from '../LanguageSwitcher'

export function Header({
  title = 'ETHZ',
  subTitle,
}: {
  title: string
  subTitle?: string
}) {
  return (
    <HeaderContainer>
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

const HeaderContainer = styled.header({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '1rem',
  h1: {},
  h2: {},
})
