// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import '@fontsource/roboto/300.css'
// import '@fontsource/roboto/400.css'
// import '@fontsource/roboto/500.css'
// import '@fontsource/roboto/700.css'
// //COMPONENTS
// import Login from "../apps/auth/components/Login";
// import Register from "../apps/auth/components/Register";
// import AuthLayout from '../components/layout/AuthLayout';
// import CssBaseLine from '@mui/material/CssBaseline'
// import { ThemeProvider, createTheme } from '@mui/material/styles'

// const PublicRoutes = () => {
//   const theme = createTheme({
//     palette: {
//       primary:{
//         main: '#c78aed'
//       },
//       secondary:{
//         main: '#f2e3fa'
//       }}
//   });
//     return (
//       <ThemeProvider theme={theme}>
//         <CssBaseLine />
//         <Routes element = {<AuthLayout />}>
//           <Route path="/" element={<Navigate to="login" />}></Route>
//          {/* <Route path="/" element={<AuthLayout />}></Route> */}
//           <Route path="login" element={<Login />}></Route>
//           <Route path="register" element={<Register />}></Route>
//         </Routes>
//       </ThemeProvider>
//     )
// }

// export default PublicRoutes