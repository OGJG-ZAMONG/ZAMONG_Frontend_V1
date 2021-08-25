import styled from '@emotion/styled'
import { RSA_PKCS1_OAEP_PADDING } from 'constants'

export const LoginBox = styled.div`
  width: 520px;
  height: 595px;
  background-color: #2c2c2E;
  border-radius: 10px;
  color: white;
  font-size: 16px;
`

export const PaddingBox = styled.div`
  padding-top: 66px;
  padding-left: 70px;
`

export const  Title = styled.div`
  font-size: 32px;
  font-weight: bold;
`

export const MainContainer = styled.div`
  margin-top: 86px;
  margin-bottom: 105px;
`

export const GuideWord = styled.div`
  color: #8E8E93;
`

export const Input = styled.input`
  margin-top: 15px;
  width: 380px;
  height: 32px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #636366;
  outline: none;
  color: white;
  font-size: 16px;
  margin-bottom: 28px;
  &:last-child{
  -webkit-text-security: "*";
  }
`

export const LinkBox = styled.div`
  font-size: 15px;
  a{
    color: #0a84ff;
    text-decoration: none;
  }

  &:last-child {
    margin-left: 87px;
  }
`

export const LoginButton = styled.div`
  width: 77px;
  height: 32px;
  font-size: 16px;
  color: white;
  border: 1px solid transparent;
  background-color: #0a84ff;
  border-radius: 100px;
  text-align: center;
  line-height: 2;
  margin-left: 48px;
`

export const EventBox = styled.div`
  display: flex;
  align-items: center;
`