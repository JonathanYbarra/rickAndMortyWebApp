import logo from "assets/logo-rick-and-morty.png";
import { useNavigate } from "react-router-dom";
import { Avatar, Link } from '@mui/material';
import { CHARACTERS } from 'router';

export const BarLogo = () => {
    const navigate = useNavigate();
    return (
        <Link
            component="button"
            underline="none"
            color="inherit"
            onClick={() => navigate(CHARACTERS)}
        >
            <Avatar alt="Logo" src={logo} />
        </Link>
    )
}