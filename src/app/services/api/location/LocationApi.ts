import { baseApi } from "../../baseApi";
import { ILocations } from "./Location.types";

export const locationApi = baseApi
    .enhanceEndpoints({ addTagTypes: ["Location"] })
    .injectEndpoints({
        endpoints: (builder) => ({
            getLocations: builder.query<ILocations, void>({
                query: () => "/location",
                providesTags: (result) =>
                    result
                        ? [
                            ...result.results.map(({ id }) => ({
                                type: 'Location' as const,
                                id,
                            })),
                            { type: 'Location', id: 'LIST' },
                        ]
                        : [{ type: 'Location', id: 'LIST' }],
            }),
        })
    });

export const { useGetLocationsQuery } = locationApi;