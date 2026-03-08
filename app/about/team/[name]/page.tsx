import React from "react";

const TeamDetailsPage = async ({params}) => {
    const name = (await params).name;
    return <div className="text-white text-5xl">Team member details page {name}</div>;
}

export default TeamDetailsPage;