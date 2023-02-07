import { useState, useCallback, useEffect } from 'react';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Grid, FormControl, MenuItem, InputLabel, Box, IconButton } from '@mui/material';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';

import { useGetLocationsQuery } from "app/services/api/location/LocationApi"

export const FilterByLocation = ({ setFilteredIdsByLocation }: any) => {
    const { data: locations } = useGetLocationsQuery();
    const [locationSelected, setLocationSelected] = useState('');

    useEffect(() => {
        charactersByLocationId();
    }, [locationSelected])

    const handleChange = (event: SelectChangeEvent) => {
        setLocationSelected(event.target.value as string);
    };

    const charactersByLocationId = useCallback(() => {
        const findLocation = locations?.results.find(location => location.id === +locationSelected);
        const residents = findLocation?.residents.map(resident => {
            return resident.split("/").pop()
        })
        residents && setFilteredIdsByLocation(residents);
    }, [locationSelected, locations]);

    const clearFiltres = () => {
        setFilteredIdsByLocation([]);
        setLocationSelected("");
    }

    return (
        <>
            <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                    <InputLabel id="locations" color="secondary">Locations</InputLabel>
                    <Select
                        labelId="locations"
                        id="locations-select"
                        value={locationSelected}
                        label="Locations"
                        onChange={handleChange}
                        color="secondary"
                    >
                        {
                            locations?.results.map(location => (
                                <MenuItem value={location.id} key={location.id}>{location.name}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <Box>
                    {locationSelected && (
                        <IconButton aria-label="FilterAltOff" color="secondary" size='large' onClick={clearFiltres}>
                            <FilterAltOffIcon fontSize='large' />
                        </IconButton>
                    )}
                </Box>
            </Grid>
        </>
    )
}