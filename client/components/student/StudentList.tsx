import React from 'react'
import { GetStaticProps } from 'next'
import { Student } from '../../types'
import StudentCard from './StudentCard'
import styles from "../../styles/StudentList.module.css";

const StudentList = (props: { students: Student[]}) => {
  return (
    <ul className={styles.studentList}>
        {props.students.map(student => (
            <StudentCard student={student} />
        ))}
    </ul>
  )
}



export default StudentList