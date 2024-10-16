"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addCours(formData) {
  try {
    const obj = {
      title: formData.get("title"),
      duration: formData.get("duration"),
      imageURL: formData.get("imageURL"),
    };
    const data = await fetch("http://localhost:3000/api/newcourses", {
      method: "POST",
      body: JSON.stringify(obj),
    });
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}

export async function deleteCours(obj) {
  try {
    const data = await fetch("http://localhost:3000/api/newcourses", {
      method: "DELETE",
      body: JSON.stringify(obj),
    });
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}

export async function editCours(obj) {
  try {
    const data = await fetch("http://localhost:3000/api/newcourses", {
      method: "PUT",
      body: JSON.stringify(obj),
    });
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}
