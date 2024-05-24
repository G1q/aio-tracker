import { useState } from 'react'
import './Auth.css'
import { FormControl, Input, InputLabel, FormHelperText } from '@mui/material'

const Login = () => {
    const [email, setEmail] = useState('')

    return (
        <>
            <FormControl fullWidth>
                <InputLabel htmlFor="email" variant="standard">Email</InputLabel>
                <Input
                    id="email"
                    aria-describedby="email-helper"
                    autoFocus
                    placeholder="Please enter your email"
                    required
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <FormHelperText id="email-helper" variant="standard">Ceva eroare de test</FormHelperText>
            </FormControl>
        </>
    )
}

export default Login
