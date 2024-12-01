import { SVGProps } from 'react'
import styled from 'styled-components'

export const HamburgerIcon = styled((props: SVGProps<SVGSVGElement>) => (
  <svg
    width="44"
    height="32"
    viewBox="0 0 44 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.18018 1.95001H41.9402"
      stroke="white"
      strokeWidth="2.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M1.18018 16.2H41.9402"
      stroke="white"
      strokeWidth="2.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M1.18018 30.45H41.9402"
      stroke="white"
      strokeWidth="2.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </svg>
))({
  width: 40,
  height: 40,
})

export const CloseIcon = styled((props: SVGProps<SVGSVGElement>) => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.949951 0.930176L21.7699 21.7402"
      stroke="white"
      strokeWidth="1.2805"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M21.7699 0.930176L0.949951 21.7402"
      stroke="white"
      strokeWidth="1.2805"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </svg>
))({
  width: 20,
  height: 20,
})
