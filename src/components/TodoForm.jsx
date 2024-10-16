"use client";
import { addCours, editCours } from "@/app/actions/newcourses";
import { useState } from "react";

export default function TodoForm({ courseData }) {
  const { id, imageURL, title, duration } = courseData;
  const [newTitle, setNewTitle] = useState(title);
  const [newDuration, setNewDuration] = useState(duration);
  const [newImageURL, setNewImageURL] = useState(imageURL);
  const newObj = {
    id,
    title: newTitle,
    duration: newDuration,
    imageURL: newImageURL,
  };

  const updateCourse = async () => {
    const res = await editCours(newObj);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-10 w-2/3">
      <h1 className="font-mono font-medium text-6xl text-center text-purple-800">
        Add Course
      </h1>
      <form action={addCours} className="w-full flex flex-col gap-2 text-2xl">
        <input
          className="border-2 border-purple-400 focus:border-purple-900 focus:border-2 outline-none shadow-none rounded py-2 px-4 font-mono"
          type="text"
          placeholder="Title"
          name="title"
          value={`${newTitle ? newTitle : ""}`}
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        />
        <input
          className="border-2 border-purple-400 focus:border-purple-900 focus:border-2 outline-none shadow-none rounded py-2 px-4 font-mono"
          type="text"
          placeholder="Duration"
          name="duration"
          value={`${newDuration ? newDuration : ""}`}
          onChange={(e) => {
            setNewDuration(e.target.value);
          }}
        />
        <input
          className="border-2 border-purple-400 focus:border-purple-900 focus:border-2 outline-none shadow-none rounded py-2 px-4 font-mono"
          type="text"
          placeholder="Image URL"
          name="imageURL"
          value={`${newImageURL ? newImageURL : ""}`}
          onChange={(e) => {
            setNewImageURL(e.target.value);
          }}
        />
        {id ? (
          <button
            onClick={() => {
              updateCourse();
            }}
            type="button"
            className="border-2 border-purple-400 focus:border-purple-900 focus:border-2 outline-none shadow-none rounded py-2 px-4 font-mono bg-purple-500 text-white cursor-pointer"
          >
            Edite Course
          </button>
        ) : (
          <input
            className="border-2 border-purple-400 focus:border-purple-900 focus:border-2 outline-none shadow-none rounded py-2 px-4 font-mono bg-purple-500 text-white cursor-pointer"
            type="submit"
            value={"submit"}
            name="submit"
          />
        )}
      </form>
    </div>
  );
}
