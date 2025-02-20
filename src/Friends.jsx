import { useEffect, useState } from "react"
import Friend from "./Friend"

export default function Friends() {


    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])


    return (
        <div>
            <h2>Friends Show: {friends.length}</h2>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}