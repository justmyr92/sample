import React from "react";

const Form = ({ setReload }) => {
    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("YOUR_API_ENDPOINT", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    data: e.target[0].value,
                }),
            });
            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(error);
            console.error(
                "There was a problem with the fetch operation:",
                error
            );
        }
        setReload(true);
    };

    return (
        <div>
            <form
                onSubmit={(e) => {
                    HandleSubmit(e);
                }}
            >
                <input type="text" />
                <button type="submit">Reload</button>
            </form>
        </div>
    );
};

export default Form;
