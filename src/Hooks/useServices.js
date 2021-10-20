import { useEffect, useState } from "react"

const useService = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(()=>{
        setLoading(true);
        fetch('../fakeData.json')
        .then(res => res.json())
        .then(data => setServices(data))
        .finally(() => setLoading(false));
    }, [])
    return {
        services,
        isLoading
    };
}

export default useService;