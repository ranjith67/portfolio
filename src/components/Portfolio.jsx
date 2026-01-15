import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ExternalLink,
  Rocket,
  Orbit,
  Globe,
} from "lucide-react";

const Portfolio = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const wormholeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollTop / docHeight);
    };

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * canvas.width,
      size: Math.random() * 2,
    }));

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.z -= 2;
        if (star.z <= 0) {
          star.z = canvas.width;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }

        const x =
          (star.x - canvas.width / 2) * (canvas.width / star.z) +
          canvas.width / 2;
        const y =
          (star.y - canvas.height / 2) * (canvas.width / star.z) +
          canvas.height / 2;
        const size = (1 - star.z / canvas.width) * star.size * 3;

        ctx.fillStyle = `rgba(255, 255, 255, ${1 - star.z / canvas.width})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  useEffect(() => {
    const canvas = wormholeRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 800;

    let rotation = 0;

    const drawWormhole = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      for (let i = 0; i < 12; i++) {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(((rotation + i * 30) * Math.PI) / 180);

        const radius = 50 + i * 30;
        const gradient = ctx.createRadialGradient(
          0,
          0,
          radius - 20,
          0,
          0,
          radius
        );
        gradient.addColorStop(0, "rgba(100, 181, 246, 0)");
        gradient.addColorStop(0.5, `rgba(100, 181, 246, ${0.3 - i * 0.02})`);
        gradient.addColorStop(1, "rgba(25, 118, 210, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      rotation += 0.5;
      requestAnimationFrame(drawWormhole);
    };

    drawWormhole();
  }, []);

  const projects = [
    {
      name: "THE FINDY",
      mission: "ENDURANCE",
      description:
        "Navigate the vastness of property space. A platform where buyers and sellers exist in different orbits, yet connect through gravitational pull of perfect matches.",
      tech: ["Laravel", "React", "PostgreSQL", "Redis", "AWS"],
      link: "https://thefindy.com/",
      planet: "🪐",
    },
    {
      name: "BAHACRM",
      mission: "RANGER",
      description:
        "Mission control for delivery operations. Track packages across space-time, manage crew assignments, and ensure every delivery reaches its destination.",
      tech: ["Laravel", "React", "MySQL", "Real-time"],
      link: "https://bahacrm.com/",
      planet: "🌍",
    },
    {
      name: "AI PHOTO BOOTH",
      mission: "LANDER",
      description:
        "Quantum identity transformation. Faces swap at light speed, creating infinite possibilities across parallel event universes.",
      tech: ["PHP", "React.js", "AI/ML", "Firebase"],
      link: null,
      planet: "🌙",
    },
    {
      name: "LOGISTICS APP",
      mission: "COOPER STATION",
      description:
        "Real-time communication across vast distances. Field agents receive transmissions instantaneously, proving that love is the one thing that transcends time and space.",
      tech: ["React Native", "Laravel API", "Redux"],
      link: "https://play.google.com/store/apps/details?id=com.baharnanilogistics",
      planet: "⭐",
    },
  ];

  const experiences = [
    {
      company: "Baharnani Advertising LLC",
      role: "Full Stack Developer",
      period: "APRIL 2024 - AUGUST 2025",
      year: "2024-2025",
      description:
        "Built digital spacecraft for brands to explore new marketing dimensions. Created AI-powered tools that bend the fabric of user experience.",
      orbit: 1,
    },
    {
      company: "Light House Technology LLC",
      role: "Full Stack Developer",
      period: "NOVEMBER 2022 - MARCH 2024",
      year: "2022-2024",
      description:
        "Engineered scalable architectures that could withstand the gravitational forces of massive user loads. Designed APIs that communicate faster than light.",
      orbit: 2,
    },
    {
      company: "Prime9 Technologie LLC",
      role: "Website Developer",
      period: "NOVEMBER 2021 - MAY 2022",
      year: "2021-2022",
      description:
        "The launch pad. Where the journey began. Built responsive interfaces that adapted to every viewport dimension across the digital cosmos.",
      orbit: 3,
    },
  ];

  const skills = [
    { name: "React Ecosystem", level: 95, constellation: "Orion" },
    { name: "Laravel/PHP", level: 95, constellation: "Andromeda" },
    { name: "JavaScript Universe", level: 92, constellation: "Cassiopeia" },
    { name: "Database Systems", level: 85, constellation: "Pegasus" },
    { name: "Cloud Infrastructure", level: 82, constellation: "Draco" },
    { name: "AI/ML Integration", level: 80, constellation: "Cygnus" },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <canvas ref={canvasRef} className="fixed inset-0 z-0" />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <canvas ref={wormholeRef} className="w-full h-full" />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute text-6xl opacity-30 transition-all duration-300"
            style={{
              left: `${20 + mousePos.x * 0.02}%`,
              top: `${30 + mousePos.y * 0.02}%`,
            }}
          >
            🪐
          </div>
          <div
            className="absolute text-4xl opacity-20 transition-all duration-300"
            style={{
              right: `${15 + mousePos.x * 0.015}%`,
              top: `${60 + mousePos.y * 0.015}%`,
            }}
          >
            🌍
          </div>
          <div
            className="absolute text-5xl opacity-25 transition-all duration-300"
            style={{
              left: `${70 + mousePos.x * 0.01}%`,
              bottom: `${20 + mousePos.y * 0.01}%`,
            }}
          >
            🌙
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-12">
            <h1
              className="text-8xl md:text-[12rem] font-black mb-4 tracking-tighter"
              style={{
                textShadow:
                  "0 0 80px rgba(100, 181, 246, 0.8), 0 0 120px rgba(25, 118, 210, 0.6)",
                fontFamily: "system-ui",
              }}
            >
              RANJITH
            </h1>
            <div className="h-1 w-96 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-8" />
            <p className="text-3xl md:text-5xl font-light tracking-[0.3em] text-blue-400 mb-6">
              FULL STACK DEVELOPER
            </p>
            <p className="text-xl md:text-2xl text-gray-400 tracking-widest px-4">
              "We used to look up at the sky and wonder at our place in the
              stars.
              <br />
              Now we just look down and worry about our place in the code."
            </p>
          </div>

          <div className="relative w-80 h-80 mx-auto mb-16">
            <div
              className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-spin"
              style={{ animationDuration: "20s" }}
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50" />
            </div>
            <div
              className="absolute inset-8 rounded-full border-2 border-blue-400/20 animate-spin"
              style={{
                animationDuration: "15s",
                animationDirection: "reverse",
              }}
            >
              <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-5 h-5 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
            </div>
            <div
              className="absolute inset-16 rounded-full border-2 border-blue-300/10 animate-spin"
              style={{ animationDuration: "10s" }}
            >
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-300 rounded-full shadow-lg shadow-blue-300/50" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full shadow-2xl shadow-blue-500/50 flex items-center justify-center text-4xl animate-pulse">
                🚀
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="mailto:ranjithmadival678@gmail.com"
              className="group relative px-12 py-5 bg-blue-600 font-bold text-xl tracking-wider overflow-hidden transform hover:scale-105 transition-all"
            >
              <span className="relative flex items-center justify-center gap-3">
                <Mail size={24} />
                INITIATE CONTACT
              </span>
            </a>
            <a
              href="#projects"
              className="px-12 py-5 border-2 border-blue-500 font-bold text-xl tracking-wider hover:bg-blue-500/20 transition-all flex items-center justify-center gap-3"
            >
              <Rocket size={24} />
              EXPLORE MISSIONS
            </a>
          </div>

          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/ranjith67"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full border border-blue-500/50 hover:border-blue-500 transition-all"
            >
              <Github size={28} />
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://www.linkedin.com/in/ranjith-salian2a0519201"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full border border-blue-500/50 hover:border-blue-500 transition-all"
            >
              <Linkedin size={28} />
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 border border-blue-500/50 mb-6 text-sm tracking-[0.5em] text-blue-400">
              ASTRONAUT PROFILE
            </div>
            <h2
              className="text-6xl md:text-8xl font-black mb-8"
              style={{ textShadow: "0 0 40px rgba(100, 181, 246, 0.6)" }}
            >
              MISSION COMMANDER
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-900/20 blur-2xl" />
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Globe className="text-blue-400" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold">BIOGRAPHY</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  Full-stack developer with 3+ years exploring the digital
                  cosmos. Specialized in Laravel, React, and React Native. Built
                  systems that don't just function—they evolve, adapt, and
                  survive in the harsh vacuum of production environments.
                </p>
                <div className="inline-block px-6 py-3 bg-blue-500/20 border border-blue-500/50 text-blue-400 font-mono text-sm">
                  STATUS: SEEKING NEW HORIZONS
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-blue-500/20 blur-2xl" />
              <div className="relative bg-gradient-to-br from-black to-gray-900 border border-blue-500/30 p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Orbit className="text-blue-400" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold">COORDINATES</h3>
                </div>
                <div className="space-y-4 text-lg">
                  <div className="flex items-center gap-4 text-gray-300">
                    <Phone size={20} className="text-blue-400" />
                    <span>+91 63644 97462</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300">
                    <Mail size={20} className="text-blue-400" />
                    <span className="text-sm">ranjithmadival678@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300">
                    <MapPin size={20} className="text-blue-400" />
                    <span>INDIA, EARTH</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300">
                    <Calendar size={20} className="text-blue-400" />
                    <span>21.08.2001</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 border border-blue-500/50 mb-6 text-sm tracking-[0.5em] text-blue-400">
                SKILL CONSTELLATION
              </div>
              <h3 className="text-5xl font-black">TECHNICAL UNIVERSE</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-gradient-to-br from-gray-900 to-black border border-blue-500/20 p-8 hover:border-blue-500/50 transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold mb-2">{skill.name}</h4>
                        <div className="text-xs text-blue-400 tracking-widest">
                          {skill.constellation}
                        </div>
                      </div>
                      <div className="text-4xl font-black text-blue-500">
                        {skill.level}%
                      </div>
                    </div>
                    <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"
                        style={{
                          width: `${skill.level}%`,
                          boxShadow: "0 0 20px rgba(100, 181, 246, 0.5)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-blue-500/20 rounded-full animate-spin"
              style={{
                width: `${200 + i * 200}px`,
                height: `${200 + i * 200}px`,
                animationDuration: `${20 + i * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 border border-blue-500/50 mb-6 text-sm tracking-[0.5em] text-blue-400">
              FLIGHT LOG
            </div>
            <h2
              className="text-6xl md:text-8xl font-black mb-8"
              style={{ textShadow: "0 0 40px rgba(100, 181, 246, 0.6)" }}
            >
              MISSION HISTORY
            </h2>
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative"
                style={{
                  animation: `float ${3 + index}s ease-in-out infinite`,
                }}
              >
                <div className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-blue-500/30 p-10 hover:border-blue-500 transition-all group">
                  <div className="absolute -top-6 -right-6 text-8xl opacity-20 font-black text-blue-500">
                    {exp.year.split("-")[0]}
                  </div>

                  <div className="relative z-10">
                    <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/50 text-blue-400 text-xs tracking-widest mb-6">
                      ORBIT LEVEL {exp.orbit}
                    </div>

                    <h3 className="text-4xl font-black mb-3">{exp.role}</h3>
                    <div className="text-2xl text-gray-400 mb-2">
                      {exp.company}
                    </div>
                    <div className="text-sm text-blue-400 tracking-wider mb-6">
                      {exp.period}
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      {exp.description}
                    </p>

                    <div className="flex items-center gap-3 text-blue-400">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                      <div className="text-sm tracking-widest">
                        MISSION COMPLETED
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 border border-blue-500/50 mb-6 text-sm tracking-[0.5em] text-blue-400">
              EXPLORATION LOGS
            </div>
            <h2
              className="text-6xl md:text-8xl font-black mb-8"
              style={{ textShadow: "0 0 40px rgba(100, 181, 246, 0.6)" }}
            >
              ACTIVE MISSIONS
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              "Mankind was born on Earth. It was never meant to die here. These
              are the projects that pushed beyond boundaries."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative group"
                style={{
                  animation: `float ${4 + index * 0.5}s ease-in-out infinite`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-900/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-blue-500/30 p-10 hover:border-blue-500 transition-all h-full">
                  <div className="absolute top-8 right-8 text-6xl">
                    {project.planet}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-8 right-8 p-3 bg-blue-500/20 rounded-full border border-blue-500/50 hover:bg-blue-500/40 transition-all"
                    >
                      <ExternalLink size={20} className="text-blue-400" />
                    </a>
                  )}

                  <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/50 text-blue-400 text-xs tracking-widest mb-6">
                    MISSION: {project.mission}
                  </div>

                  <h3 className="text-4xl font-black mb-6">{project.name}</h3>
                  <p className="text-gray-300 leading-relaxed text-lg mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-block px-6 py-2 border border-blue-500/50 mb-6 text-sm tracking-[0.5em] text-blue-400">
              OPEN COMMUNICATION CHANNEL
            </div>
            <h2
              className="text-6xl md:text-8xl font-black mb-8"
              style={{ textShadow: "0 0 40px rgba(100, 181, 246, 0.6)" }}
            >
              READY TO LAUNCH?
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-12">
              "Do not go gentle into that good night. Rage, rage against the
              dying of the light."
              <br />
              <br />
              Let's build something that transcends the ordinary.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="mailto:ranjithmadival678@gmail.com"
              className="px-12 py-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-black tracking-widest text-lg hover:from-blue-600 hover:to-blue-800 transition-all transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <Mail size={24} />
              SEND TRANSMISSION
            </a>
            <a
              href="https://www.linkedin.com/in/ranjith-salian2a0519201"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 border-2 border-blue-500 text-blue-400 font-black tracking-widest text-lg hover:bg-blue-500/20 transition-all flex items-center justify-center gap-3"
            >
              <Linkedin size={24} />
              CONNECT NETWORK
            </a>
          </div>

          <div className="relative w-64 h-64 mx-auto">
            <div
              className="absolute inset-0 border border-blue-500/20 rounded-full animate-spin"
              style={{ animationDuration: "30s" }}
            />
            <div
              className="absolute inset-4 border border-blue-400/20 rounded-full animate-spin"
              style={{
                animationDuration: "20s",
                animationDirection: "reverse",
              }}
            />
            <div
              className="absolute inset-8 border border-blue-300/20 rounded-full animate-spin"
              style={{ animationDuration: "15s" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe size={48} className="text-blue-500 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      <footer className="relative py-12 border-t border-blue-500/20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6">
            <div className="text-2xl font-black tracking-widest text-blue-400 mb-2">
              RANJITH
            </div>
            <div className="text-sm text-gray-500 tracking-wider">
              Full Stack Developer • Space Explorer • Code Architect
            </div>
          </div>

          <div className="flex justify-center gap-8 mb-8">
            <a
              href="https://github.com/ranjith67"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ranjith-salian2a0519201"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ranjithmadival678@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="text-xs text-gray-600 tracking-widest mb-4">
            "LOVE IS THE ONE THING WE'RE CAPABLE OF PERCEIVING THAT TRANSCENDS
            DIMENSIONS OF TIME AND SPACE"
          </div>

          <div className="text-xs text-gray-700">
            © 2026 RANJITH • INSPIRED BY CHRISTOPHER NOLAN'S INTERSTELLAR • ALL
            RIGHTS RESERVED
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
