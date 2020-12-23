import './assets/styles/global.scss';
import Header from './components/Header/index';
import Content from './components/Content/index';
import Modal from './components/Content/Modal/index';
import store from './store/index';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header/>
        <Content/>
      </Provider>
    </div>
  );
}

export default App;
