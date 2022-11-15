import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import MainLayout from '../layouts/MainLayout';
import { wrapper, store } from "../redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {

  return(
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
        <ToastContainer toastStyle={{ backgroundColor: '#2471A3',color:'white' }} autoClose={3000}/>  
      </MainLayout>
    </Provider>
  )
}

export default wrapper.withRedux(MyApp)
