import { Provider } from 'react-redux';
import MapScreen from './screen/MapScreen';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <MapScreen />
    </Provider>
  )
}

export default App;