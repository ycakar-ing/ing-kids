import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-orange/theme.css';
import { ChildDashboard, ChildDashboardTasks, Empty } from './child/ChildDashboard';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AppHeader, AppFooter } from './common/Main';

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
          <Route path="/empty" element={<Empty />} />
        </Routes>
      </div>
      <AppFooter />
    </MemoryRouter>
  )
}






export default App
