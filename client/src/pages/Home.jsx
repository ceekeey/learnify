import "swiper/css";
import "swiper/css/pagination";
import { FiPlay } from "react-icons/fi";
import { HiOutlineCheckCircle, HiAcademicCap, HiStar } from "react-icons/hi";
import { BsCodeSlash } from "react-icons/bs";
import {
  FaServer,
  FaLaptopCode,
  FaUserTie,
  FaRegClock,
  FaChalkboardTeacher,
  FaDollarSign,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import Navbar from "../components/Common/Navigation";

import { motion } from "framer-motion";
import Footer from "../components/Common/Footer";

const featuredCourses = [
  { id: 1, title: "React for Beginners", instructor: "Jane Doe" },
  { id: 2, title: "Node.js Mastery", instructor: "John Smith" },
];

const instructors = [
  { name: "Jane Doe", title: "Full Stack Developer", img: "/instractor1.webp" },
  { name: "John Smith", title: "Backend Specialist", img: "/instractor2.webp" },
];

const heroSlides = [
  {
    title: "Master Real-World Skills",
    subtitle: "Courses designed by industry professionals",
    image: "/hero1.jpg",
    button: { text: "Browse Courses", link: "/courses", icon: <FiPlay /> },
  },
  {
    title: "Learn at Your Own Pace",
    subtitle: "Flexible, affordable, and convenient",
    image: "/hero2.jpg",
    button: { text: "Join for Free", link: "/register", icon: <HiOutlineCheckCircle /> },
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-light text-gray-dark">
        <Navbar />

        {/* Hero with Slider */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
          className="relative bg-white"
        >
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="h-[400px] md:h-[500px] w-full"
          >
            {heroSlides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="h-full bg-cover bg-center flex items-center justify-center text-center px-4"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <motion.div
                    className="bg-black bg-opacity-60 text-white p-6 rounded max-w-xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: idx * 0.5 }}
                  >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                    <p className="text-lg mb-6">{slide.subtitle}</p>
                    <Link
                      to={slide.button.link}
                      className="bg-accent text-gray-dark font-semibold px-6 py-3 rounded inline-flex items-center gap-2 hover:bg-indigo-400 transition"
                    >
                      {slide.button.icon}
                      {slide.button.text}
                    </Link>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.section>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 py-12">
          {/* Featured Courses */}
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-semibold mb-6 text-primary flex items-center gap-2">
              <HiAcademicCap className="text-secondary" /> Featured Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredCourses.map((course) => (
                <motion.div
                  key={course.id}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="bg-white border rounded p-4 shadow"
                >
                  <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                    <BsCodeSlash className="text-secondary" />
                    {course.title}
                  </h3>
                  <p className="text-gray-medium">Instructor: {course.instructor}</p>
                  <Link
                    to={`/courses/${course.id}`}
                    className="mt-3 inline-block text-secondary hover:underline"
                  >
                    View Course
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* What You’ll Learn */}
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="my-16 text-center"
          >
            <h2 className="text-3xl font-semibold text-secondary mb-6 flex justify-center items-center gap-2">
              <HiOutlineCheckCircle /> What You’ll Learn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-medium">
              <motion.div variants={fadeInUp} className="flex flex-col items-center text-center">
                <FaLaptopCode className="text-primary text-3xl mb-2" />
                <h3 className="text-xl font-bold text-primary mb-2">Web Development</h3>
                <p>Master HTML, CSS, JavaScript, React, and more.</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex flex-col items-center text-center">
                <FaServer className="text-primary text-3xl mb-2" />
                <h3 className="text-xl font-bold text-primary mb-2">Backend & APIs</h3>
                <p>Learn Node.js, Express, MySQL, MongoDB, and REST APIs.</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex flex-col items-center text-center">
                <FaUserTie className="text-primary text-3xl mb-2" />
                <h3 className="text-xl font-bold text-primary mb-2">Tech Careers</h3>
                <p>Build a portfolio, prepare for interviews, and grow professionally.</p>
              </motion.div>
            </div>
          </motion.section>

          {/* Top Instructors */}
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-semibold text-primary mb-6 text-center">Top Instructors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {instructors.map((inst, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-white rounded shadow p-4 text-center"
                >
                  <img
                    src={inst.img}
                    alt={inst.name}
                    className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h4 className="text-xl font-semibold text-secondary">{inst.name}</h4>
                  <p className="text-gray-medium">{inst.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Why Learnify */}
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center bg-white p-8 rounded shadow"
          >
            <h2 className="text-3xl font-bold text-primary mb-6 flex justify-center items-center gap-2">
              <HiStar className="text-yellow-400" /> Why Choose Learnify?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-medium">
              <motion.div className="flex flex-col items-center text-center" variants={fadeInUp}>
                <FaRegClock className="text-secondary text-3xl mb-2" />
                <h3 className="text-xl font-semibold text-secondary mb-2">Flexible Learning</h3>
                <p>Learn anytime, anywhere — at your own pace.</p>
              </motion.div>
              <motion.div className="flex flex-col items-center text-center" variants={fadeInUp}>
                <FaDollarSign className="text-secondary text-3xl mb-2" />
                <h3 className="text-xl font-semibold text-secondary mb-2">Affordable Pricing</h3>
                <p>High-quality courses at prices you can afford.</p>
              </motion.div>
              <motion.div className="flex flex-col items-center text-center" variants={fadeInUp}>
                <FaChalkboardTeacher className="text-secondary text-3xl mb-2" />
                <h3 className="text-xl font-semibold text-secondary mb-2">Expert Instructors</h3>
                <p>Courses taught by real professionals in the industry.</p>
              </motion.div>
            </div>
          </motion.section>
        </main>
      </div>
      <Footer />
    </>
  );
}
