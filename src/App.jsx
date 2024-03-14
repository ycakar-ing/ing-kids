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
import { ParentDashboard, ChildDashboard, Dashboard } from './dashboard/Dashboard';

const App = () => {
  const [login, setLogin] = useState(false);
  const [isParent,setIsParent] = useState(true);

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
      <AppHeader />
      <div style={style}>
        <Routes>
          <Route path="/" element={<Login afterLogin={afterLogin} />} />
          <Route path="/dashboard" element={<Dashboard isParent={isParent} />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/profile" element={<Profile isParent={isParent} />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
      <AppFooter />
    </>
  } else {
    app = <Routes>
      <Route path="/" element={<Login afterLogin={afterLogin} />} />
    </Routes>;
  }


  return (
    <MemoryRouter>
      {app}
    </MemoryRouter>
  )
}






export default App
