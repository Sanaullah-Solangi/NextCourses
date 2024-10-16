"use client";
import TodoForm from "@/components/TodoForm";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export default function AddCourses() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const title = searchParams.get("title");
  const imageURL = searchParams.get("imageURL");
  const duration = searchParams.get("duration");
  const courseData = {
    id,
    title,
    duration,
    imageURL,
  };
  return (
    <div className="flex justify-center items-center min-h-full">
      <TodoForm courseData={courseData} />;
    </div>
  );
}
