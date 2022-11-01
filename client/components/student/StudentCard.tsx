import styles from "../../styles/StudentCard.module.css";
import { Student } from "../../types";

const StudentCard = (props: { student: Student }) => {
    return (
        <div className={styles.card}>
            <li className={styles.studentFields}>
                <div className="student-field">{props.student.firstname}</div>
                <div className="student-field">{props.student.lastname}</div>
                <div className="student-field">{props.student.email}</div>
                <div className="student-field">{props.student.phone}</div>
                <div className="student-field">{props.student.createdAt}</div>
                <div className="student-field">{props.student.updatedAt}</div>
            </li>
        </div>
    );
};

export default StudentCard;
