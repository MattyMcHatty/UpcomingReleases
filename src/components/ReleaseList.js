import React from "react";
import Release from "./Release";

const ReleaseList = ({releases}) => {

    const releaseNodes = releases.map(release => {
        return(
            <Release url ={release.url} key={release.id}>{release.name}</Release>
        );
    });

    return(
        <>
        {releaseNodes}
        </>
    )
}

export default ReleaseList;