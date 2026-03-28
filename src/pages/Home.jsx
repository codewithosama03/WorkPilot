import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();

  // Animation variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="w-[90%] mx-auto py-24 text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.h1 variants={fadeUp} className="text-5xl font-bold mb-6">
            Manage Projects Smarter
          </motion.h1>

          <motion.p variants={fadeUp} className="text-gray-500 mb-8 max-w-2xl mx-auto">
            WorkPilot helps teams organize projects, track tasks,
            and collaborate efficiently with a modern workflow system.
          </motion.p>

          <motion.button
            variants={fadeUp}
            onClick={() => navigate("/signup")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="w-[90%] mx-auto py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          {/* LEFT */}
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-4">
              Visualize Your Workflow
            </h2>
            <p className="text-gray-500">
              Get a clear overview of tasks, progress, and priorities with
              a powerful Kanban system designed for real productivity.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={fadeUp}
            className="p-6 rounded-xl border 
            bg-gray-100 dark:bg-gray-800 
            border-gray-200 dark:border-gray-700 
            hover:shadow-xl transition
            flex items-center justify-center"
          >
            <img
              src="/img1.png"
              alt="WorkPilot Preview"
              className="h-56 w-full max-w-md object-contain rounded-lg mx-auto"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="w-[90%] mx-auto py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Task Management",
              desc: "Create, update and track tasks effortlessly with a structured workflow.",
            },
            {
              title: "Team Collaboration",
              desc: "Assign tasks and keep everyone aligned in real time.",
            },
            {
              title: "Real-Time Updates",
              desc: "Stay updated with instant changes across your workspace.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-6 rounded-xl border 
              bg-gray-100 dark:bg-gray-800 
              border-gray-200 dark:border-gray-700 
              hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="w-[90%] mx-auto py-20 text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-6">
            Built for Modern Teams
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-500 max-w-3xl mx-auto">
            WorkPilot is designed to simplify project workflows, reduce chaos,
            and improve productivity. Whether you are working solo or managing
            a team, it adapts to your process and helps you stay focused.
          </motion.p>
        </motion.div>
      </section>


{/* STATS */}
<section className="w-[90%] mx-auto py-20">
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={container}
    className="grid md:grid-cols-4 gap-6 text-center"
  >
    {[
      { number: "10K+", label: "Tasks Managed" },
      { number: "2K+", label: "Active Users" },
      { number: "500+", label: "Teams" },
      { number: "99.9%", label: "Uptime" },
    ].map((item, i) => (
      <motion.div
        key={i}
        variants={fadeUp}
        className="p-6 rounded-xl border 
        bg-gray-100 dark:bg-gray-800 
        border-gray-200 dark:border-gray-700 
        hover:shadow-lg transition"
      >
        <h3 className="text-3xl font-bold mb-2 text-blue-600">
          {item.number}
        </h3>
        <p className="text-gray-500">{item.label}</p>
      </motion.div>
    ))}
  </motion.div>
</section>

 {/* TESTIMONIAL */}
<section className="w-[90%] mx-auto py-20">
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={container}
    className="text-center mb-12"
  >
    <motion.h2 variants={fadeUp} className="text-3xl font-bold">
      What Users Say
    </motion.h2>
  </motion.div>

  <motion.div
    variants={container}
    className="grid md:grid-cols-3 gap-8"
  >
    {[
      {
        text: "WorkPilot completely changed how our team manages tasks.",
        name: "Frontend Developer",
      },
      {
        text: "Simple, clean, and extremely effective for daily workflow.",
        name: "Project Manager",
      },
      {
        text: "The Kanban system is smooth and intuitive to use.",
        name: "UI Designer",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        variants={fadeUp}
        className="p-6 rounded-xl border 
        bg-gray-100 dark:bg-gray-800 
        border-gray-200 dark:border-gray-700 
        hover:shadow-xl transition"
      >
        <p className="text-gray-500 mb-4">"{item.text}"</p>
        <h4 className="font-semibold">{item.name}</h4>
      </motion.div>
    ))}
  </motion.div>
</section>

      {/* CTA */}
      <section className="w-[90%] mx-auto py-20 text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-6">
            Ready to Boost Productivity?
          </motion.h2>

          <motion.button
            variants={fadeUp}
            onClick={() => navigate("/signup")}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Start Now
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;