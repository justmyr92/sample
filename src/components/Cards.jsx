import React from "react";

const Cards = ([data]) => {
    return (
        <div>
            {data.map((item) => {
                return (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Cards;
