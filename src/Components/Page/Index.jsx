
import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import CountUp from "react-countup";

import MoviesCarousel from "../../Components/MoviesCarousel/MoviesCarousel";

import Accenture from "../../assets/Accenture.png";
import AWS from "../../assets/AWS.png";
import Tata from "../../assets/Tata.png";

import GoogleCloud from "../../assets/Google.png";
import IBM from "../../assets/Google.png";
import Neo4j from "../../assets/Google.png";

import Work from "../../assets/Work.png";
import NF from "../../assets/NF.png";
import CF from "../../assets/CF.png";
import GM from "../../assets/GM.png";

import heroImage from "../../assets/hero-image.png";
import mailIcon from "../../assets/Google.png";

// ============================================
// CONSTANT DATA
// ============================================

const EMAIL = "gouranmol7276@gmail.com";

const EMAIL_LINK =
  "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=gouranmol7276@gmail.com";

// Internship Certificates
const internshipCertificates = [
  {
    name: "AWS Certificate",
    des: "AWS Solutions Architect Job Simulation",
    img: AWS,
    link: "https://graphacademy.neo4j.com/c/547fb93f-e682-42ca-ad58-20b18fe6c989/",
  },
  {
    name: "Accenture Certificate",
    des: "Accenture Developer Job Simulation",
    img: Accenture,
  },
  {
    name: "TATA Certificate",
    des: "TATA Data Analytics Job Simulation",
    img: Tata,
  },
];

// Google Certificates
const googleCertificates = [
  {
    name: "Google Workshop",
    des: "Bring AI to Work Workshop",
    img: Work,
    link: "https://bringaitowork.aicurated.com/pluginfile.php/1/tool_certificate/issues/1751792166/5254912238AG.pdf",
  },
];

// Neo4j Certificates
const neo4jCertificates = [
  {
    name: "Neo4j Fundamentals",
    des: "Learn about Graph databases and get started with Neo4j.",
    img: NF,
    link: "https://graphacademy.neo4j.com/c/547fb93f-e682-42ca-ad58-20b18fe6c989/",
  },
  {
    name: "Cypher Fundamentals",
    des: "Reading and Writing Data from Neo4j.",
    img: CF,
    link: "https://graphacademy.neo4j.com/c/ee4be462-4ee2-4b65-8670-8b2b398a7be5/",
  },
  {
    name: "Graph Data Modeling Fundamentals",
    des: "Learning the basics of Graph Data Modeling.",
    img: GM,
    link: "https://graphacademy.neo4j.com/c/46b4e209-ffaf-49b1-8eaf-ae6ddbae8327/",
  },
];

// Combine all certificates for the certificates section
const allCertificates = [
  ...googleCertificates,
  ...neo4jCertificates,
];

const SPLIDE_OPTIONS = {
  type: "loop",
  gap: "10rem",
  drag: false,
  arrows: false,
  pagination: false,
  autoScroll: {
    speed: 1.5,
    pauseOnHover: true,
    pauseOnFocus: true,
  },
};

const CAREER_LIST = [
  { title: "Google Cloud", year: "2025-Present" },
  { title: "Java, React", year: "2024-2025" },
  { title: "C, C++", year: "2023-2024" },
  { title: "HTML, CSS, JavaScript", year: "2021-2023" },
];

const LEARNING_TAGS = [
  "Courses",
  "Quizzes",
  "Labs",
  "Trivias",
  "Games",
];

const WORK_STATS = [
  {
    number: "150+",
    label: (
      <>
        Led 150+ Students
        <br />
        in Google Cloud Program
      </>
    ),
  },
  {
    number: "7+",
    label: "Projects Done",
  },
  {
    number: "550+",
    label: "Cloud Labs Experience",
  },
];

const CLOUD_STATS = [
  {
    count: 550,
    label: "Labs Done in Google Cloud",
  },
  {
    count: 22,
    label: "Arcade Awards Won in Google Cloud",
  },
];

const ABOUT_PARAGRAPHS = [
  "My name is Anmol Gour, and I am from Gondia, Maharashtra. I am currently pursuing my final year of B.Tech in Computer Science and Engineering from AISSMS College of Engineering, Pune, with an overall CGPA of 8.00.I have completed 6 internships and worked on 7+ projects, gaining hands-on experience in Full Stack Development using Java, Python, React.js, Node.js, JavaScript, and SQL.I have also worked on real-world projects, including a camera-based product tracking system during my internship at Abhyaz.Apart from development, I am passionate about cloud computing and teaching. I have been associated with Google Cloud Arcade for two years and run a YouTube channel where I teach Google Cloud technologies. I also achieved All India Rank 1 in the Google Student Ambassador Challenge.I consider myself a quick learner, adaptable, and passionate about technology. I look forward to applying my skills, learning from experienced professionals, and contributing to exciting projects.",
];

// ============================================
// REUSABLE COMPONENTS
// ============================================

// Section Marquee
function SectionMarquee({
  id,
  subtitle,
  title,
  repeatCount = 10,
  options = SPLIDE_OPTIONS,
}) {
  return (
    <section
      id={id}
      className="relative w-full py-[10px] pt-0 text-center"
    >
      <span className="section-subtitle mb-6 inline-block cursor-pointer rounded-full border border-[#393939] bg-[#161616] px-3 py-1 text-sm font-normal text-[#ec4634]">
        {subtitle}
      </span>

      <Splide
        options={options}
        extensions={{ AutoScroll }}
        className="w-full"
        aria-label={`${title} Marquee Slider`}
      >
        {Array.from({ length: repeatCount }, (_, index) => (
          <SplideSlide key={`${id}-${index}`}>
            <div className="section-title">{title}</div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

// Work Statistics
function WorkStats() {
  return (
    <div className="work-wrapper grid w-full grid-cols-1 justify-center gap-6 xl:grid-cols-3 xl:gap-0">
      {WORK_STATS.map(({ number, label }) => (
        <div
          key={number}
          className="work-item group flex h-[350px] w-full flex-col items-center justify-center gap-3 rounded-full border border-[#393939] transition-all duration-300 xxl:h-[300px]"
        >
          <span className="text-6xl font-bold text-white transition-colors duration-300 group-hover:text-[#ec4634] xxl:text-8xl">
            {number}
          </span>

          <h5 className="text-center text-lg font-bold text-white xxl:text-xl">
            {label}
          </h5>
        </div>
      ))}
    </div>
  );
}


// Google Cloud Profile
function GoogleCloudProfile() {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-gray-700 bg-[#1a1a1a] p-6 text-center shadow-[0_0_25px_#ec463426]">
      <h4 className="mb-5 text-sm font-semibold text-white">
        My Google Cloud Profile
      </h4>

      <img
        src={mailIcon}
        className="h-[150px] w-[150px] object-contain"
        alt="Google Cloud"
        loading="lazy"
      />

      <a
        href="https://www.cloudskillsboost.google/public_profiles/f2e61d0a-4962-4935-a055-9f6c5fcd1257"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 rounded-md bg-blue-600 px-5 py-2 text-white shadow transition duration-200 hover:bg-blue-700"
      >
        View Profile
      </a>
    </div>
  );
}

// ============================================
// MAIN HOME PAGE
// ============================================

function Index() {
  return (
    <>
      {/* Background Grid Lines */}
      <div className="pointer-events-none fixed inset-0 z-[1] hidden lg:block">
        {[20, 50, 80].map((position) => (
          <span
            key={position}
            className="absolute top-0 h-screen w-px bg-[--thin-border]"
            style={{ left: `${position}%` }}
          />
        ))}
      </div>

      {/* ================================== */}
      {/* HERO SECTION */}
      {/* ================================== */}

      <section className="hero px-[8%] pt-0 lg:px-[12%]">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Hero Content */}
          <div className="hero-content flex-1 rounded-lg pt-[150px] text-white">
            <div className="hero-content-box flex h-[550px] flex-col justify-between">
              <div className="flex flex-wrap items-start gap-2 text-xl">
                I'm

                <h1 className="hero-text font-jakarta text-7xl font-semibold sm:text-8xl lg:text-9xl">
                  Anmol
                  <span className="hero-sec-text font-jakarta text-[--primary-color]">
                    {" "}Gour.
                  </span>
                </h1>
              </div>

              <div className="hero-bottom-title">
                <h5 className="text-xl text-gray-400">
                  Feel Free To Contact Me
                </h5>

                <h2 className="mt-2 break-all text-2xl sm:text-4xl">
                  <a
                    href={EMAIL_LINK}
                    className="transition-colors duration-300 hover:text-[#ec4634]"
                  >
                    {EMAIL}
                  </a>
                </h2>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image flex-1 rounded-lg p-6 text-white">
            <img
              src={heroImage}
              className="hero-img h-full w-full object-contain"
              alt="Anmol Gour portfolio hero"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* ================================== */}
      {/* ABOUT SECTION */}
      {/* ================================== */}

      <SectionMarquee
        id="About"
        subtitle="About Me"
        title="About Me"
      />

      <section className="work w-full space-y-20 px-[8%] pb-[150px] pt-[50px] lg:px-[12%]">
        {/* About Description */}
        <div className="work-content w-full text-center">
          <div className="space-y-5 text-base font-medium leading-[24px] text-white sm:text-lg sm:leading-[32px] lg:text-xl lg:leading-[40px] xl:text-2xl xl:leading-[48px]">
            {ABOUT_PARAGRAPHS.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Work Statistics */}
        <WorkStats />
      </section>

      {/* ================================== */}
      {/* INTERNSHIP SECTION */}
      {/* ================================== */}

      <SectionMarquee
        id="In"
        subtitle="Internship Certificates"
        title="Internship"
      />

      <section className="work w-full space-y-10 px-[8%] pb-[50px] pt-[50px] lg:px-[12%]">
        <div className="work-content w-full text-center">
          <p className="text-base font-medium leading-[24px] text-white sm:text-lg sm:leading-[32px] lg:text-xl lg:leading-[40px] xl:text-2xl xl:leading-[48px]">
            I've gained practical experience through job simulation
            micro-internships with top companies like TATA, Accenture,
            and AWS, where I got to work on real-world business scenarios.
          </p>
        </div>
      </section>

      {/* Internship Carousel */}
      <MoviesCarousel items={internshipCertificates} />

      {/* ================================== */}
      {/* MY LEARNING SECTION */}
      {/* ================================== */}

      <SectionMarquee
        id="Le"
        subtitle="My Learning"
        title="My Learning"
      />

      <section className="work w-full px-[8%] pb-[100px] pt-[50px] lg:px-[12%]">
        <div className="work-content space-y-5 text-center">
          <p className="text-base font-medium leading-[24px] text-white sm:text-lg sm:leading-[32px] lg:text-xl lg:leading-[40px] xl:text-2xl xl:leading-[48px]">
            I successfully completed the Google Cloud Arcade Facilitator
            Program, a structured campaign where participants earn digital
            badges and Arcade points through hands-on labs, trivia, and
            game-based learning challenges.

            During my participation, I actively supported peers, friends,
            and students with practical guidance on completing labs and
            quizzes. Additionally, I created concise YouTube tutorials on
            Google Cloud, breaking down complex cloud concepts and
            reinforcing lab-based learning.

            This combination of program completion, peer mentorship,
            and content creation demonstrates my commitment to personal
            growth and community support within the Google Cloud ecosystem.
          </p>
        </div>
      </section>

      {/* ================================== */}
      {/* INFORMATION SECTION */}
      {/* ================================== */}

     
<section className="relative z-10 flex justify-center items-center px-[8%] py-20 pb-[130px] font-[var(--plus-Jakarta-font)] text-white">
  <div className="w-full max-w-4xl space-y-10">
    <GoogleCloudProfile />
  </div>
</section>


      {/* ================================== */}
      {/* CERTIFICATES SECTION */}
      {/* ================================== */}

      <SectionMarquee
        id="Ce"
        subtitle="My Certificates"
        title="My Certificates"
      />

      <section className="rounded-md px-4 py-2 pb-[13px] backdrop-blur-sm">
        <MoviesCarousel items={allCertificates} />
      </section>

      {/* ================================== */}
      {/* CONTACT SECTION */}
      {/* ================================== */}

      <SectionMarquee
        id="Cu"
        subtitle="Connect With Me"
        title="Connect With Me"
      />
    </>
  );
}

export default Index;
