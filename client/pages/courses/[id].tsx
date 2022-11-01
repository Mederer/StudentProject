import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { Course } from "../../types";
import styles from "../../styles/Courses.module.css";

const CourseDetails = (props: {course: Course}) => {
    const createdAt = new Date(props.course.createdAt);
    const updatedAt = new Date(props.course.updatedAt);

    return (
        <>
            <h1>Course Details</h1>
            <div><span className={styles.label}>ID: </span>{props.course.id}</div>
            <div><span className={styles.label}>Name: </span>{props.course.name}</div>
            <div><span className={styles.label}>Code: </span>{props.course.code.toUpperCase()}</div>
            <div><span className={styles.label}>Capacity: </span>{props.course.capacity}</div>
            <div><span className={styles.label}>Created At: </span>{`${createdAt.toLocaleDateString()} ${createdAt.toLocaleTimeString()}`}</div>
            <div><span className={styles.label}>Updated At: </span>{`${updatedAt.toLocaleDateString()} ${updatedAt.toLocaleTimeString()}`}</div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const id = context.query.id
    const res = await fetch("http://localhost:3000/courses/" + id);
    const jsonRes = await res.json();
    return {
        props: {
            course: jsonRes.course
        }
    }
}

export default CourseDetails;
