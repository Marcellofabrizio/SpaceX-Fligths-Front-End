import { IRocket } from "./Rocket";

export interface ILaunch {
        _id: string;
        flightNumber: number;
        logo: string;
        name: string;
        dateUtc: string;
        result: boolean;
        webcast: string;
        reused: boolean;
        createdAt: Date;
        rocket: IRocket;
}