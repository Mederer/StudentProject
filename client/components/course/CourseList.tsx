import React from "react";
import useSWR from "swr";
import { Course } from "../../types";
import styles from "../../styles/Courses.module.css"
import CourseCard from "./CourseCard";

const CourseList = (props: {courses: Course[]}) => {
    return (
        <ul className={styles.courseList}>
            {props.courses.map(course => (
                <CourseCard key={course.id} course={course} />
            ))}
        </ul>
    );
};

export default CourseList;