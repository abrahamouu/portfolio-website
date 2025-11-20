import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Rovera | Real-Time TCP-Controlled UGV Platform",
    description:
      "Rovera is a high-speed, sensor-driven micro-rover system that uses TCP socket communication to enable reliable real-time control, telemetry streaming, and autonomous navigation experimentation.",
    image: "/projects/project5.png",
    tags: ["ReactJS", "TailWindCSS", "API"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Embedded System | Building Management System",
    description:
      "An IoT-based Building Management System in Python that automates HVAC and lighting using sensor data and multithreading for real-time responsiveness.",
    image: "/projects/project1.png",
    tags: ["Python", "Multi-Threading", "API"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "MIPS Pipelined Processor",
    description:
      "Designed and implemented a 5-stage pipelined MIPS processor in Verilog, including hazard detecCon and forwarding units to handle structural, data, and control hazards",
    image: "/projects/project2.png",
    tags: ["Verilog", "Hazard Control", "Unit Testing"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Movie Lab Video Processing(C/C++) ",
    description:
      "Developed a C/C++ video processing tool that applied image filters, color conversions, and frame transformations to enhance and analyze YUV-format movies.",
    image: "/projects/project3.png",
    tags: ["C/C++", "YUV->RGB", "Algorithms"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 5,
    title: "Autonomous Robot with Object Detection",
    description:
      "Built an autonomous rover in Arduino with object detection and path-tracing capabilities using PixyCam vision and infrared sensors.",
    image: "/projects/project4.png",
    tags: ["Arduino", "Self-Navigation", "Embedded Systems"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects :)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/abrahamouu"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
