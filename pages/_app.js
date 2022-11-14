import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from '../layouts/MainLayout';
import { wrapper, store } from "../redux/store";
import { Provider } from "react-redux";


function MyApp({ Component, pageProps }) {

 
  return(
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  )
}

export default wrapper.withRedux(MyApp)
