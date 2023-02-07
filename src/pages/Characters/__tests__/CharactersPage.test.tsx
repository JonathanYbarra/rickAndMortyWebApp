import { render } from "@testing-library/react";
import { CharactersPage } from "../CharactersPage";

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