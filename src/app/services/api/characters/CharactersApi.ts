import { baseApi } from "../../baseApi";
import { ICharacters, IGetCharactersOptions } from "./Character.types";

export const charactersApi = baseApi
    .enhanceEndpoints({ addTagTypes: ["Characters"] })
    .injectEndpoints({
        endpoints: (builder) => ({
            getCharacters: builder.query<ICharacters, IGetCharactersOptions>({
                query: ({ name, page }) => {
                    const params = name ? `name=${name}` : `page=${page}`;
                    return `/character?${params}`
                },
                providesTags: (result) =>
                    result
                        ? [
                            ...result.results.map(({ id }) => ({
                                type: 'Characters' as const,
                                id,
                            })),
                            { type: 'Characters', id: 'LIST' },
                        ]
                        : [{ type: 'Characters', id: 'LIST' }],
            }),
        })
    });

export const { useGetCharactersQuery } = charactersApi;