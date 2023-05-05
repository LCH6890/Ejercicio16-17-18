import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { HomePage } from './home/HomePage';
import { NotFoundPage } from './Pages/NotFoundPage';
import { AboutPage } from './Pages/AboutPage';
import { ProfilePage } from './Pages/ProfilePage';
import { TasksPage } from './tasks/TasksPage';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
//import { LoginFormik } from './components/LoginFormik';
//import { RegisterFormik } from '../src/components/RegisterFormik';
import  Taskdashboard   from './Pages/TaskDashboard';

function AppRouter1() {
  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>|| HOME |</Link>
          <Link to='/faqs'>| ABOUT & FAQs |</Link>
          <Link to='/profile'>| PROFILE |</Link>
          <Link to='/any404'>| Not Existing Route||</Link>
          <Link to='/login'>| LOGIN |</Link>
          <Link to='/register'>| REGISTER |</Link>
        </aside>

        <main>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/faqs' element={<AboutPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/tasks' element={<TasksPage />} />
            <Route path="/dashboard" element={<Taskdashboard />} />
            <Route path="*" element={<NotFoundPage  />} />

          </Routes>          
        </main>
      </div>

    </Router>
  );
}

export default AppRouter1;
