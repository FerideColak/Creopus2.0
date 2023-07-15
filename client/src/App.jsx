// import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
// import { useContext } from 'react';
// //CONTEXT
// import FirebaseContext from './context/FirebaseContext';
// //Routes
// import PrivateRoutes from './routes/PrivateRoutes';
// import PublicRoutes from './routes/PublicRoutes';

// function App() {
//   const {accessToken} = useContext(FirebaseContext);
//   if(!accessToken){ 
//     return (
//       <Router>
//         <Routes>
//           <Route path="/*" element={<Navigate to="auth" />}></Route>
//           <Route path="auth/*" element={<PublicRoutes />}></Route>
//         </Routes>
//       </Router>
//     );
//   }else{
//     return (
//       <Router>
//         <Routes>
//           {/* <Route path='/*' element={<Navigate to="profile" />}></Route>
//           <Route path='profile/*' element={<PrivateRoutes />}></Route> */}
//           <Route path='/*' element={<PrivateRoutes />}></Route>
          
//         </Routes>
//       </Router>
//     )
//   } 
// }

// export default App;

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './css/custom-scrollbar.css'
import CssBaseLine from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import AuthLayout from './components/layout/AuthLayout'
import Home from './apps/profile/components/Home'
import Board from './apps/profile/components/Board'
import Register from './apps/auth/components/Register'
import Login from './apps/auth/components/Login'

function App() {
  const theme = createTheme({
    // palette: { mode: 'dark' }
    palette: {
      primary:{
        main: '#c78aed'
      },
      secondary:{
        main: '#f2e3fa'
      }}
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthLayout />}>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path='boards' element={<Home />} />
            <Route path='boards/:boardId' element={<Board />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
