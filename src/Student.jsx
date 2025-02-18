/* eslint-disable react/prop-types */
export default function Students({student}){
    return(
        <div>
            <p>Student Name : {student.name} </p>
            <p>Age : {student.age}</p>
        </div>
    )
}