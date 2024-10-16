import CourseCard from "@/components/CourseCard";
import TodoForm from "@/components/TodoForm";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  let courses = await fetch("http://localhost:3000/api/newcourses", {
    cache: "no-cache",
  });
  courses = await courses.json();
  return (
    <div className="container mx-auto pb-10">
      {/* HEADER */}
      <div className="header flex justify-between w-full mt-10">
        <h1 className="text-4xl font-mono font-semibold uppercase">Courses</h1>
        <Link href={"/addcourses"}>
          <button className="border-2 border-purple-800 text-2xl py-2 px-4 rounded bg-purple-300 hover:bg-purple-400 uppercase font-medium text-gray-600">
            Add Course
          </button>
        </Link>
      </div>
      {/* CONTENT */}
      <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {courses.data.map((course) => {
          return <CourseCard key={course.id} course={course} />;
        })}
      </div>
    </div>
  );
}
