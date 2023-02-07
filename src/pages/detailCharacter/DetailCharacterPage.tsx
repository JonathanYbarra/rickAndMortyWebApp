import { useGetCharacterQuery } from "app/services/api";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar, Typography, Button, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { DetailItem } from "./_components/DetailItem";
import { CHARACTERS } from 'router';
import { Loading } from "components/Loading";
import { LikedButton } from "./_components/LikedButton";

export const DetailCharacterPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const { data: detailCharacter, isLoading } = useGetCharacterQuery(id!);

    if (isLoading) return <Loading />;

    return (
        <>
            <Button
                color="secondary"
                startIcon={<ArrowBackIcon />}
                sx={{ mt: 3 }}
                onClick={() => navigate(CHARACTERS)}
            >
                Go back
            </Button>

            <Grid container justifyContent="center">
                <Avatar alt={detailCharacter?.name} src={detailCharacter?.image} sx={{ width: 350, height: 350 }} />
            </Grid>

            <Typography my={2} variant="h1" textAlign="center">
                {detailCharacter?.name}
                <LikedButton id={+id!} />
            </Typography>

            <Typography my={3} variant="h4" color="text.secondary">
                Informations
            </Typography>

            <Grid container spacing={3} mb={5}>
                <DetailItem label="Status" description={detailCharacter?.status} />
                <DetailItem label="Specie" description={detailCharacter?.species} />
                <DetailItem label="Origin" description={detailCharacter?.origin.name} />
                <DetailItem label="Location" description={detailCharacter?.location.name} />
            </Grid>
        </>
    )
}