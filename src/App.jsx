import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-orange/theme.css';

import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { AppHeader, AppFooter, ParentAppFooter } from './common/Main';
import { Tasks } from './tasks/Tasks';
import { Goals } from './goals/Goals';
import { Profile } from './profile/Profile';
import { Notifications } from './notifications/Notifications';
import { Login } from './login/Login';
import { useState } from 'react';
import { Dashboard } from './dashboard/Dashboard';

import './App.css';

export const HEADER_MODE_MAIN = 'HEADER_MODE_MAIN';
export const HEADER_MODE_DEEP = 'HEADER_MODE_DEEP';

const App = () => {
  const [login, setLogin] = useState(false);
  const [isParent, setIsParent] = useState(true);
  const [headerMode, setHeaderMode] = useState(HEADER_MODE_MAIN)

  const style = {
    padding: '20px'
  }

  const afterLogin = (isParent) => {
    setLogin(true);
    setIsParent(isParent);
  }

  let app = null

  if (login) {
    app = <>
      <AppHeader headerMode={headerMode} setLogin={setLogin} />
      <div style={style}>
        <Routes>
          <Route path="/" element={<Login afterLogin={afterLogin} setHeaderMode={setHeaderMode} />} />
          <Route path="/dashboard" element={<Dashboard isParent={isParent} setHeaderMode={setHeaderMode} />} />
          <Route path="/tasks" element={<Tasks isParent={isParent} />} />
          <Route path="/goals" element={<Goals isParent={isParent} />} />
          <Route path="/profile" element={<Profile setHeaderMode={setHeaderMode} />} />
          <Route path="/notifications" element={<Notifications setHeaderMode={setHeaderMode} />} />
        </Routes>
      </div>
      <AppFooter />
    </>
  } else {
    app = <Routes>
      <Route path="/" element={<Login afterLogin={afterLogin}  setHeaderMode={setHeaderMode}/>} />
    </Routes>;
  }


  return (
    <MemoryRouter>
      {app}
    </MemoryRouter>
  )
}



export default App
