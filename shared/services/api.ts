import axios, { AxiosError } from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ILaunch } from "../@types/Launch";
import { ILaunchResponse } from "../@types/LaunchResponse";

export const api = axios.create({
    baseURL: "http://localhost:5000",
});

export async function getLaunches(queryParams): Promise<ILaunchResponse> {
    try {
        const response = await api.get("/v1/launches", {
            params: {
                page: queryParams.page,
                limit: queryParams.limit || "",
                search: queryParams.search || "",
            },
        });

        return response.data;
    } catch (err) {
        console.log(err);
        return {} as ILaunchResponse;
    }
}
