import { FavoriteCharactersPage } from "../FavoriteCharactersPage";
import { render, screen } from "@testing-library/react";
import { useGetMultipleCharactersQuery } from "app/services/api";
import { useAppSelector } from "app/hooks";

// Router
import { BrowserRouter as Router } from "react-router-dom";
// MUI config
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'theme';
// Redux config
import { Provider } from "react-redux";
import { store } from "app/store";

describe("FavoriteCharactersPage", () => {
    it("renders correctly", () => {
        const { asFragment } = render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Router>
                        <FavoriteCharactersPage />
                    </Router>
                </ThemeProvider>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

jest.mock("app/services/api", () => ({
    useGetMultipleCharactersQuery: jest.fn()
}));

jest.mock("app/hooks", () => ({
    useAppSelector: jest.fn()
}));

describe("FavoriteCharactersPage", () => {
    it("should render title 'Your favorite characters!'", () => {
        const { getByText } = render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Router>
                        <FavoriteCharactersPage />
                    </Router>
                </ThemeProvider>
            </Provider>
        );
        expect(getByText("Your favorite characters!")).toBeInTheDocument();
    });

    it("should show a message 'You don't have favorite characters yet' if there are no favorite characters", () => {
        (useAppSelector as jest.Mock).mockReturnValue([]);
        const { getByText } = render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Router>
                        <FavoriteCharactersPage />
                    </Router>
                </ThemeProvider>
            </Provider>
        );
        expect(getByText("You don't have favorite characters yet")).toBeInTheDocument();
    });

    it("should show characters if there are favorite characters", () => {
        (useAppSelector as jest.Mock).mockReturnValue([1, 2, 3]);
        (useGetMultipleCharactersQuery as jest.Mock).mockReturnValue({
            data: [{ id: 1, name: "Rick", gender: "male", image: "image1" }, { id: 2, name: "Morty", gender: "male", image: "image2" }],
            isLoading: false
        });
        const { getByText } = render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Router>
                        <FavoriteCharactersPage />
                    </Router>
                </ThemeProvider>
            </Provider>
        );
        expect(getByText("Rick")).toBeInTheDocument();
        expect(getByText("Morty")).toBeInTheDocument();
    });
});
