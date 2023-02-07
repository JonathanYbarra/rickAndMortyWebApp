import { Avatar, Card, CardContent, Typography, CardActions, Button, Box } from "@mui/material"
import { ICharacterProps } from "./Character.types"

export const CharacterItem = ({ character }: ICharacterProps) => {
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
            </CardContent>
            <CardActions>
                <Button size="small" color="secondary">Learn More</Button>
            </CardActions>
        </Card>
    )
}