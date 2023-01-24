import store from './store/index'
import { Provider } from 'react-redux';
import Counter from "./componenets/Counter";

function App() {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  );
}

export default App;
