import { ICharacter } from "app/services/api/characters";

export interface ICharacterProps {
    character: ICharacter;
}

export interface ISearchCharacterProps {
    setSearch: (value: string) => void;
}

export interface IPaginationProps {
    setCurrentPage: (value: number) => void;
    initialPage: number;
    currentPage: number;
    pages?: number;
    search?: boolean;
}