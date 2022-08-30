import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios3 = ({ url, method, body = null, headers = null }) => {
    const [data, setData] = useState(null);
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchData = async (forAbort) => {
        setLoading(true);
        const response = await axios[method](url, JSON.parse(headers), JSON.parse(body), forAbort)
        .catch(err => {
            setErr(err)
            setLoading(false);
        });
        if(response){
            setData(response.data)
            setErr(false);
        }
        setLoading(false);
    };

    useEffect(() => {
        const abortCont = new AbortController();
        fetchData({signal: abortCont.signal});
        return () => abortCont.abort();
    }, [method, url, body, headers]);

    return { data, err, loading };
};

export default useAxios3;