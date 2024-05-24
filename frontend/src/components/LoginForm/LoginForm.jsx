import { useState } from 'react'
import { TextField, Button, Container, Typography, Box } from '@mui/material'

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        email: false,
    })

    const handleChange = (e) => {
        const { value, name } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })

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
        // Aici poți adăuga logica pentru trimiterea datelor formularului
        console.log(formData)
    }

    return (
        <Container maxWidth="xs">
            <Box sx={{ my: 4 }}>
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                >
                    Login
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
                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        required
                        margin="normal"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                    >
                        Login
                    </Button>
                </form>
            </Box>
        </Container>
    )
}

export default LoginForm
