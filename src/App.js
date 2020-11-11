import './App.css';
import {Provider} from 'react-redux';
import Main from './components/MainComponent';
import {ConfigureStore} from './redux/configureStore';
import {BrowserRouter} from 'react-router-dom';

const store = ConfigureStore ();

function App() {
  return (
    <Provider store ={store}>
      <BrowserRouter>
        <div className="App">
          <Main/>
        </div>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
