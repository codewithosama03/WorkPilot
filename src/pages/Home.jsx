


import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import img from "../assets/img1.png";

import {
  FiCheckCircle,
  FiFolder,
  FiCalendar,
  FiZap,
  FiUsers,
  FiShield,
  FiArrowRight,
} from "react-icons/fi";


function Home() {

  const navigate = useNavigate();


  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };


  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },

    show: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };


  const floating = {
    animate: {
      y: [0, -12, 0],

      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };


  return (

    <div className="
      min-h-screen
      bg-white
      dark:bg-slate-950
      text-slate-900
      dark:text-white
      overflow-hidden
    ">


      <Navbar />



      {/* HERO SECTION */}


      <section className="
        relative
        w-[92%]
        max-w-7xl
        mx-auto
        pt-24
        pb-20
      ">


        {/* background glow */}

        <div className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[500px]
          bg-indigo-500/20
          blur-[120px]
          rounded-full
        " />



        <motion.div

          variants={container}

          initial="hidden"

          animate="show"

          className="
            relative
            z-10
            text-center
          "

        >


          <motion.div
            variants={fadeUp}
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              border
              border-slate-200
              dark:border-slate-800
              bg-white/60
              dark:bg-slate-900/60
              backdrop-blur
              text-sm
              text-slate-600
              dark:text-slate-300
            "
          >

            <FiZap className="text-indigo-600" />

            Modern Project Management Platform

          </motion.div>



          <motion.h1

            variants={fadeUp}

            className="
              mt-8
              text-5xl
              md:text-7xl
              font-black
              tracking-tight
              leading-tight
            "

          >

            Manage Projects.
            <br />

            <span className="
              bg-gradient-to-r
              from-indigo-600
              via-blue-600
              to-purple-600
              bg-clip-text
              text-transparent
            ">
              Build Faster.
            </span>


          </motion.h1>




          <motion.p

            variants={fadeUp}

            className="
              mt-8
              max-w-3xl
              mx-auto
              text-lg
              md:text-xl
              leading-8
              text-slate-600
              dark:text-slate-300
            "

          >

            WorkPilot helps developers and teams organize tasks,
            manage workflows, and collaborate efficiently with
            a clean modern workspace.

          </motion.p>





          <motion.div

            variants={fadeUp}

            className="
              mt-10
              flex
              justify-center
              gap-4
              flex-wrap
            "

          >


            <button

              onClick={() => navigate("/signup")}

              className="
                group
                flex
                items-center
                gap-2
                px-8
                py-4
                rounded-2xl
                bg-indigo-600
                text-white
                font-semibold
                shadow-lg
                shadow-indigo-600/30
                hover:bg-indigo-700
                transition
              "

            >

              Get Started

              <FiArrowRight
                className="
                  group-hover:translate-x-1
                  transition
                "
              />

            </button>



            <button

              onClick={() => navigate("/login")}

              className="
                px-8
                py-4
                rounded-2xl
                border
                border-slate-200
                dark:border-slate-700
                font-semibold
                hover:bg-slate-100
                dark:hover:bg-slate-900
                transition
              "

            >

              Login

            </button>


          </motion.div>


        </motion.div>





        {/* DASHBOARD IMAGE */}


        <motion.div

          variants={floating}

          animate="animate"

          className="
            mt-20
            relative
          "

        >


          <div className="
            absolute
            inset-0
            bg-indigo-500/20
            blur-3xl
            rounded-3xl
          " />



          <div className="
            relative
            rounded-[32px]
            border
            border-slate-200
            dark:border-slate-800
            bg-white
            dark:bg-slate-900
            p-4
            shadow-2xl
          ">


            <img

              src={img}

              alt="WorkPilot Dashboard"

              className="
                rounded-2xl
                w-full
                object-cover
              "

            />


          </div>


        </motion.div>



      </section>





      {/* TRUST SECTION */}


      <section className="
        w-[92%]
        max-w-7xl
        mx-auto
        py-16
      ">


        <motion.div

          initial="hidden"

          whileInView="show"

          viewport={{ once:true }}

          variants={container}

          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-6
          "

        >



          {[
            {
              icon:<FiCheckCircle />,
              title:"Task Tracking",
            },

            {
              icon:<FiUsers />,
              title:"Team Collaboration",
            },

            {
              icon:<FiShield />,
              title:"Secure Workspace",
            },

            {
              icon:<FiZap />,
              title:"Fast Workflow",
            },

          ].map((item)=>(


            <motion.div

              variants={fadeUp}

              key={item.title}

              className="
                flex
                items-center
                gap-4
                justify-center
                p-6
                rounded-2xl
                border
                border-slate-200
                dark:border-slate-800
                bg-white
                dark:bg-slate-900
              "

            >

              <div className="
                text-indigo-600
                text-2xl
              ">

                {item.icon}

              </div>


              <p className="
                text-sm
                font-semibold
              ">

                {item.title}

              </p>


            </motion.div>


          ))}



        </motion.div>


      </section>

            {/* PROJECT MANAGEMENT SHOWCASE */}

      <section className="
        w-[92%]
        max-w-7xl
        mx-auto
        py-24
      ">


        <motion.div

          initial="hidden"

          whileInView="show"

          viewport={{ once:true }}

          variants={container}

          className="
            grid
            lg:grid-cols-2
            gap-12
            items-center
          "

        >



          {/* TEXT SIDE */}

          <motion.div variants={fadeUp}>


            <span className="
              text-indigo-600
              font-semibold
              uppercase
              tracking-[3px]
              text-sm
            ">

              Project Management

            </span>



            <h2 className="
              mt-5
              text-4xl
              md:text-5xl
              font-black
              leading-tight
            ">

              Everything your team needs in one workspace

            </h2>



            <p className="
              mt-6
              text-lg
              leading-8
              text-slate-600
              dark:text-slate-300
            ">

              Create projects, organize tasks, monitor progress,
              and keep your entire workflow connected through one
              powerful dashboard.

            </p>



            <div className="
              mt-8
              space-y-4
            ">


              {[
                "Create unlimited projects",
                "Track task progress instantly",
                "Manage priorities and deadlines",
              ].map((item)=>(


                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <FiCheckCircle
                    className="
                      text-indigo-600
                      text-xl
                    "
                  />


                  <p className="
                    text-slate-600
                    dark:text-slate-300
                  ">

                    {item}

                  </p>


                </div>


              ))}


            </div>



          </motion.div>





          {/* PROJECT CARD */}

          <motion.div

            variants={fadeUp}

            whileHover={{
              y:-8,
            }}

            className="
              rounded-[32px]
              border
              border-slate-200
              dark:border-slate-800
              bg-white
              dark:bg-slate-900
              p-6
              shadow-xl
            "

          >


            {/* header */}

            <div className="
              flex
              justify-between
              items-center
              mb-6
            ">


              <div>

                <p className="
                  text-sm
                  text-slate-500
                ">

                  Active Projects

                </p>


                <h3 className="
                  text-3xl
                  font-black
                ">

                  12

                </h3>


              </div>



              <div className="
                h-12
                w-12
                rounded-2xl
                bg-indigo-100
                dark:bg-indigo-500/20
                flex
                items-center
                justify-center
                text-indigo-600
              ">

                <FiFolder />

              </div>



            </div>




            {/* project items */}


            <div className="
              space-y-4
            ">


              {[
                {
                  name:"Website Redesign",
                  progress:"90%",
                },

                {
                  name:"Mobile Application",
                  progress:"70%",
                },

                {
                  name:"Dashboard System",
                  progress:"45%",
                },


              ].map((project)=>(


                <div
                  key={project.name}
                  className="
                    p-4
                    rounded-2xl
                    bg-slate-50
                    dark:bg-slate-800/50
                  "
                >


                  <div className="
                    flex
                    justify-between
                    mb-3
                  ">

                    <p className="
                      font-semibold
                    ">

                      {project.name}

                    </p>


                    <span className="
                      text-sm
                      text-indigo-600
                      font-semibold
                    ">

                      {project.progress}

                    </span>


                  </div>



                  <div className="
                    h-2
                    rounded-full
                    bg-slate-200
                    dark:bg-slate-700
                  ">

                    <div

                      className="
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        from-indigo-600
                        to-purple-600
                      "

                      style={{
                        width:project.progress
                      }}

                    />

                  </div>


                </div>


              ))}


            </div>



          </motion.div>


        </motion.div>


      </section>





      {/* PROJECT DETAILS CARD */}


      <section className="
        w-[92%]
        max-w-7xl
        mx-auto
        py-24
      ">


        <motion.div

          initial="hidden"

          whileInView="show"

          viewport={{once:true}}

          variants={container}

          className="
            grid
            lg:grid-cols-2
            gap-12
            items-center
          "

        >




          {/* VISUAL */}


          <motion.div

            variants={fadeUp}

            className="
              order-2
              lg:order-1
              rounded-[32px]
              border
              border-slate-200
              dark:border-slate-800
              bg-white
              dark:bg-slate-900
              p-8
              shadow-xl
            "

          >


            <div className="
              flex
              justify-between
              items-center
            ">


              <div>

                <p className="
                  text-sm
                  text-slate-500
                ">

                  Project Details

                </p>


                <h3 className="
                  text-2xl
                  font-black
                ">

                  WorkPilot Website

                </h3>


              </div>


              <span className="
                px-4
                py-2
                rounded-full
                text-sm
                bg-green-100
                text-green-700
                dark:bg-green-500/20
                dark:text-green-400
              ">

                Active

              </span>


            </div>





            <div className="
              mt-8
              grid
              grid-cols-2
              gap-4
            ">


              {[
                {
                  title:"Tasks",
                  value:"48",
                },

                {
                  title:"Members",
                  value:"8",
                },

                {
                  title:"Deadline",
                  value:"12 Days",
                },

                {
                  title:"Priority",
                  value:"High",
                },

              ].map((item)=>(


                <div
                  key={item.title}
                  className="
                    rounded-2xl
                    bg-slate-50
                    dark:bg-slate-800/50
                    p-5
                  "
                >

                  <p className="
                    text-sm
                    text-slate-500
                  ">

                    {item.title}

                  </p>


                  <h4 className="
                    mt-2
                    text-xl
                    font-bold
                  ">

                    {item.value}

                  </h4>


                </div>


              ))}


            </div>


          </motion.div>





          {/* TEXT */}


          <motion.div

            variants={fadeUp}

            className="
              order-1
              lg:order-2
            "

          >

            <span className="
              text-indigo-600
              font-semibold
              uppercase
              tracking-[3px]
              text-sm
            ">

              Project Control

            </span>


            <h2 className="
              mt-5
              text-4xl
              md:text-5xl
              font-black
            ">

              Keep every detail organized

            </h2>


            <p className="
              mt-6
              text-lg
              leading-8
              text-slate-600
              dark:text-slate-300
            ">

              From deadlines to team members, WorkPilot keeps
              every important project detail visible and easy
              to manage.

            </p>


          </motion.div>


        </motion.div>


      </section>

            {/* WORKFLOW SHOWCASE */}

      <section className="
        w-[92%]
        max-w-7xl
        mx-auto
        py-24
      ">


        <motion.div

          initial="hidden"

          whileInView="show"

          viewport={{ once:true }}

          variants={container}

          className="
            grid
            lg:grid-cols-2
            gap-12
            items-center
          "

        >


          {/* TEXT */}

          <motion.div variants={fadeUp}>


            <span className="
              text-indigo-600
              font-semibold
              uppercase
              tracking-[3px]
              text-sm
            ">

              Smart Workflow

            </span>


            <h2 className="
              mt-5
              text-4xl
              md:text-5xl
              font-black
            ">

              Visualize progress with powerful workflows

            </h2>


            <p className="
              mt-6
              text-lg
              leading-8
              text-slate-600
              dark:text-slate-300
            ">

              Move tasks from planning to completion with a
              flexible Kanban system designed for modern teams.

            </p>


          </motion.div>





          {/* KANBAN MOCKUP */}


          <motion.div

            variants={fadeUp}

            whileHover={{
              y:-8
            }}

            className="
              rounded-[32px]
              border
              border-slate-200
              dark:border-slate-800
              bg-white
              dark:bg-slate-900
              p-6
              shadow-xl
            "

          >


            <div className="
              flex
              justify-between
              mb-6
            ">

              <h3 className="
                font-bold
                text-xl
              ">

                Project Board

              </h3>


              <span className="
                text-sm
                text-slate-500
              ">

                Sprint #12

              </span>


            </div>



            <div className="
              grid
              grid-cols-3
              gap-4
            ">



              {[
                {
                  title:"Todo",
                  count:"4",
                  tasks:[
                    "UI Design",
                    "API Setup"
                  ]
                },

                {
                  title:"Progress",
                  count:"2",
                  tasks:[
                    "Authentication",
                    "Dashboard"
                  ]
                },

                {
                  title:"Done",
                  count:"8",
                  tasks:[
                    "Routing",
                    "Deployment"
                  ]
                }

              ].map((column)=>(


                <div
                  key={column.title}
                  className="
                    rounded-2xl
                    bg-slate-50
                    dark:bg-slate-800/50
                    p-4
                  "
                >


                  <div className="
                    flex
                    justify-between
                    mb-4
                  ">

                    <p className="
                      text-sm
                      font-semibold
                    ">

                      {column.title}

                    </p>


                    <span className="
                      text-xs
                      text-slate-500
                    ">

                      {column.count}

                    </span>


                  </div>



                  <div className="
                    space-y-3
                  ">


                    {column.tasks.map((task)=>(


                      <div

                        key={task}

                        className="
                          rounded-xl
                          bg-white
                          dark:bg-slate-900
                          p-3
                          border
                          border-slate-200
                          dark:border-slate-700
                          text-sm
                          font-medium
                        "

                      >

                        {task}

                      </div>


                    ))}



                  </div>



                </div>


              ))}



            </div>


          </motion.div>



        </motion.div>


      </section>







      {/* CALENDAR + ACTIVITY */}



      <section className="
        w-[92%]
        max-w-7xl
        mx-auto
        py-24
      ">


        <motion.div

          initial="hidden"

          whileInView="show"

          viewport={{once:true}}

          variants={container}

          className="
            grid
            lg:grid-cols-2
            gap-10
          "

        >



          {/* CALENDAR */}


          <motion.div

            variants={fadeUp}

            className="
              rounded-[32px]
              border
              border-slate-200
              dark:border-slate-800
              bg-white
              dark:bg-slate-900
              p-8
              shadow-xl
            "

          >


            <div className="
              flex
              justify-between
              items-center
              mb-8
            ">

              <div>

                <p className="
                  text-sm
                  text-slate-500
                ">

                  Schedule

                </p>


                <h3 className="
                  text-2xl
                  font-black
                ">

                  Calendar

                </h3>

              </div>


              <div className="
                w-12
                h-12
                rounded-2xl
                bg-indigo-100
                dark:bg-indigo-500/20
                flex
                items-center
                justify-center
                text-indigo-600
              ">

                <FiCalendar className="text-indigo-600 text-xl" />

              </div>


            </div>



            <div className="
              grid
              grid-cols-7
              gap-3
              text-center
              text-sm
            ">


              {
                [
                  28,29,30,1,2,3,4,
                  5,6,7,8,9,10,11,
                  12,13,14,15,16,17,18
                ].map((day,index)=>(


                  <div

                    key={index}

                    className={`
                      h-10
                      flex
                      items-center
                      justify-center
                      rounded-xl
                      ${
                        [3,8,15].includes(index)
                        ?
                        "bg-indigo-600 text-white"
                        :
                        "bg-slate-50 dark:bg-slate-800"
                      }
                    `}

                  >

                    {day}

                  </div>


                ))
              }


            </div>



            <div className="
              mt-8
              space-y-3
            ">


              <div className="
                flex
                items-center
                gap-3
                text-sm
              ">

                <span className="
                  w-2
                  h-2
                  rounded-full
                  bg-indigo-600
                "/>

                Sprint Planning

              </div>



              <div className="
                flex
                items-center
                gap-3
                text-sm
              ">

                <span className="
                  w-2
                  h-2
                  rounded-full
                  bg-purple-600
                "/>

                Product Review

              </div>


            </div>


          </motion.div>







          {/* ACTIVITY */}


          <motion.div

            variants={fadeUp}

            className="
              rounded-[32px]
              border
              border-slate-200
              dark:border-slate-800
              bg-white
              dark:bg-slate-900
              p-8
              shadow-xl
            "

          >


            <p className="
              text-sm
              text-slate-500
            ">

              Recent Updates

            </p>


            <h3 className="
              mt-2
              text-2xl
              font-black
            ">

              Activity Timeline

            </h3>



            <div className="
              mt-8
              space-y-6
            ">


              {[
                "Created new project",
                "Completed dashboard UI",
                "Added team member",
                "Updated task priority"

              ].map((item,index)=>(


                <div
                  key={item}
                  className="
                    flex
                    gap-4
                  "
                >


                  <div className="
                    w-10
                    h-10
                    rounded-full
                    bg-indigo-100
                    dark:bg-indigo-500/20
                    text-indigo-600
                    flex
                    items-center
                    justify-center
                    font-bold
                  ">

                    {index+1}

                  </div>


                  <div>

                    <p className="
                      font-semibold
                    ">

                      {item}

                    </p>


                    <span className="
                      text-sm
                      text-slate-500
                    ">

                      Recently updated

                    </span>

                  </div>



                </div>


              ))}


            </div>


          </motion.div>



        </motion.div>


      </section>

            {/* ANALYTICS SECTION */}

      <section className="
        w-[92%]
        max-w-7xl
        mx-auto
        py-24
      ">


        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once:true }}
          variants={container}
          className="
            grid
            lg:grid-cols-2
            gap-12
            items-center
          "
        >


          {/* ANALYTICS CARD */}

          <motion.div
            variants={fadeUp}
            className="
              rounded-[32px]
              border
              border-slate-200
              dark:border-slate-800
              bg-white
              dark:bg-slate-900
              p-8
              shadow-xl
            "
          >

            <div className="
              flex
              justify-between
              items-center
            ">

              <div>

                <p className="
                  text-sm
                  text-slate-500
                ">
                  Performance
                </p>

                <h3 className="
                  text-2xl
                  font-black
                ">
                  Analytics
                </h3>

              </div>


              <div className="
                px-4
                py-2
                rounded-full
                bg-green-100
                dark:bg-green-500/20
                text-green-600
                text-sm
                font-semibold
              ">
                +24%
              </div>

            </div>



            <div className="
              mt-10
              flex
              items-end
              gap-4
              h-48
            ">

              {
                [40,65,55,85,70,95,80].map((height,index)=>(

                  <div
                    key={index}
                    className="
                      flex-1
                      rounded-t-xl
                      bg-gradient-to-t
                      from-indigo-600
                      to-purple-500
                    "
                    style={{
                      height:`${height}%`
                    }}
                  />

                ))
              }

            </div>


            <div className="
              mt-6
              flex
              justify-between
              text-sm
              text-slate-500
            ">

              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>

            </div>


          </motion.div>





          {/* TEXT */}

          <motion.div
            variants={fadeUp}
          >

            <span className="
              text-indigo-600
              font-semibold
              uppercase
              tracking-[3px]
              text-sm
            ">
              Insights
            </span>


            <h2 className="
              mt-5
              text-4xl
              md:text-5xl
              font-black
            ">
              Understand your team's productivity
            </h2>


            <p className="
              mt-6
              text-lg
              leading-8
              text-slate-600
              dark:text-slate-300
            ">
              Track completed tasks, monitor progress,
              and discover where your workflow can improve.
            </p>


            <div className="
              mt-8
              grid
              grid-cols-2
              gap-4
            ">


              {
                [
                  {
                    title:"Completed",
                    value:"248"
                  },
                  {
                    title:"Efficiency",
                    value:"92%"
                  },
                  {
                    title:"Projects",
                    value:"36"
                  },
                  {
                    title:"Members",
                    value:"14"
                  }

                ].map((item)=>(


                  <div
                    key={item.title}
                    className="
                      p-5
                      rounded-2xl
                      bg-slate-100
                      dark:bg-slate-800
                    "
                  >

                    <p className="
                      text-sm
                      text-slate-500
                    ">
                      {item.title}
                    </p>


                    <h3 className="
                      mt-2
                      text-2xl
                      font-black
                    ">
                      {item.value}
                    </h3>

                  </div>


                ))
              }


            </div>


          </motion.div>


        </motion.div>


      </section>






      {/* FEATURES */}

      <section className="
        w-[92%]
        max-w-7xl
        mx-auto
        py-24
      ">


        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{once:true}}
          variants={container}
          className="
            text-center
          "
        >


          <motion.span
            variants={fadeUp}
            className="
              text-indigo-600
              font-semibold
              uppercase
              tracking-[3px]
              text-sm
            "
          >
            Why WorkPilot
          </motion.span>



          <motion.h2
            variants={fadeUp}
            className="
              mt-5
              text-4xl
              md:text-5xl
              font-black
            "
          >
            Built for modern workflows
          </motion.h2>



        </motion.div>





        <motion.div

          initial="hidden"
          whileInView="show"
          viewport={{once:true}}
          variants={container}

          className="
            mt-14
            grid
            md:grid-cols-3
            gap-8
          "

        >


          {
            [
              {
                title:"Fast Collaboration",
                desc:"Keep everyone aligned with shared projects and real-time updates."
              },

              {
                title:"Powerful Organization",
                desc:"Manage tasks, deadlines and priorities from one workspace."
              },

              {
                title:"Secure Workspace",
                desc:"Your projects stay protected with modern authentication."
              }

            ].map((item)=>(


              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{
                  y:-8
                }}
                className="
                  p-8
                  rounded-[30px]
                  border
                  border-slate-200
                  dark:border-slate-800
                  bg-white
                  dark:bg-slate-900
                  shadow-lg
                "
              >


                <h3 className="
                  text-2xl
                  font-black
                ">
                  {item.title}
                </h3>


                <p className="
                  mt-4
                  leading-8
                  text-slate-600
                  dark:text-slate-300
                ">
                  {item.desc}
                </p>


              </motion.div>


            ))
          }


        </motion.div>


      </section>





      {/* TESTIMONIALS */}

      <section className="
        w-[92%]
        max-w-7xl
        mx-auto
        py-24
      ">


        <motion.h2

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{once:true}}

          className="
            text-center
            text-4xl
            md:text-5xl
            font-black
            mb-14
          "
        >

          Trusted by productive teams

        </motion.h2>




        <div className="
          grid
          md:grid-cols-3
          gap-8
        ">


          {
            [
              {
                text:"WorkPilot made our workflow cleaner and easier to manage.",
                role:"Frontend Developer"
              },

              {
                text:"The Kanban experience feels simple and extremely effective.",
                role:"Project Manager"
              },

              {
                text:"A beautiful balance between simplicity and productivity.",
                role:"UI Designer"
              }

            ].map((item)=>(


              <div
                key={item.role}
                className="
                  rounded-[30px]
                  border
                  border-slate-200
                  dark:border-slate-800
                  bg-white
                  dark:bg-slate-900
                  p-8
                  shadow-lg
                "
              >


                <p className="
                  leading-8
                  text-slate-600
                  dark:text-slate-300
                ">
                  "{item.text}"
                </p>


                <h4 className="
                  mt-6
                  font-bold
                ">
                  {item.role}
                </h4>


              </div>


            ))
          }


        </div>


      </section>

            {/* FINAL CTA */}

      <section className="
        w-[92%]
        max-w-7xl
        mx-auto
        py-24
      ">


        <motion.div

          initial="hidden"
          whileInView="show"
          viewport={{once:true}}
          variants={container}

          className="
            relative
            overflow-hidden
            rounded-[40px]
            bg-gradient-to-br
            from-indigo-600
            to-purple-600
            px-8
            py-16
            text-center
            text-white
          "

        >


          <div className="
            absolute
            inset-0
            bg-white/10
            blur-3xl
          " />


          <motion.div variants={fadeUp}
            className="
              relative
              z-10
            "
          >


            <h2 className="
              text-4xl
              md:text-6xl
              font-black
            ">

              Ready to transform your workflow?

            </h2>


            <p className="
              mt-6
              max-w-2xl
              mx-auto
              text-lg
              text-indigo-100
            ">

              Start managing projects smarter with a workspace
              built for productivity and collaboration.

            </p>



            <button

              onClick={() => navigate("/signup")}

              className="
                mt-10
                px-10
                py-4
                rounded-2xl
                bg-white
                text-indigo-600
                font-bold
                hover:scale-105
                transition
              "

            >

              Get Started

            </button>


          </motion.div>


        </motion.div>


      </section>







      {/* FOOTER */}

      <footer className="
        border-t
        border-slate-200
        dark:border-slate-800
        bg-white
        dark:bg-gray-950
      ">


        <div className="
          w-[92%]
          max-w-7xl
          mx-auto
          py-14
          grid
          md:grid-cols-4
          gap-10
        ">



          {/* BRAND */}

          <div>


            <h3 className="
              text-2xl
              font-black
            ">

              WorkPilot

            </h3>


            <p className="
              mt-4
              text-slate-500
              leading-7
            ">

              A modern project management platform
              designed to help teams build better.

            </p>


          </div>





          {/* PRODUCT */}

          <div>

            <h4 className="
              font-bold
              mb-4
            ">

              Product

            </h4>


            <ul className="
              space-y-3
              text-slate-500
            ">

              <li>
                Dashboard
              </li>

              <li>
                Projects
              </li>

              <li>
                Analytics
              </li>

              <li>
                Calendar
              </li>

            </ul>


          </div>






          {/* COMPANY */}

          <div>

            <h4 className="
              font-bold
              mb-4
            ">

              Company

            </h4>


            <ul className="
              space-y-3
              text-slate-500
            ">

              <li>
                About
              </li>

              <li>
                Features
              </li>

              <li>
                Contact
              </li>

              <li>
                Support
              </li>


            </ul>


          </div>







          {/* SOCIAL */}

          <div>


            <h4 className="
              font-bold
              mb-4
            ">

              Connect

            </h4>



            <p className="
              text-slate-500
              leading-7
            ">

              Follow updates and improvements
              of WorkPilot.

            </p>



            <div className="
              flex
              gap-4
              mt-6
            ">


              <div className="
                w-10
                h-10
                rounded-xl
                bg-slate-100
                dark:bg-slate-800
                flex
                items-center
                justify-center
              ">

                in

              </div>


              <div className="
                w-10
                h-10
                rounded-xl
                bg-slate-100
                dark:bg-slate-800
                flex
                items-center
                justify-center
              ">

                X

              </div>



              <div className="
                w-10
                h-10
                rounded-xl
                bg-slate-100
                dark:bg-slate-800
                flex
                items-center
                justify-center
              ">

                GH

              </div>



            </div>


          </div>



        </div>






        <div className="
          border-t
          border-slate-200
          dark:border-slate-800
          py-6
          text-center
          text-sm
          text-slate-500
        ">


          © {new Date().getFullYear()} WorkPilot. All rights reserved.


        </div>


      </footer>

          

    </div>
  );
}

export default Home;