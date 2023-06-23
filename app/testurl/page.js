'use client';
import { useState } from "react";

async function getData(url) {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        //body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    return response.json();
}

export default async function Testurl() {
    const [data, setData] = useState(null);
    try {
        const dataFromUrl = await getData('http://localhost:3000/api/testApi');
        setData(dataFromUrl)
    } catch (error) {
        console.log('There was an error', error);
    }

    return <div> test url{'->'} { data } {'<-'}</div>
}