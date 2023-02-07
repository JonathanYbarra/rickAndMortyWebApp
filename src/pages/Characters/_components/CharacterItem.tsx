import { Avatar, Card, CardContent, Typography, CardActions, Button, Box, Grid } from "@mui/material"
import { ICharacterProps } from "./Character.types"
import { useNavigate } from 'react-router-dom';
import { CHARACTER } from "router";
import { LikedButton } from "pages/detailCharacter/_components/LikedButton";

export const CharacterItem = ({ character }: ICharacterProps) => {
    const navigate = useNavigate();
    return (
        <Card sx={{ minHeight: 370 }}>
            <CardContent>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Avatar src={character.image} alt={character.name} sx={{ width: 200, height: 200 }} />
                </Box>

                <Typography variant="h5" component="div">
                    {character.name}
                </Typography>
                <Typography color="text.secondary">
                    {character.species}
                </Typography>

                <Typography color="text.secondary">
                    {character.location.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Grid container justifyContent="space-between">
                    <Button size="small" color="secondary" onClick={() => navigate(`${CHARACTER}/${character.id}`)}>Learn More</Button>
                    <LikedButton id={character.id} />
                </Grid>
            </CardActions>
        </Card>
    )
}