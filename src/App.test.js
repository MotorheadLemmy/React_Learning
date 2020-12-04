import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import MainApp from './App';

import App from './App';
import store from './redux/redux-store';


// test('renders learn react link', () => {
 
//   render(
//       <App /> 
//       );
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
  

// });
// test('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<BrowserRouter > <Provider store={store}> <App /> </Provider></BrowserRouter> , div);
//   ReactDOM.unmountComponentAtNode(div);
// });
