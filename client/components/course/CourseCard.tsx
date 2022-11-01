import { Course } from "../../types";
import styles from "../../styles/Courses.module.css";
import {useRouter} from "next/router";

const CourseCard = (props: { course: Course }) => {
    const router = useRouter();

    const handleClick = (event: any) => {
        router.push(`courses/${props.course.id}`)
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
