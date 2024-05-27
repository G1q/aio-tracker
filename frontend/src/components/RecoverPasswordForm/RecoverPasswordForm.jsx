import { useState } from 'react'
import { TextField, Button, Container, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'

const RecoverPasswordForm = () => {
    const [formData, setFormData] = useState({
        email: ''
    })

    const [errors, setErrors] = useState({
        email: false
    })


    const handleChange = (e) => {
        const { value, name } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })

        // Validate email
        if (name === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

            setErrors({
                ...errors,
                email: !emailPattern.test(value) && 'Invalid email',
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (errors.email) return

        // TODO: send to recover 
        // TODO: check for email exist 
        console.log(formData)
    }

    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4, p: 4, borderRadius: '10px', backgroundColor: 'white', color: '#131313', boxShadow: '0 0 0 2px rgba(0,0,0,.15)' }}>
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                >
                    Forgot Password
                </Typography>
                <Typography variant="subtitle1">
                    Enter your email and we will send you a link to reset your password.
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        helperText={errors.email}
                        FormHelperTextProps={{
                            variant: 'standard',
                            sx: {
                                color: errors.email ? 'error.main' : 'text.secondary',
                            },
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                        fullWidth
                    >
                        Reset password
                    </Button>
                </form>
                <p>
                    <Link to='/login'>Back to login page</Link>
                </p>
            </Box>
        </Container>
    )
}

export default RecoverPasswordForm
