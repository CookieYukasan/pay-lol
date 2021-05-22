import DashboardWrapper from '@/components/dashboard/Wrapper'
import '@/styles/global.scss'
import { ChakraProvider } from "@chakra-ui/react"
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [onDashboard, setOnDashboard] = useState(false)
  
  useEffect(() => {
    if(typeof window !== 'undefined'){
      if(window.location.pathname.includes("dashboard")){
        setOnDashboard(true)
      }
    }
  })

  return (
    <ChakraProvider>
      {onDashboard ? (
        <>
          <DashboardWrapper>
            <Component {...pageProps} />
          </DashboardWrapper>
        </>
      ) : <Component {...pageProps} />}
    </ChakraProvider>
  )
}

export default MyApp
