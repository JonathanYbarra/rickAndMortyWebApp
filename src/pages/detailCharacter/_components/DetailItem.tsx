import { Typography } from '@mui/material';
import { Grid, Divider } from '@mui/material';

export const DetailItem = ({ label, description }: any) => {
    return (
        <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>{label}</Typography>
            <Typography mb={1}>{description}</Typography>
            <Divider/>
        </Grid>
    );
}