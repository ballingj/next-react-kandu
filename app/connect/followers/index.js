'use client'

import { useState, useEffect } from 'react';
import getFollowers from './get-followers';

// the next line of code is a trick to get a dynamic number: if 'the current' value is 16, adding
// it to an empty string converts it into a string '17' then .length makes it a number 2
// it will essentially simplify to  Math.pow(10, 2) which is 100
const followerGoal = ({ current }) => Math.pow(10, (current + '').length);

export default function Followers() {
    const [goalString, setGoalString] = useState('?/?');

    useEffect(() => {
        getFollowers()
            .then(followers => {
                setGoalString(`${followers}/${followerGoal({ current: followers })}`);
            })
    }, []);

    return (
        <div className="ml-[15px] lg:ml-[20px] mt-[5px]">
            Follower progress: {goalString}
        </div>
    )
}
