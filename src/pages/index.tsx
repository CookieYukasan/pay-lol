import Router from "next/router";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Router.push('/auth/sign-in')
  }, [])
  
  return null
}
