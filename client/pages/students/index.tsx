import { GetStaticProps } from "next";
import React from "react";
import StudentList from "../../components/student/StudentList";
import { Student } from "../../types";

const AllStudents = (props: {students: Student[]}) => {
    return <>
        <h1>All Students</h1>
        <p>The following is a list of all students registered in the system.</p>
        <StudentList students={props.students} />
    </>;
};

export const getStaticProps: GetStaticProps = async() => {
    const response: Response = await fetch("http://localhost:3000/students");
    const jsonResponse: Student[] = await response.json();
    
    return {
        props: {
            students: jsonResponse
        },
        revalidate: 10
    }
}

export default AllStudents;
