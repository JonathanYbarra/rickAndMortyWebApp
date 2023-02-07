import { Navbar } from "components/Appbar";
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

export const App = () => {
    
    return (
        <>
            <Navbar />
            <Container maxWidth="xl">
                <Outlet />
            </Container>
        </>
    );
}
