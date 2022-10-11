import React from "react";

const Release = ({url, children}) => {

    return(
        <>
        <h4><a href={url} target="_blank" rel="noopener noreferrer">{children}</a></h4>
        </>
    )
};

export default Release;

