import styled from 'styled-components'

export const Button = styled.button({
  padding: '8px',
  fontSize: '16px',
  border: 'none',
  backgroundColor: 'transparent',
  color: '#333',
  cursor: 'pointer',
  '&:focus': {
    borderColor: '#007bff',
    outline: 'none',
  },
})
