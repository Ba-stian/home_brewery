export interface IBeer {
    id: number;
    name: string;
    detail: string;
    imagePath: string;
    abv: number
    country: {
        [key: string]: string;
    }
}
