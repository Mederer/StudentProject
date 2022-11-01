import { useEffect, useState } from "react";
import useSWR from "swr";
import {Course} from "../../types";
import CourseList from "../../components/course/CourseList";

const fetcher = (url: string) => fetch(url).then(res => res.json());

const AllCourses = () => {

    const { data, error } = useSWR<Course[]>("http://localhost:3000/courses", fetcher);
    
    if(error){
        return (
            <h1>An error has occured</h1>
        )
    }

    if(!data){
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <>
            <h1>All Courses</h1>
            <CourseList courses={data} />
        </>
    );
};

export default AllCourses;
