// import {useContext, useState} from 'react'
// import { useNavigate } from 'react-router-dom'
// // CONTEXT
// import FirebaseContext from '../../../context/FirebaseContext'
// // STYLE
// import styles from '../styles/register.module.css'

// const Register = () => {
//     const navigate = useNavigate()
//     const {register} = useContext(FirebaseContext)
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     return (
//         <div className={styles.register_container}>
//             {/* BANNER */}
//             <div className={styles.inner_container}>
//                 <div className={styles.banner_container}>
//                     <h2>Already Have an Account?</h2>
//                     <p>Sign in and catch up with your team</p>
//                     <button className={[styles.login_btn, styles.btn].join(' ')} onClick = {(e) => { 
//                         e.preventDefault()
//                         navigate('/auth/login')
//                     }} >Login</button>
//                 </div>
//                 {/* FORM */}
//                 <form onSubmit={register}>
//                     <h2>Register Your Account</h2>
//                     {/* SOCIAL BUTTONS */}
//                     <div className={styles.social_login_container}>
//                         <p>Register using social networks</p>
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
//                         <input type='email' name='user_email' placeholder={'Email'}
//                         onChange={(e) => setEmail(e.target.value)} />
//                     </div>
//                     <div className={styles.form_control}>
//                         <input type='password' name='user_password' placeholder={'Password'}
//                         onChange={(e) => setPassword(e.target.value)} />
//                     </div>
//                     {/* BUTTON */}
//                     <button className={[styles.register_btn, styles.btn].join(' ')}
//                     onClick = {(e) => {
//                         e.preventDefault()
//                         register(email, password)
//                     }}
//                     type='submit'>Register</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Register

import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoadingButton from '@mui/lab/LoadingButton'
import authApi from '../../../api/authApi'

const Register = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [usernameErrText, setUsernameErrText] = useState('')
  const [passwordErrText, setPasswordErrText] = useState('')
  const [confirmPasswordErrText, setConfirmPasswordErrText] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setUsernameErrText('')
    setPasswordErrText('')
    setConfirmPasswordErrText('')

    const data = new FormData(e.target)
    const username = data.get('username').trim()
    const password = data.get('password').trim()
    const confirmPassword = data.get('confirmPassword').trim()

    let err = false

    if (username === '') {
      err = true
      setUsernameErrText('Please fill this field')
    }
    if (password === '') {
      err = true
      setPasswordErrText('Please fill this field')
    }
    if (confirmPassword === '') {
      err = true
      setConfirmPasswordErrText('Please fill this field')
    }
    if (password !== confirmPassword) {
      err = true
      setConfirmPasswordErrText('Confirm password not match')
    }

    if (err) return

    setLoading(true)

    try {
      const res = await authApi.register({
        username, password, confirmPassword
      })
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
        if (e.param === 'confirmPassword') {
          setConfirmPasswordErrText(e.msg)
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
        <TextField
          margin='normal'
          required
          fullWidth
          id='confirmPassword'
          label='Confirm Password'
          name='confirmPassword'
          type='password'
          disabled={loading}
          error={confirmPasswordErrText !== ''}
          helperText={confirmPasswordErrText}
        />
        <LoadingButton
          sx={{ mt: 3, mb: 2 }}
          variant='outlined'
          fullWidth
          color='success'
          type='submit'
          loading={loading}
        >
          Signup
        </LoadingButton>
      </Box>
      <Button
        component={Link}
        to='/login'
        sx={{ textTransform: 'none' }}
      >
        Already have an account? Login
      </Button>
    </>
  )
}

export default Register