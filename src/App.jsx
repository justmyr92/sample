import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {
    const [data, setData] = useState([]);
    const [reload, setReload] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("YOUR_API_ENDPOINT");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setData(data);
                if (reload) setReload(false);
            } catch (error) {
                setError(error);
                console.error(
                    "There was a problem with the fetch operation:",
                    error
                );
            }
        };

        fetchData();
    }, [reload]);

    return (
        <>
            <Form setReload={setReload} />
            <Cards data={data} />
        </>
    );
}

export default App;
