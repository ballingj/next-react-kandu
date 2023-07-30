'use client'

import { useState, useEffect } from 'react';



export default function Followers() {
    const [goalString, setGoalString] = useState('?/?');

    async function getFollowers() {
        const res = await fetch('https://spotify-api-wrapper.appspot.com/artist/david-kando')
        const json = await res.json();
        console.log(`json`, json);
        if (json && json.artists && json.artists.items && json.artists.items.length) {
            return json.artists.items[0].followers.total;
            
        }
    }

    useEffect(() => {
        const followers = getFollowers();
        setGoalString(`${followers}/?`);
    }, []);

    return (
        <div className="ml-[15px] lg:ml-[20px] mt-[5px]">
            Follower progress: {goalString}
        </div>
    )
}
