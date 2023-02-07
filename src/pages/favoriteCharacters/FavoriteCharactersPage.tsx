import { useGetMultipleCharactersQuery } from "app/services/api"
import { useAppSelector } from "app/hooks";
import { selectCharactedLiker } from "slices";
import { Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Grid } from '@mui/material';
import { Loading } from "components/Loading";

export const FavoriteCharactersPage = () => {

    const charactedLiked = useAppSelector(selectCharactedLiker);
    const { data: charcters, isLoading } = useGetMultipleCharactersQuery(charactedLiked);

    if (isLoading) return <Loading />

    return (
        <>
            <Typography variant="h1" textAlign="center" mt={4}>Your favorite characters!</Typography>
            {charactedLiked.length === 0 && (
                <Typography variant="h5" textAlign="center" mt={4} color="color.muted">You don't have favorite characters yet</Typography>
            )}

            {charactedLiked.length > 0 && charcters && (
                <Grid container justifyContent="center" mt={5}>
                    <Grid item xs={12} md={6}>
                        <List>
                            {charcters.map(character => (
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar src={character.image}/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={character.name}
                                        secondary={character.gender}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
            )}
        </>
    )
}