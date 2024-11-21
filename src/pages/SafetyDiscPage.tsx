import {authFetch} from "../utils/authFetch.ts";
import {useEffect, useState} from "react";

type safedisctype = {
    "reporterId": "string",
    "description": "string",
    "severity": "string",
    "location": "string"
}


export const SafetyDiscPage = () => {
    const [safedisc, setSafeDisc] = useState<safedisctype[]>([])

    const fetchSafeDisc  = async () => {
        const response = await authFetch(`${import.meta.env.VITE_BACKEND_URL}/api/SafetyDiscrepancy`)
        const data = await response.json()
        setSafeDisc(data);
    }
    useEffect(() => {
        fetchSafeDisc();
    }, []);
    return (<h1>{safedisc.map((item)=> (item.description))}</h1>)


}