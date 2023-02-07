import { ChangeEvent } from "react";

import { InputLabel, FormControl, InputAdornment, Box, OutlinedInput } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import { ISearchCharacterProps } from "./Character.types";

export const SearchCharacter = ({ setSearch }: ISearchCharacterProps) => {

    const onChangeSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setSearch(target.value);
    };
    return (
        <Box mb={3}>
            <FormControl variant="outlined" color="secondary">
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
                />
            </FormControl>
        </Box>
    )
}