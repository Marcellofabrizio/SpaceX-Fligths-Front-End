export interface ILaunchByRocketStat {
    count: number;
    name: string;
}

export interface ILaunchByYearStat {
    year: number;
    launches: {
        rocket: string;
        count: number;
    }[];
}
