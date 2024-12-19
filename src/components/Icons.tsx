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

export const InternalLinkIcon = styled((props: SVGProps<SVGSVGElement>) => (
  <svg
    width="39"
    height="16"
    viewBox="0 0 39 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M36.0397 7.77002H0.899658"
      stroke="currentColor"
      strokeWidth="1.9018"
      strokeMiterlimit="10"
    />
    <path
      d="M29.7397 0L28.4397 1.39001L35.3097 7.77002L28.4397 14.16L29.7397 15.55L38.0997 7.77002L29.7397 0Z"
      fill="currentColor"
    />
  </svg>
))({})

export type TriangleProps = SVGProps<SVGSVGElement> & {
  $isActive?: boolean
}

export const NavMenuTriangleClosed = styled(({ $isActive, ...props }: TriangleProps) => (
  <svg
    width="8"
    height="13"
    viewBox="0 0 8 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.10999 11.1096L6.10999 6.10962L1.10999 1.88965"
      stroke={$isActive ? '#CE3D3A' : '#191919'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </svg>
))({})

export const NavMenuTriangleOpen = styled(({ $isActive, ...props }: TriangleProps) => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 1L6 6L10.22 1"
      stroke={$isActive ? '#CE3D3A' : '#191919'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </svg>
))({})
