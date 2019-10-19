import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './Store';
import Login from './Containers/Login/Login'
import { PersistGate } from 'redux-persist/integration/react'
class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor} >
            <Login />
          </PersistGate>
        </Provider>
      </div>
    )
  }
}

export default App