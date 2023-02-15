import { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  const [isRouterLoaded, setIsRouterLoaded] = React.useState(false)

  React.useEffect(() => {
    (() => {
      setIsRouterLoaded(true)
    })()
  },[])
  return (
    <div>
      {
        isRouterLoaded && <Component {...pageProps} />
      }
    </div>
  );
}

export default App;