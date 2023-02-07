import { render } from "@testing-library/react";
import { FavoriteCharactersPage } from "../FavoriteCharactersPage";

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
                    <FavoriteCharactersPage />
                </ThemeProvider>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});