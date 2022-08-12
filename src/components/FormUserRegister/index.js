import {
    Button, 
    Box, 
    Grid, 
    Link, 
    TextField
} from "@mui/material";
const FormUserRegister = ({handleInputChange, handleSubmit}) => {
    return (
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="given-name"
                        name="firstname"
                        required
                        fullWidth
                        id="firstname"
                        label="First Name"
                        autoFocus
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="apellido"
                        label="Last Name"
                        name="apellido"
                        autoComplete="family-name"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="given-name"
                        name="celular"
                        required
                        fullWidth
                        id="celular"
                        label="celular"
                        autoFocus
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="profesion"
                        label="Profesion"
                        name="profesion"
                        autoComplete="family-name"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="correo"
                        label="correo"
                        name="correo"
                        autoComplete="email"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="contrasena"
                        label="Password"
                        type="password"
                        id="contrasena"
                        autoComplete="new-password"
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Link href="#" variant="body2">
                        Already have an account? Sign in
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}
export default FormUserRegister;

