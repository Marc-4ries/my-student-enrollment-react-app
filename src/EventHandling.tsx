import React, { useState } from "react";
import "./EventHandling.css"

export default function EventHandling(){
    const [studentList, setStudentList] = useState<any[]>([])
    const [student, setStudent] = useState({
        name:"",
        course: "",
        address:"",
        contactnumber: "",
        emailaddress: "",
        ethnicity: "",
        religion: "",
        status: "",
        birthdate: "",
        birthplace: "",

    });

    const handlingInputChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
        const target = e.currentTarget;
        const {name, value} = target;

        setStudent((prev) => ({
            ...prev,
            [name]:value
        }));
    }

    const handlingButton = (e: React.SyntheticEvent<HTMLFormElement>) =>{
        e.preventDefault();
        // alert(
        //     `Student Name: ${student.name}\n
        //     Student Course: ${student.course}\n
        //     Student Address: ${student.address}`
        // );

        alert("Student Successfully Enrolled...");

        setStudentList((list) => [...list, student])

        setStudent({name:"", course:"", address:"", contactnumber:"", emailaddress: "", ethnicity: "", religion: "", status: "", birthdate: "", birthplace: "",})
    }


    return(
        <div className="container">
            <form onSubmit={handlingButton}>
                <table>
                    <tr>
                        <td>
                            <input type="text" 
                            name = "name" 
                            placeholder="Student Name" 
                            value = {student.name} 
                            onChange={handlingInputChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" 
                            name = "course" 
                            placeholder="Student Course" 
                            value = {student.course} 
                            onChange={handlingInputChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" 
                            name = "address" 
                            placeholder="Student Address" 
                            value = {student.address} 
                            onChange={handlingInputChange}/>
                        </td>
                    </tr>
                    <tr>
                    <td>
                            <input type="text" 
                            name = "contactnumber" 
                            placeholder="Student Number" 
                            value = {student.contactnumber} 
                            onChange={handlingInputChange}/>
                        </td>
                    </tr>
                    <tr>
                    <td>
                            <input type="text" 
                            name = "emailaddress" 
                            placeholder="Student Email Address" 
                            value = {student.emailaddress} 
                            onChange={handlingInputChange}/>
                        </td>
                    </tr>
                    <tr>
                    <td>
                            <input type="text" 
                            name = "ethnicity" 
                            placeholder="Student Ethnicity" 
                            value = {student.ethnicity} 
                            onChange={handlingInputChange}/>
                        </td>
                    </tr>
                    <tr>
                    <td>
                            <input type="text" 
                            name = "religion" 
                            placeholder="Student Religion" 
                            value = {student.religion} 
                            onChange={handlingInputChange}/>
                        </td>
                    </tr>
                    <tr>
                    <td>
                            <input type="text" 
                            name = "status" 
                            placeholder="Student Status" 
                            value = {student.status} 
                            onChange={handlingInputChange}/>
                        </td>
                    </tr>
                    <tr>
                    <td>
                            <input type="text" 
                            name = "birthdate" 
                            placeholder="Student BirthDate" 
                            value = {student.birthdate} 
                            onChange={handlingInputChange}/>
                        </td>
                    </tr>
                    <tr>
                    <td>
                            <input type="text" 
                            name = "birthplace" 
                            placeholder="Student BirthPlace" 
                            value = {student.birthplace} 
                            onChange={handlingInputChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button>Enroll Student</button>
                        </td>
                    </tr>
                </table>
            </form>

            <h3>List Enrolled Students</h3>
            <table>
                <tr>
                    <th>Student Name</th>
                    <th>Course</th>
                    <th>Address</th>
                    <th>Contact Number</th>
                    <th>Email Address</th>
                    <th>Ethnicity</th>
                    <th>Religion</th>
                    <th>Status</th>
                    <th>Birth Date</th>
                    <th>Birth Place</th>
                </tr>
                {studentList.map((stud,index) => (
                    <tr key = {index}>
                        <td>{stud.name}</td>
                        <td>{stud.course}</td>
                        <td>{stud.address}</td>
                        <td>{stud.contactnumber}</td>
                        <td>{stud.emailaddress}</td>
                        <td>{stud.ethnicity}</td>
                        <td>{stud.religion}</td>
                        <td>{stud.status}</td>
                        <td>{stud.birthdate}</td>
                        <td>{stud.birthplace}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

