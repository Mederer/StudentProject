import { Course } from "../../types";
import styles from "../../styles/Courses.module.css";
import Router from "next/router";

const CourseCard = (props: { course: Course }) => {
    const handleClick = (event: any) => {
        Router.push(`courses/${props.course.id}`)
    }
    return (
        <li className={styles.courseItem} key={props.course.id}>
            <div>
                <span
                    className={styles.title}
                >{`${props.course.code} - ${props.course.name}`}</span>
            </div>
            <button className="btn" onClick={handleClick}>View Details</button>
        </li>
    );
};

export default CourseCard;
