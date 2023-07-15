// import React from "react";
// import {Routes, Route, Navigate } from "react-router-dom";
// import '@fontsource/roboto/300.css'
// import '@fontsource/roboto/400.css'
// import '@fontsource/roboto/500.css'
// import '@fontsource/roboto/700.css'
// //COMPONENTS
// import Board from "../apps/profile/components/Board";
// import Home from '../apps/profile/components/Home'
// import { ThemeProvider, createTheme } from '@mui/material/styles'
// import CssBaseLine from '@mui/material/CssBaseline'
// import AppLayout from '../components/layout/AppLayout'

// const PrivateRoutes = () => {
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
//           <Routes element={<AppLayout />}>
//             <Route path='/' element={<Navigate to="home" />} />
//             {/* <Route index element={<Home />} /> */}
//             <Route path="home" element={<Home />}></Route>
//             <Route path='boards' element={<Board />}></Route>
//             <Route path='boards/:boardId' element={<Board />}></Route>
//           </Routes>
//       </ThemeProvider>
//     )
// }

// export default PrivateRoutes