import React, { useState } from 'react';
import Display from './Display';

const Dashboard = () => {
    // need four 'useState' for strike, balls, fouls, hits
    const [strikes, setStrikes] = useState(0);
    const [balls, setBalls] = useState(0);
    const [fouls, setFouls] = useState(0);
    const [hits, setHits] = useState(0);

    //create functions for --> strikes, balls, fouls, and hits

    //strikes
    const strikesHit = () => {
        if (strikes === 3) {
            resetScore()
        } else {
            setStrikes(strikes + 1)
        }
    }

    // balls
    const ballsSucked = () => {
        if (balls > 3) {
            resetScore()
        }else{
            setBalls(balls + 1)
        }
    }

    //fouls
    const foulsMissed = () => {
        if (strikes == 2) {
            setStrikes(strikes)
        } else {
            setStrikes(strikes + 1)
        }
    }

    //reset score
    const resetScore = () => {
        setStrikes(0);
        setBalls(0)
    }


    return (

        <div>
            <Display strikes={strikes} balls={balls} />
            <button onClick={() => strikesHit()} >Strike</button>
            <button onClick={() => ballsSucked()}>Ball</button>
            <button onClick={() => foulsMissed()} >Foul</button>
            <button onClick={() => resetScore()}>Hits</button>
        </div>
    )
}

export default Dashboard;