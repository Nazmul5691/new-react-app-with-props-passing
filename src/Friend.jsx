/* eslint-disable react/prop-types */
export default function Friend({friend}){
    console.log(friend);
    const {name, email} = friend;
    return(
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    )
}