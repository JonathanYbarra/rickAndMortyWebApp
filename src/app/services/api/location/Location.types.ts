export interface ILocations {
    info: {
        count: number,
        pages: number,
        next: string,
        prev: string | null
    },
    results: ILocationInfo[]
}

export interface ILocationInfo {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
}
