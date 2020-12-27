import './assets/styles/global.scss';
import Routes from './routes';
import Header from './components/Header';
import store from './store/index';
import { Provider } from 'react-redux';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header/>
        <Routes/>
      </Provider>
    </div>
  );
}

export default App;
