import { useState } from "react"

export default function Team(){


    const [players, setPlayers] = useState(11)

    const handleAddPlayers =() =>{
        const newPlayer = players + 1;
        setPlayers(newPlayer);
    }


    const handleRemovePlayers =() =>{
        const newPlayer = players - 1;
        setPlayers(newPlayer);
    }




    return(
        <div>
            <p>Players: {players}</p>
            <button onClick={handleAddPlayers}>Add Players</button>
            <button onClick={handleRemovePlayers}>Remove Players</button>
        </div>
    )
}