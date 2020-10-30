import styled from 'styled-components'

export const Content = styled.section`
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 575.98px) {
    margin-top: 130px;
  }
  @media (min-width: 578px ) and  (max-width: 767.98px) {
    margin-top: 320px;
  }
`

export const Paper = styled.div`
  border-radius: 10px;
  background-color: ${props => props.theme.white};
  height: calc(400px + 20px);
  box-shadow: 0 0 5px rgba(0,0,0,0.4);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 575.98px) {
    height: calc(350px + 20px);
  }
`

export const Title = styled.h2`
  padding: 10px;
  @media (max-width: 575.98px) {
   align-self: center;
  }
`
export const Number = styled.h2`
  font-size: 80px;
  font-weight: 700;
`