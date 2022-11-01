import useSWR from "swr";
import { useRouter } from "next/router";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const CourseDetails = () => {
    const router = useRouter();
    const courseId = router.query.id;
    const { data, error } = useSWR(
        `http://localhost:3000/courses/${courseId}`,
        fetcher
    );

    console.log(data)

    if(error){
        return (
            <h1>An error has occured</h1>
        )
    }

    if(!data){
        console.log(data);
        return(
            <h1>Loading...</h1>
        )
    }

    return (
        <>
            <h1>Course Details</h1>
            <div>ID: {data.course.id}</div>
            <div>Name: {data.course.name}</div>
            <div>Code: {data.course.code.toUpperCase()}</div>
            <div>Capacity: {data.course.capacity}</div>
            <div>Created At: {data.course.createdAt}</div>
            <div>Updated At: {data.course.updatedAt}</div>
        </>
    );
};

export default CourseDetails;
