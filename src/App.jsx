import { useState, useEffect } from "react";
// Simple replacements for shadcn components (deploy-safe)
const Card = ({ children, className }) => (
  <div className={`bg-white text-black ${className}`}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const Button = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`px-4 py-2 rounded-xl bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#334155] text-white border border-white/20 hover:opacity-90 transition ${className}`}
  >
    {children}
  </button>
);

export default function Portfolio() {
  const projects = [
    {
      name: "Islamic App",
      description:
        "A comprehensive spiritual companion built with Flutter and Clean Architecture. Features real-time GPS-based prayer times, full Quran browsing, and offline Adhkar/Tasbih. Implements BLoC/Cubit for state management, Hive for local NoSQL storage, and automated local notifications for prayer alerts.",
      github: "https://github.com/manarghareeb/Islamic-App",
      images: [
        "https://res.cloudinary.com/djbw229ze/image/upload/v1774998770/WhatsApp_Image_2026-04-01_at_00.20.51_ravepg.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1774998769/WhatsApp_Image_2026-04-01_at_00.20.51_1_gjukby.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1774998769/WhatsApp_Image_2026-04-01_at_00.20.51_2_p9xhsm.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1774998771/WhatsApp_Image_2026-04-01_at_00.20.52_eux98d.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1774998772/WhatsApp_Image_2026-04-01_at_00.20.52_1_irbszz.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1774998772/WhatsApp_Image_2026-04-01_at_00.20.52_2_sah0hi.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1774998735/WhatsApp_Image_2026-04-01_at_00.20.53_1_uk4ekz.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1774998736/WhatsApp_Image_2026-04-01_at_00.20.53_2_td1que.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1774998736/WhatsApp_Image_2026-04-01_at_00.20.53_y03u7b.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1774998769/WhatsApp_Image_2026-04-01_at_00.20.55_kws9yi.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1774998764/WhatsApp_Image_2026-04-01_at_00.20.54_qojjup.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1774998756/WhatsApp_Image_2026-04-01_at_00.20.54_1_zpbspw.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1774998757/WhatsApp_Image_2026-04-01_at_00.20.54_2_trit7e.jpg",
      ],
      video:
        "https://res.cloudinary.com/djbw229ze/video/upload/v1774998840/Islami-Demo_dneg8m.mp4",
    },
    {
      name: "Fruit Market",
      description:
        "A production-ready e-commerce platform built with Flutter and Clean Architecture. Features a multi-step checkout flow, real-time order tracking, and a persistent SQLite-based shopping cart. Implements dual push notifications (FCM & OneSignal), secure token storage, and a fully responsive UI that adapts to mobile, tablet, and landscape modes.",
      github: "https://github.com/manarghareeb/Fruits-App",
      images: [
        "https://res.cloudinary.com/djbw229ze/image/upload/v1775014205/WhatsApp_Image_2026-04-01_at_05.03.29_onhvfj.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1775014609/WhatsApp_Image_2026-04-01_at_05.36.17_mxhzrc.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1775014365/WhatsApp_Image_2026-04-01_at_05.03.28_2_ctg6gj.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1775014363/WhatsApp_Image_2026-04-01_at_05.03.27_3_goupyl.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1775014362/WhatsApp_Image_2026-04-01_at_05.03.27_2_dptsz5.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1775014247/WhatsApp_Image_2026-04-01_at_05.03.26_yqgnzz.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1775014361/WhatsApp_Image_2026-04-01_at_05.03.27_1_j05szg.jpg",
      ],
      video:
        "https://res.cloudinary.com/djbw229ze/video/upload/v1775020615/FruitApp-Demo_qiwyp5.mp4",
    },
    {
      name: "Plant Disease Detection",
      description:
        "A cross-platform Flutter application (iOS/Android/Windows) that utilizes AI and Firebase to diagnose plant diseases. It features real-time image processing, secure Firebase Authentication, and Cloud Firestore for managing scan history. Built with a feature-first architecture and integrated with an ML inference endpoint for instant diagnosis.",
      github: "https://github.com/manarghareeb/plant_detection",
      images: [
        "https://res.cloudinary.com/djbw229ze/image/upload/v1775016376/Splash_Screen_xsm3ce.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1775013460/Splash_Screen_1_burjdv.png",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1775013464/WhatsApp_Image_2026-04-01_at_05.16.15_g0v3b7.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1775013654/WhatsApp_Image_2026-04-01_at_05.19.59_1_xlinkh.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1775013654/WhatsApp_Image_2026-04-01_at_05.19.59_vy0jgj.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1775013462/WhatsApp_Image_2026-04-01_at_05.14.58_vxbajv.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1775013463/WhatsApp_Image_2026-04-01_at_05.14.58_1_wysbzf.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1775013429/WhatsApp_Image_2026-04-01_at_05.15.00_imx3qh.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1775013427/WhatsApp_Image_2026-04-01_at_05.15.00_1_nir7xq.jpg",
      ],
      video:
        "https://res.cloudinary.com/djbw229ze/video/upload/v1775012730/Plant-Demo_hkn1jl.mp4",
    },
    {
      name: "Maps App",
      description:
        "A high-performance mapping solution built with Flutter and Clean Architecture. It delivers a Google Maps-like experience using zero paid APIs—leveraging OpenStreetMap, Nominatim, and OSRM. Features include real-time GPS tracking, road-following routing, and reverse geocoding, all managed via a robust dual-Cubit BLoC architecture.",
      github: "https://github.com/manarghareeb/Maps-App",
      images: [
        "https://res.cloudinary.com/djbw229ze/image/upload/v1775009959/current_location_v3cvmp.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1775009958/search_mupcwq.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1775009956/start_location_omczhb.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1775009959/direction_b0snni.jpg",
        "https://res.cloudinary.com/djbw229ze/image/upload/v1775009957/WhatsApp_Image_2026-04-01_at_12.41.28_AM_gv8lfb.jpg",
      ],
      video:
        "https://res.cloudinary.com/djbw229ze/video/upload/v1775012136/Maps-Demo_hvxg9t.mp4",
    },
  ];

  return (
    <div
      className="min-h-screen px-6 md:px-16 py-10 text-white"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #334155 100%)",
      }}
    >
      <header className="grid md:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Manar{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Ghareeb
            </span>
          </h1>

          <p className="mt-3 text-lg text-white/80">
            🚀 Flutter Developer • AI Enthusiast
          </p>

          <p className="mt-6 text-white/80 leading-relaxed">
            I build high-performance mobile apps using Flutter, Firebase, and AI
            integration. Passionate about creating scalable products and clean
            user experiences.
          </p>

          <div className="flex gap-3 mt-6 flex-wrap">
            <a href="#contact">
              <Button className="rounded-xl px-6">Contact Me</Button>
            </a>

            <a
              href="https://drive.google.com/file/d/14PDNUjEWLiRHfGoFgmhBVI0D0vYos7kb/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="rounded-xl px-6 bg-white text-slate-900 hover:bg-gray-200">
                Download/View CV
              </Button>
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 blur-2xl opacity-40 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full"></div>
            <img
              src="https://res.cloudinary.com/djbw229ze/image/upload/v1775007289/personal_photo_2_vsyljd.png"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-2xl"
            />
          </div>
        </div>
      </header>

      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-6">Education</h2>

        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold">Banha University</h3>
            <p className="text-black/70">Bachelor of Computer Science (2025)</p>
            <p className="mt-2 text-sm">GPA: 3.22</p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-lg hover:shadow-xl transition">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Flutter Developer</h3>
              <p className="text-black/70">PureSoft • Feb 2026 - Present</p>
              <p className="text-sm text-black/60">
                Shebin El Kom, Al Minufiyah, Egypt · OnSite
              </p>
              <ul className="mt-3 text-sm text-black/80 list-disc pl-5 space-y-1">
                <li>
                  Optimized application loading speed by 25% using Bloc/Cubit
                  and performance profiling.
                </li>
                <li>
                  Transformed 15+ complex Figma designs into pixel-perfect
                  responsive screens.
                </li>
                <li>
                  Engineered a custom notification engine (FCM, OneSignal,
                  Local).
                </li>
                <li>Improved data retrieval speeds by 30% using Hive.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg hover:shadow-xl transition">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">
                Flutter Developer Intern
              </h3>
              <p className="text-black/70">
                Dr. Abdelrahman Abdelnazeer • Nov 2025 - Jan 2026
              </p>
              <p className="text-sm text-black/60">Remote</p>
              <ul className="mt-3 text-sm text-black/80 list-disc pl-5 space-y-1">
                <li>
                  Led a team of 4 developers to deliver a multi-role E-commerce
                  platform.
                </li>
                <li>
                  Reduced technical debt by 20% using Clean Architecture &
                  SOLID.
                </li>
                <li>
                  Oversaw full development lifecycle with strong UI/UX focus.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg hover:shadow-xl transition md:col-span-2">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">
                Flutter Developer Intern
              </h3>
              <p className="text-black/70">DRB • Oct 2025 - Nov 2025</p>
              <p className="text-sm text-black/60">
                El Mansoura, Ad Daqahliyah, Egypt · Remote
              </p>
              <ul className="mt-3 text-sm text-black/80 list-disc pl-5 space-y-1">
                <li>Developed and maintained apps using Flutter & Firebase.</li>
                <li>Built responsive UIs and implemented new features.</li>
                <li>
                  Integrated Firebase Auth & Firestore for real-time sync.
                </li>
                <li>Worked with REST APIs and Clean Architecture.</li>
                <li>
                  Contributed to Courier Delivery App (tracking & management).
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </section>

      <section id="contact" className="mt-24 text-center">
        <h2 className="text-3xl mb-6">Let’s Connect</h2>

        <div className="flex justify-center gap-4 flex-wrap">
          <a href="mailto:manarghareeb1973@gmail.com">
            <Button className="rounded-xl">
              Email: manarghareeb1973@gmail.com
            </Button>
          </a>

          <a href="tel:+201095486681">
            <Button className="rounded-xl">Phone: +201095486681</Button>
          </a>

          <a
            href="https://github.com/manarghareeb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="rounded-xl bg-white text-slate-900 hover:bg-gray-200">
              GitHub
            </Button>
          </a>

          <a
            href="https://www.linkedin.com/in/manar-ghareeb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="rounded-xl bg-white text-slate-900 hover:bg-gray-200">
              LinkedIn
            </Button>
          </a>
        </div>
      </section>

      <footer className="mt-20 text-center text-white/60 text-sm">
        <p>© 2026 Manar Ghareeb. All rights reserved.</p>
        <p className="mt-1">Designed & Developed by Manar Ghareeb.</p>
        <p className="mt-1">
          This website and its content are protected by copyright laws.
        </p>
      </footer>
    </div>
  );
}

function ProjectCard({ project }) {
  const [index, setIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setShowVideo(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const next = () => setIndex((i) => (i + 1) % project.images.length);
  const prev = () =>
    setIndex((i) => (i - 1 + project.images.length) % project.images.length);

  return (
    <>
      <Card className="relative z-0 rounded-2xl shadow-lg hover:scale-[1.03] hover:z-10 transition">
        <CardContent className="p-5">
          <h3 className="text-2xl font-extrabold mb-4 text-black text-center">
            {project.name}
          </h3>

          <div className="relative mx-auto w-56 h-[430px] bg-black rounded-[2rem] p-2 mb-4">
            <img
              src={project.images[index]}
              className="w-full h-full object-contain rounded-[1.5rem]"
            />

            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 text-black w-8 h-8 flex items-center justify-center rounded-full shadow hover:scale-110"
            >
              ‹
            </button>

            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 text-black w-8 h-8 flex items-center justify-center rounded-full shadow hover:scale-110"
            >
              ›
            </button>
          </div>

          <div className="flex justify-center gap-2 mb-4">
            {project.images.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === index ? "bg-blue-500" : "bg-gray-400"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              onClick={() => setShowVideo(true)}
              className="w-full rounded-xl"
            >
              Demo
            </Button>
            <a href={project.github} target="_blank" className="w-full">
              <Button className="w-full rounded-xl bg-white text-slate-900 hover:bg-gray-200">
                Code
              </Button>
            </a>
          </div>

          <p className="mt-4 text-sm text-black/80 text-center">
            {project.description}
          </p>
        </CardContent>
      </Card>

      {showVideo && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-xl w-[90%] max-w-md relative">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute right-0 top-3 bg-black text-white w-10 h-10 flex items-center justify-center rounded-full text-xl hover:scale-110"
            >
              ✕
            </button>
            <video
              src={project.video}
              controls
              autoPlay
              className="w-full rounded"
            />
          </div>
        </div>
      )}
    </>
  );
}
