import { useState } from 'react';
import { Grid, Box } from "@mui/material";

import { SearchCharacter } from "./_components/SearchCharacter";
import { CharacterItem } from "./_components/CharacterItem";

import { useGetCharactersQuery } from "app/services/api";
import banner from "assets/rick_morty.png";
import { Pagination } from './_components/Pagination';
import { Loading } from 'components/Loading';


export const CharactersPage = () => {
    const INITIAL_PAGE = 1;
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
    const { data: characters, isLoading } = useGetCharactersQuery({ name: search, page: currentPage });

    if (isLoading) return <Loading />

    return (
        <Box mb={10}>
            <Grid container justifyContent="center" alignItems="center" my={5}>
                <Grid item xs={10} md={5}>
                    <img alt="banner" src={banner} style={{ width: "100%" }} />
                </Grid>
            </Grid>

            <SearchCharacter setSearch={setSearch} />

            <Grid container spacing={3}>
                {
                    characters?.results.map(character => (
                        <Grid item xs={12} md={3} key={character.id}>
                            <CharacterItem character={character} key={character.id} />
                        </Grid>
                    ))
                }
            </Grid>

            <Pagination
                setCurrentPage={setCurrentPage}
                initialPage={INITIAL_PAGE}
                currentPage={currentPage}
                pages={characters?.info.pages}
                search={!!search}
            />
        </Box >
    )
}