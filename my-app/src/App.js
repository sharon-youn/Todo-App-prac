import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {increase, decrease} from "./index.js";
import styled from 'styled-components';

const ChangeButton = styled.button`
  display: inline-flex;

  justify-content: center;
  align-items: center;
  background-color: pink;
  width: 50px;
  height: 50px;
  margin-top: 30px;
  font-size: 30px;

`

function App() {

  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  const plusNum = () => {
    dispatch(increase());
  }
  
  const minusNum = () => {
    dispatch(decrease());
  }



  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{`Count : ${state}`}</h1>
        <ChangeButton className='plusBtn' onClick={plusNum}>
          +
        </ChangeButton>
        <ChangeButton className='minusBtn' onClick={minusNum}>
          -
        </ChangeButton>
     
      </div>
   
   
    </div>
  );
}

export default App;
