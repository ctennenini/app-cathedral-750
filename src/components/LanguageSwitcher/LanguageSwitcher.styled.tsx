import styled from 'styled-components'

export const Select = styled.select({
  padding: '8px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  backgroundColor: '#fff',
  color: '#333',
  '&:focus': {
    borderColor: '#007bff',
    outline: 'none',
  },
  option: {
    padding: '8px',
    fontSize: '16px',
    color: '#333',
    backgroundColor: '#fff',
  },
})
