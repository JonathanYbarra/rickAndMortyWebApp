import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from "@testing-library/react";

import { CharactersPage } from "../CharactersPage";
import { SearchCharacter } from '../_components/SearchCharacter';
import { CharacterItem } from '../_components/CharacterItem';
// Router
import { BrowserRouter as Router } from "react-router-dom";
// MUI config
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'theme';
// Redux config
import { Provider } from "react-redux";
import { store } from "app/store";

describe("CharactersPage", () => {
    it("renders correctly", () => {
        const { asFragment } = render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Router>
                        <CharactersPage />
                    </Router>
                </ThemeProvider>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});


describe("SearchCharacter component", () => {
    it("renders without crashing", () => {
        const setSearch = jest.fn();
        const hasFiltered = false;
        render(<SearchCharacter setSearch={setSearch} hasFiltered={hasFiltered} />);
    });

    it("calls setSearch function when the input value changes", () => {
        const setSearch = jest.fn();
        const hasFiltered = false;
        const { getByLabelText } = render(
            <SearchCharacter setSearch={setSearch} hasFiltered={hasFiltered} />
        );
        const input = getByLabelText("Search by name");
        fireEvent.change(input, { target: { value: "test" } });
        expect(setSearch).toHaveBeenCalledWith("test");
    });

    it("disables the input if hasFiltered is true", () => {
        const setSearch = jest.fn();
        const hasFiltered = true;
        const { getByLabelText } = render(
            <SearchCharacter setSearch={setSearch} hasFiltered={hasFiltered} />
        );
        const input = getByLabelText("Search by name");
        expect(input).toHaveAttribute("disabled");
    });
});

describe('CharacterItem component', () => {
    const character = {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "episode": [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2",
            "https://rickandmortyapi.com/api/episode/3",
            "https://rickandmortyapi.com/api/episode/4",
            "https://rickandmortyapi.com/api/episode/5",
            "https://rickandmortyapi.com/api/episode/6",
            "https://rickandmortyapi.com/api/episode/7",
            "https://rickandmortyapi.com/api/episode/8",
            "https://rickandmortyapi.com/api/episode/9",
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/12",
            "https://rickandmortyapi.com/api/episode/13",
            "https://rickandmortyapi.com/api/episode/14",
            "https://rickandmortyapi.com/api/episode/15",
            "https://rickandmortyapi.com/api/episode/16",
            "https://rickandmortyapi.com/api/episode/17",
            "https://rickandmortyapi.com/api/episode/18",
            "https://rickandmortyapi.com/api/episode/19",
            "https://rickandmortyapi.com/api/episode/20",
            "https://rickandmortyapi.com/api/episode/21",
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/23",
            "https://rickandmortyapi.com/api/episode/24",
            "https://rickandmortyapi.com/api/episode/25",
            "https://rickandmortyapi.com/api/episode/26",
            "https://rickandmortyapi.com/api/episode/27",
            "https://rickandmortyapi.com/api/episode/28",
            "https://rickandmortyapi.com/api/episode/29",
            "https://rickandmortyapi.com/api/episode/30",
            "https://rickandmortyapi.com/api/episode/31",
            "https://rickandmortyapi.com/api/episode/32",
            "https://rickandmortyapi.com/api/episode/33",
            "https://rickandmortyapi.com/api/episode/34",
            "https://rickandmortyapi.com/api/episode/35",
            "https://rickandmortyapi.com/api/episode/36",
            "https://rickandmortyapi.com/api/episode/37",
            "https://rickandmortyapi.com/api/episode/38",
            "https://rickandmortyapi.com/api/episode/39",
            "https://rickandmortyapi.com/api/episode/40",
            "https://rickandmortyapi.com/api/episode/41",
            "https://rickandmortyapi.com/api/episode/42",
            "https://rickandmortyapi.com/api/episode/43",
            "https://rickandmortyapi.com/api/episode/44",
            "https://rickandmortyapi.com/api/episode/45",
            "https://rickandmortyapi.com/api/episode/46",
            "https://rickandmortyapi.com/api/episode/47",
            "https://rickandmortyapi.com/api/episode/48",
            "https://rickandmortyapi.com/api/episode/49",
            "https://rickandmortyapi.com/api/episode/50",
            "https://rickandmortyapi.com/api/episode/51"
        ],
        "url": "https://rickandmortyapi.com/api/character/1",
        "created": "2017-11-04T18:48:46.250Z"
    };

    const CharacterItemComponent = (<Provider store={store}>
        <Router>
            <CharacterItem character={character} />
        </Router>
    </Provider>)

    it('Should render the character name', () => {
        const { getByText } = render(CharacterItemComponent);
        expect(getByText('Rick Sanchez')).toBeInTheDocument();
    });

    it('Should render a button to learn more about the character', () => {
        const { getByText } = render(CharacterItemComponent);
        expect(getByText('Learn More')).toBeInTheDocument();
    });

    it('Should render the character location', () => {
        const { getByText } = render(CharacterItemComponent);
        expect(getByText('Citadel of Ricks')).toBeInTheDocument();
    });

    it('Should render the character species', () => {
        const { getByText } = render(CharacterItemComponent);
        expect(getByText('Human')).toBeInTheDocument();
      });
})



