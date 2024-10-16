const courses = [
  {
    id: 1,
    title: "Web Development",
    duration: "1 year",
    imageURL:
      "https://plus.unsplash.com/premium_photo-1683288662019-c92caea8276d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "App Development",
    duration: "1 year",
    imageURL:
      "https://media.istockphoto.com/id/1488105257/photo/chatbot-powered-by-ai-transforming-industries-and-customer-service-yellow-chatbot-icon-over.jpg?s=1024x1024&w=is&k=20&c=Q4raY3uxy-_J15PgbIfOzIhndHkCQ-UFSkxVDBitJcI=",
  },
  {
    id: 3,
    title: "Python Programming",
    duration: "1 year",
    imageURL:
      "https://images.unsplash.com/photo-1653564142033-ab3532091515?q=80&w=1630&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export async function GET(request) {
  return Response.json({
    data: courses,
    msg: "Data fetched successfully",
  });
}

export async function POST(request) {
  const data = await request.json();
  const obj = {
    ...data,
    id: courses.length + 1,
  };
  courses.unshift(obj);
  return Response.json({
    data: courses,
    msg: "Course is Added Successfully",
  });
}

export async function DELETE(request) {
  const data = await request.json();
  const courseIndex = courses.findIndex((course) => {
    return course.id == data.id;
  });
  courses.splice(courseIndex, 1);
  return Response.json({
    data: courses,
    msg: "Course is Added Successfully",
  });
}

export async function PUT(request) {
  const data = await request.json();
  const courseIndex = courses.findIndex((course) => {
    return course.id == data.id;
  });
  courses[courseIndex] = data;
  return Response.json({
    data: courses,
    msg: "Course is Added Successfully",
  });
}
