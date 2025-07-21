import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Bookmarks from './components/Bookmarks';
import UserList from './components/userList';
import UserProfile from './pages/user';
import { useUserStore } from './store/userStore';
import { useEffect } from 'react';
import Analytic from './pages/analytic';


function App() {
  const { fetchUsers } = useUserStore();

  useEffect(() => {
      fetchUsers();
    }, [fetchUsers])
  


  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/bookmarks" element={<Bookmarks />} />
      <Route path="/employee" element={<UserProfile />} />
      <Route path="/analytics" element={<Analytic/>} />
    </Routes>
  )
}

export default App
