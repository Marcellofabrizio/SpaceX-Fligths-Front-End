import { ILaunch } from "./Launch";

export interface ILaunchResponse {
    results: ILaunch[];
    page: number;
    totalDocs: number;
    totalPages: number;
    hasPrev: boolean;
    hasNext: boolean;
}
