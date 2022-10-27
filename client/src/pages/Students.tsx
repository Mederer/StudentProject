import React, { useEffect } from "react";
import "./Students.css";
import getFullUrl from "../utils/getFullUrl";

const Students = (props: { students: any; setStudents: Function }) => {
    useEffect(() => {
        fetch("http://localhost:3000/students")
            .then((res) => {
                res.json().then((data) => {
                    props.setStudents(data);
                }).catch((err) => {
                    console.log(err);
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <h1>List of Students</h1>
            <ul className="student-list">
                {props.students.map((student: any) => (
                    <>
                        <li className="student-list-item" key={student.id}>
                            <>
                            <div className="student-name" key={student.id}>{student.name}</div>
                            <div >test</div>
                            <div >test</div>
                            </>
                        </li>
                    </>
                ))}
            </ul>
        </>
    );
};

export default Students;
