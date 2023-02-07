import { useState } from 'react';
import { Grid, Box } from "@mui/material";

import { SearchCharacter } from "./_components/SearchCharacter";
import { CharacterItem } from "./_components/CharacterItem";

import banner from "assets/rick_morty.png";
import { Pagination } from './_components/Pagination';
import { Loading } from 'components/Loading';
import { FilterByLocation } from './_components/FilterByLocation';
import { useCharactersData } from 'hooks';

export const CharactersPage = () => {
    const INITIAL_PAGE = 1;
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
    const [filteredIdsByLocation, setFilteredIdsByLocation] = useState<number[]>([]);

    const { charactersData, isLoading, charactersInfo } = useCharactersData(search, currentPage, filteredIdsByLocation);
    if (isLoading) return <Loading />

    return (
        <Box mb={10}>
            <Grid container justifyContent="center" alignItems="center" my={5}>
                <Grid item xs={10} md={5}>
                    <img alt="banner" src={banner} style={{ width: "100%" }} />
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <SearchCharacter setSearch={setSearch} hasFiltered={filteredIdsByLocation.length > 1} />
                <FilterByLocation setFilteredIdsByLocation={setFilteredIdsByLocation} />
            </Grid>

            <Grid container spacing={3}>
                {
                    charactersData && charactersData.map(character => (
                        <Grid item xs={12} md={3} key={character.id}>
                            <CharacterItem character={character} key={character.id} />
                        </Grid>
                    ))
                }
            </Grid>

            {filteredIdsByLocation?.length < 1 &&
                !isLoading &&
                (
                    <Pagination
                        setCurrentPage={setCurrentPage}
                        initialPage={INITIAL_PAGE}
                        currentPage={currentPage}
                        pages={charactersInfo?.info.pages}
                        search={!!search}
                    />
                )}
        </Box >
    )
}