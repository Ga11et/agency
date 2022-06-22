import { FC } from 'react';
import './App.css';
import { Header } from './features/templates/header/header';
import { Main } from './features/templates/main/main';

type AppPropsType = {
  
}
const App: FC<AppPropsType> = ({  }) => {
  return <>
    <Header />
    <Main />
  </>
}

export default App
