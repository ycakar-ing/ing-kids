import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-orange/theme.css';
import { ChildDashboard, ChildDashboardTasks } from './child/ChildDashboard';
import { Button } from 'primereact/button';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

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
  const style = {
    background: 'white',
    width: '100%',
    position: 'fixed',
    bottom: '0',
    padding: '20px',
  }
  return (
    <div style={style}>
      App Footer
    </div>
  );
}



export default App
