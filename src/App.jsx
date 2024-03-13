import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-orange/theme.css';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AppHeader, AppFooter } from './common/Main';
import { Tasks } from './tasks/Tasks';
import { Goals } from './goals/Goals';
import { Profile } from './profile/Profile';
import { Notifications } from './notifications/Notifications';
import { Dashboard } from './dashboard/Dashboard';

const App = () => {

  const style = {
    padding: '20px'
  }

  return (
    <MemoryRouter>
      <AppHeader />
      <div style={style}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
      <AppFooter />
    </MemoryRouter>
  )
}






export default App
