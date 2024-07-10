"use client";

import { useState } from "react";
import styles from "./lesson.module.css";

type LessonProps = {
  title: string;
  points: string;
};

type LikeState = "unset" | "liked" | "dislike";

export function Lesson({ title, points }: LessonProps) {
  const [likeState, setLikeState] = useState<LikeState>("unset");

  const setLike = () => setLikeState("liked");
  return (
    <div>
      <h2 className={styles.header}>
        {title}{" "}
        <button type="button" onClick={setLike}>
          {likeState === "unset" ? "like" : likeState}
        </button>
      </h2>
      <p>{points}</p>
    </div>
  );
}
