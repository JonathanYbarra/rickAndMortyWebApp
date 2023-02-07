import { createBrowserRouter, Navigate } from "react-router-dom";
import { CHARACTERS, CHARACTER, FAVORITE_CHARACTERS } from "./routes-list";

import { App } from "App";
import { CharactersPage } from "pages/Characters";
import { DetailCharacterPage } from "pages/detailCharacter";
import { FavoriteCharactersPage } from "pages/favoriteCharacters";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to={CHARACTERS} /> },
      { path: CHARACTERS, element: <CharactersPage /> },
      { path: CHARACTER + '/:id', element: <DetailCharacterPage /> },
      { path: FAVORITE_CHARACTERS, element: <FavoriteCharactersPage /> },
    ],
  },
]);
