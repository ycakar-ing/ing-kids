import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-orange/theme.css';
import { ChildDashboard, ChildDashboardTasks } from './child/ChildDashboard';
import { Button } from 'primereact/button';
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Goals } from './child/Goals';

const App = () => {

  const style = {
    padding: '20px'
  }

  return (
    <MemoryRouter>
      <AppHeader />
      <div style={style}>
        <Routes>
          <Route path="/" element={<ChildDashboard />} />
          <Route path="/tasks" element={<ChildDashboardTasks />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>
      </div>
      <AppFooter />
    </MemoryRouter>
  )
}


const AppHeader = () => {
  const style = {
    background: 'white',
    width: '100%',
    padding: '20px',
    top: '0',
  }
  return (
    <div style={style}>
      <Button icon="pi pi-user" rounded />
    </div>
  );
}


const AppFooter = () => {

  const naviate = useNavigate();

  const style = {
    background: 'white',
    width: '100%',
    position: 'fixed',
    bottom: '0',
    padding: '20px',
  }
  return (
    <div style={style}>
      <Button icon="pi pi-compass" rounded onClick={(e)=> {
         naviate('/goals');
      }}/>
    </div>
  );
}



export default App
