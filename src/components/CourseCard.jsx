"use client";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { deleteCours, editCours } from "@/app/actions/newcourses";
import Link from "next/link";

export default function CourseCard({ course }) {
  const { id, imageURL, title, duration } = course;
  return (
    <div className="rounded-md bg-purple-300 pb-5 relative overflow-hidden">
      <div className="absolute right-0 -top-1 flex justify-center items-center bg-purple-300 rounded-l w-[100px] h-10 ">
        <Link
          className="text-2xl text-gray-700 hover:text-white hover:bg-purple-500 h-full w-full p-2 cursor-pointer"
          href={{
            pathname: "/addcourses",
            query: { id, imageURL, title, duration },
          }}
        >
          <FaEdit className="h-full w-full" />
        </Link>
        <MdDelete
          onClick={() => {
            deleteCours({ id });
          }}
          className="text-2xl text-gray-700 hover:text-white bg-red-200 hover:bg-red-500 h-full w-full p-2 cursor-pointer"
        />
      </div>
      <img
        src={imageURL}
        className="min-h-[100px] h-[200px] rounded-r-xl rounded-l-xl"
        width={"100%"}
      />
      <h1 className="font-mono font-semibold capitalize text-3xl text-center py-4">
        {title}
      </h1>
      <span className="text-center font-bold w-fll block uppercase">
        duration: {duration}
      </span>
    </div>
  );
}
