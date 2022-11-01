import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { Course } from "../../types";

const CourseDetails = (props: {course: Course}) => {
    const createdAt = new Date(props.course.createdAt);
    const updatedAt = new Date(props.course.updatedAt);

    return (
        <>
            <h1>Course Details</h1>
            <div>ID: {props.course.id}</div>
            <div>Name: {props.course.name}</div>
            <div>Code: {props.course.code.toUpperCase()}</div>
            <div>Capacity: {props.course.capacity}</div>
            <div>Created At: {`${createdAt.toLocaleDateString()} ${createdAt.toLocaleTimeString()}`}</div>
            <div>Updated At: {`${updatedAt.toLocaleDateString()} ${updatedAt.toLocaleTimeString()}`}</div>
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
