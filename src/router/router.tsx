import { createBrowserRouter, Navigate } from "react-router-dom";
import { CHARACTERS } from "./routes-list";

import { CharactersPage } from "pages/Characters";
import { App } from "App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to={CHARACTERS} /> },
      { path: CHARACTERS, element: <CharactersPage /> },
    ],
  },
]);
