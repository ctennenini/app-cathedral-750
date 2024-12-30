import { SVGProps } from 'react'
import styled from 'styled-components'

export const HomeIcon = styled((props: SVGProps<SVGSVGElement>) => (
  <svg
    width="30"
    height="26"
    viewBox="0 0 30 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24.72 7.77002V21.38C24.72 23.25 23.2 24.76 21.34 24.76H8.33995C6.46995 24.76 4.95996 23.24 4.95996 21.38V7.77002"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M0.72998 10.55L12.6 2.27C13.95 1.38 15.71 1.39 17.05 2.29L28.67 10.55"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
  </svg>
))({})

export const HamburgerIcon = styled((props: SVGProps<SVGSVGElement>) => (
  <svg
    width="27"
    height="21"
    viewBox="0 0 27 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.0500488 0.98999H26.34"
      stroke="currentColor"
      strokeWidth="1.4742"
      strokeMiterlimit="10"
    />
    <path
      d="M0.0500488 10.18H26.34"
      stroke="currentColor"
      strokeWidth="1.4742"
      strokeMiterlimit="10"
    />
    <path
      d="M0.0500488 19.37H26.34"
      stroke="currentColor"
      strokeWidth="1.4742"
      strokeMiterlimit="10"
    />
  </svg>
))({})

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
      stroke="currentColor"
      strokeWidth="1.2805"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M21.7699 0.930176L0.949951 21.7402"
      stroke="currentColor"
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

export const BackArrowIcon = styled((props: SVGProps<SVGSVGElement>) => (
  <svg
    width="26"
    height="12"
    viewBox="0 0 26 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.38989 6.17999H25.3399"
      stroke="currentColor"
      strokeWidth="1.4253"
      strokeMiterlimit="10"
    />
    <path
      d="M7.10985 12.01L8.07985 10.97L2.93985 6.17998L8.07985 1.39998L7.10985 0.349976L0.839844 6.17998L7.10985 12.01Z"
      fill="currentColor"
    />
  </svg>
))({})

export const NextArrowIcon = styled((props: SVGProps<SVGSVGElement>) => (
  <svg
    width="38"
    height="16"
    viewBox="0 0 38 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M35.35 7.88H0.809998"
      stroke="currentColor"
      strokeWidth="1.8689"
      strokeMiterlimit="10"
    />
    <path
      d="M29.15 0.23999L27.88 1.60999L34.63 7.88L27.88 14.16L29.15 15.53L37.37 7.88L29.15 0.23999Z"
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
