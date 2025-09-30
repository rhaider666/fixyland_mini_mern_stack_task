import { Button, Result } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router'

const ErrorPage = () => {

  const navigate = useNavigate()
  return (
    <Result
    status="404"
    title="Ohh! Page Not Found"
    subTitle="We are Sorry, the page you visited does not exist."
    extra={<Button type='primary' onClick={()=>{navigate('/')}} className=' bg-custom'>Back To Home</Button>}
  />
  )
}

export default ErrorPage
