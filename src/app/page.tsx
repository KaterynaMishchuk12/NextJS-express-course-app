import course from "./course.json";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        {course.lessons.map((lesson) => {
          return (
            <li key={lesson.name}>
              <h2> {lesson.title}</h2>
              <p>{lesson.points}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
