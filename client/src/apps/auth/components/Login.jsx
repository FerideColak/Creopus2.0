// import {useContext, useState} from 'react'
// import {Link, useNavigate } from 'react-router-dom'
// import LoadingButton from '@mui/lab/LoadingButton'
// import authApi from '../../../api/authApi'
// // CONTEXT
// import FirebaseContext from '../../../context/FirebaseContext'
// // STYLE
// import styles from '../styles/login.module.css'

// const Login = () => {
    
//     const navigate = useNavigate()
//     const [loading, setLoading] = useState(false)
//     const {login} = useContext(FirebaseContext)
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [emailErrText, setEmailErrText] = useState('')
//     const [passwordErrText, setPasswordErrText] = useState('')

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         setEmailErrText('')
//         setPasswordErrText('')
    
//         const data = new FormData(e.target)
//         const email = data.get('email').trim()
//         const password = data.get('password').trim()
    
//         let err = false
    
//         if (email === '') {
//           err = true
//           setEmailErrText('Please fill this field')
//         }
//         if (password === '') {
//           err = true
//           setPasswordErrText('Please fill this field')
//         }
    
//         if (err) return
    
//         setLoading(true)
    
//         try {
//           const res = await authApi.login({ email, password })
//           setLoading(false)
//           localStorage.setItem('token', res.token)
//           navigate('/')
//         } catch (err) {
//           const errors = err.data.errors
//           errors.forEach(e => {
//             if (e.param === 'email') {
//                 setEmailErrText(e.msg)
//             }
//             if (e.param === 'password') {
//               setPasswordErrText(e.msg)
//             }
//           })
//           setLoading(false)
//         }
//       }

//     return (
//        <div className={styles.login_container}>
//             {/* BANNER */}
//             <div className={styles.inner_container}>
//                 <div className={styles.banner_container}>
//                 {/* FORM */}
//                 <form onSubmit={handleSubmit}>
//                     <h2>Sign In to Your Account</h2>
//                     {/* SOCIAL BUTTONS */}
//                     <div className={styles.social_login_container}>
//                         <p>Sign in using social networks</p>
//                         <div className={styles.social_login_buttons}>
                            
//                             <button>
//                                 <i className='fa-brands fa-google'></i>
//                             </button>
//                             <button>
//                                 <i className = 'fab fa-facebook-f'></i>
//                             </button>
//                             <button>
//                                 <i className='fa-brands fa-twitter'></i>
//                             </button>
//                         </div>
//                     </div>
//                     {/* SEPERATOR */}
//                     <div className={styles.seperator}>
//                         <div className={styles.line}></div>
//                         <p>or</p>
//                         <div className={styles.line}></div>
//                     </div>
//                     <div className={styles.form_control}>
//                         <input type='email'name='email' placeholder={'Email'}
//                         value = {email} 
//                         onChange={(e) => setEmail(e.target.value)} />
//                     </div>
//                     <div className={styles.form_control}>
//                         <input type='password' name='password' placeholder={'Password'}
//                         value = {password} 
//                         onChange={(e) => setPassword(e.target.value)} />
//                     </div>
//                     {/* BUTTON */}
//                     <button className={[styles.login_btn, styles.btn].join(' ')}
//                             onClick = {(e) => {
//                                 e.preventDefault()
//                                 login(email, password)
//                             }}
//                             type='submit'>Login</button>
//                 </form>
//                 </div>
//             </div>
//        </div>
//     )
// }

// export default Login

import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoadingButton from '@mui/lab/LoadingButton'
import authApi from '../../../api/authApi'

const Login = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [usernameErrText, setUsernameErrText] = useState('')
  const [passwordErrText, setPasswordErrText] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setUsernameErrText('')
    setPasswordErrText('')

    const data = new FormData(e.target)
    const username = data.get('username').trim()
    const password = data.get('password').trim()

    let err = false

    if (username === '') {
      err = true
      setUsernameErrText('Please fill this field')
    }
    if (password === '') {
      err = true
      setPasswordErrText('Please fill this field')
    }

    if (err) return

    setLoading(true)

    try {
      const res = await authApi.login({ username, password })
      setLoading(false)
      localStorage.setItem('token', res.token)
      navigate('/')
    } catch (err) {
      const errors = err.data.errors
      errors.forEach(e => {
        if (e.param === 'username') {
          setUsernameErrText(e.msg)
        }
        if (e.param === 'password') {
          setPasswordErrText(e.msg)
        }
      })
      setLoading(false)
    }
  }

  return (
    <>
      <Box
        component='form'
        sx={{ mt: 1 }}
        onSubmit={handleSubmit}
        noValidate
      >
        <TextField
          margin='normal'
          required
          fullWidth
          id='username'
          label='Username'
          name='username'
          disabled={loading}
          error={usernameErrText !== ''}
          helperText={usernameErrText}
        />
        <TextField
          margin='normal'
          required
          fullWidth
          id='password'
          label='Password'
          name='password'
          type='password'
          disabled={loading}
          error={passwordErrText !== ''}
          helperText={passwordErrText}
        />
        <LoadingButton
          sx={{ mt: 3, mb: 2 }}
          variant='outlined'
          fullWidth
          color='success'
          type='submit'
          loading={loading}
        >
          Login
        </LoadingButton>
      </Box>
      <Button
        component={Link}
        to='/register'
        sx={{ textTransform: 'none' }}
      >
        Don't have an account? Signup
      </Button>
    </>
  )
}

export default Login