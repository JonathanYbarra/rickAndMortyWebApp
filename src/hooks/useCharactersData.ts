import { useState, useEffect } from 'react';
import { ICharacter, ICharacters, useGetCharactersQuery, useGetMultipleCharactersQuery } from "app/services/api";


export const useCharactersData = (search: string, currentPage: number, filteredIdsByLocation: number[]) => {
    const [charactersData, setCharactersData] = useState<ICharacter[]>();
    const [charactersInfo, setCharactersInfo] = useState<ICharacters>();

    const { data: characters, isLoading } = useGetCharactersQuery({ name: search, page: currentPage });
    const { data: multiplescharacters } = useGetMultipleCharactersQuery(filteredIdsByLocation || [],
        {
            skip: !filteredIdsByLocation || filteredIdsByLocation.length <= 1
        })

    useEffect(() => {
        setCharactersData(multiplescharacters ? Array.isArray(multiplescharacters) ? multiplescharacters : [multiplescharacters] : characters?.results);
    }, [multiplescharacters, characters]);

    useEffect(() => {
        filteredIdsByLocation?.length === 0 && setCharactersInfo(characters);
    }, [multiplescharacters, characters, filteredIdsByLocation]);

    return { charactersData, isLoading, charactersInfo };
};
