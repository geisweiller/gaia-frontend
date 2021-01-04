import './assets/styles/global.scss';
import Routes from './routes';
import Header from './components/Header';
import store from './store/index';
import { Provider } from 'react-redux';
import CompaniesList from './pages/CompaniesList';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header/>
        <CompaniesList/>
        <Routes/>
      </Provider>    
      
    </div>
  );
}

export default App;
