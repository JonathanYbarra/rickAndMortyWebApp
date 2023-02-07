import { ChangeEvent } from "react";

import { InputLabel, FormControl, InputAdornment, Grid, OutlinedInput } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import { ISearchCharacterProps } from "./Character.types";

export const SearchCharacter = ({ setSearch, hasFiltered }: ISearchCharacterProps) => {

    const onChangeSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setSearch(target.value);
    };
    return (
        <Grid item xs={12} md={3} mb={3}>
            <FormControl variant="outlined" color="secondary" fullWidth >
                <InputLabel htmlFor="search">Search by name</InputLabel>
                <OutlinedInput
                    id="search"
                    endAdornment={
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    }
                    onChange={onChangeSearch}
                    label="Search by name"
                    disabled={hasFiltered}
                />
            </FormControl>
        </Grid>
    )
}