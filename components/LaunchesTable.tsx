import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { ILaunch } from "../shared/@types/Launch";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
    data: ILaunch[];
}

const columns: GridColDef[] = [
    { field: "flightNumber", headerName: "N. voo", width: 70 },
    { field: "logo", headerName: "Logo", width: 100 },
    { field: "name", headerName: "Missão", width: 130 },
    {
        field: "dateUtc",
        headerName: "Data de Lançamento",
        type: "date",
        width: 130,
    },
    {
        field: "result",
        headerName: "Resultado",
        type: "boolean",
        width: 100,
    },
];

const getResultClass = (isSucess) => {
    return `text-xs md:text-sm text-center py-1 text-white rounded-sm ${
        isSucess ? "bg-green" : "bg-red"
    }`;
};

const getResultLabel = (isSucess) => {
    return isSucess ? "SUCESSO" : "FALHA";
};

const getLogo = (logoUrl) => {
    if (logoUrl) {
        return (
            <Image src={logoUrl} alt="Logo da missão" width={40} height={40} />
        );
    }

    return null;
};

const formatDate = (dateString) => {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
};

export default function LaunchesTable({ data }: Props) {
    const [isMobile, setIsMobile] = useState(null);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 640);
    }, []);

    if (data.length == 0) {
        return null;
    }

    return (
        <div className="relative overflow-x-auto shadow-lg rounded-lg p-3 bg-gray-light">
            <table className="w-full text-xs md:text-md text-left text-gray-500 ">
                <thead className="text-gray-700">
                    <tr className="">
                        <th scope="col" className="px-3 md:px-6 py-3">
                            Vôo
                        </th>
                        <th
                            scope="col"
                            className={`px-3 md:px-6 py-3 ${
                                isMobile ? "hidden" : ""
                            }`}
                        >
                            Logo
                        </th>
                        <th scope="col" className="px-3 md:px-6 py-3">
                            Missão
                        </th>
                        <th scope="col" className="px-3 md:px-6 py-3">
                            Data de lançamento
                        </th>
                        <th scope="col" className="px-3 md:px-6 py-3">
                            Foguete
                        </th>
                        <th scope="col" className="px-3 md:px-6 py-3">
                            Resultado
                        </th>
                        <th
                            scope="col"
                            className={`px-3 md:px-6 py-3 ${
                                isMobile ? "hidden" : ""
                            }`}
                        >
                            Vídeo
                        </th>
                    </tr>
                </thead>
                <tbody className="">
                    {data.map((launch) => (
                        <tr
                            className="bg-white mb-10 border-4 border-gray-light rounded-lg"
                            key={launch._id}
                        >
                            <th
                                scope="row"
                                className="px-3 md:px-6 py-2 font-medium"
                            >
                                {launch.flightNumber}
                            </th>
                            <td
                                className={`px-3 md:px-6 py-2 ${
                                    isMobile ? "hidden" : ""
                                }`}
                            >
                                {getLogo(launch.logo)}
                            </td>
                            <td className="px-3 md:px-6 py-2">{launch.name}</td>
                            <td className="px-3 md:px-6 py-2">
                                {formatDate(launch.dateUtc)}
                            </td>
                            <td className="px-3 md:px-6 py-2">
                                {launch.rocket.name}
                            </td>
                            <td className="px-3 md:px-6 py-2">
                                <p className={getResultClass(launch.result)}>
                                    {getResultLabel(launch.result)}
                                </p>
                            </td>
                            <td
                                className={`px-3 md:px-6 py-2 ${
                                    isMobile ? "hidden" : ""
                                }`}
                            >
                                <a
                                    href={launch.webcast}
                                    target="_blank"
                                    type="button"
                                >
                                    YouTube
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
