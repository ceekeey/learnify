import React from "react";
import { Link } from "react-router-dom";

const featuredCourses = [
  { id: 1, title: "React for Beginners", instructor: "Jane Doe" },
  { id: 2, title: "Node.js Mastery", instructor: "John Smith" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">EduCraft LMS</h1>
        <nav>
          <Link to="/login" className="mr-4 hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        <section className="text-center my-12">
          <h2 className="text-4xl font-semibold mb-4">Learn from the best instructors</h2>
          <p className="text-gray-700 mb-6">Join thousands of students mastering new skills.</p>
          <Link
            to="/courses"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Browse Courses
          </Link>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-6">Featured Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredCourses.map((course) => (
              <div key={course.id} className="border p-4 rounded shadow bg-white">
                <h4 className="text-xl font-bold">{course.title}</h4>
                <p className="text-gray-600">Instructor: {course.instructor}</p>
                <Link
                  to={`/courses/${course.id}`}
                  className="mt-3 inline-block text-blue-600 hover:underline"
                >
                  View Course
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
