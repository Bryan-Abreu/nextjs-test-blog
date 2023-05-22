import '../../styles/globals.css'
import Wrapper from '../../components/Wrapper'



 function App({ Component, pageProps }) {
  return (
   <Wrapper>
    <Component {...pageProps} />
    </Wrapper>
  )
}

export default App
