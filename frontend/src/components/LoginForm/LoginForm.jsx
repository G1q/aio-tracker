import { useState } from 'react'
import { TextField, Button, Container, Typography, Box, InputAdornment, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        email: false,
        password: false
    })

    const [showPassword, setShowPassword] = useState(false);

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

        // Validate password
        if (name === 'password') {
            setErrors({
                ...errors,
                password: value.length < 8 && 'Password must have at least 8 characters'
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (errors.email || errors.password) return

        // Aici poți adăuga logica pentru trimiterea datelor formularului
        console.log(formData)
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container maxWidth="xs">
            <Box sx={{ my: 4 }}>
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                >
                    Welcome back
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
                        type={showPassword ? 'text' : 'password'}
                        variant="outlined"
                        fullWidth
                        required
                        margin="normal"
                        value={formData.password}
                        onChange={handleChange}
                        helperText={errors.password}
                        FormHelperTextProps={{
                            variant: 'standard',
                            sx: {
                                color: errors.password ? 'error.main' : 'text.secondary',
                            },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                        fullWidth
                    >
                        Login
                    </Button>
                </form>
            </Box>
        </Container>
    )
}

export default LoginForm
