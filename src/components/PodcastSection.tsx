import { motion } from "framer-motion";
import { ExternalLink, Mic, Calendar, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const podcasts = [
  {
    title: "Inside the Startup Ecosystem",
    date: "17 Mar 2026",
    speaker: "Vinutha Naga Rallapalli",
    description: "Insights into startup journey, funding, and entrepreneurship.",
    insights: ["Startup validation process", "Investor & funding basics"],
    link: "https://drive.google.com/file/d/1G6dQn6F9cAxJocfK0-wFPQ6ZVpO1E2uz/view?usp=sharing",
  },
  {
    title: "Building Job-Ready Skills in AI Era",
    date: "27 Jan 2026",
    speaker: "Dheeraj Avvari",
    description: "Practical skills needed to succeed in AI-driven job market.",
    insights: ["Industry-ready skills", "AI in real-world"],
    link: "https://drive.google.com/file/d/1Z60O8SZUhEeav_RgCjtaxC1JshD98CcG/view?usp=drive_link",
  },
  {
    title: "LLMs & Agentic AI 101",
    date: "13 Sep 2025",
    speaker: "Drishti Wali",
    description: "Overview of LLMs, NLP, and modern AI systems.",
    insights: ["AI fundamentals", "Future tech trends"],
    link: "https://drive.google.com/file/d/10NyrF6f2ZWKmefYMLHsKG9ojzpuRdkQn/view?usp=drive_link",
  },
  {
    title: "Product Thinking & Real-World Skills",
    date: "16 Aug 2025",
    speaker: "Mrinal Ahlawat (Google)",
    description: "What top companies expect from engineers.",
    insights: ["Product mindset", "Real-world problem solving"],
    link: "https://drive.google.com/file/d/1-ADDF8zxbJQxZa39fQ-ZlHklILbne_nR/view?usp=drive_link",
  },
  {
    title: "Interview Hacks from Hiring Leader",
    date: "27 Jun 2025",
    speaker: "Harshal Nagar",
    description: "Tips to crack interviews and get hired.",
    insights: ["Resume optimization", "Interview strategy"],
    link: "https://drive.google.com/file/d/1_ERJTU_9yxInn_89pOqURXD8HvrCrdym/view?usp=drive_link",
  },
  {
    title: "Think Like a CEO",
    date: "17 May 2025",
    speaker: "Kishore Indukuri",
    description: "Leadership and entrepreneurial mindset development.",
    insights: ["Strategic thinking", "Leadership mindset"],
    link: "https://drive.google.com/file/d/1sHDdvlLPkDUpJC4RgesPZO_w1DzB_OpU/view?usp=drive_link",
  },
  {
    title: "Autonomous Vehicles Career",
    date: "12 Apr 2025",
    speaker: "Shinpei Kato",
    description: "Future opportunities in self-driving tech industry.",
    insights: ["Robotics careers", "Mobility innovation"],
    link: "https://drive.google.com/file/d/1S6Y5mDlycsni4P3mEIQz0d-vgsgLZb1O/view?usp=drive_link",
  },
  {
    title: "Brain Fitness for High Achievers",
    date: "18 Mar 2025",
    speaker: "Dr. Patrick Porter",
    description: "Mental performance and productivity strategies.",
    insights: ["Focus improvement", "Cognitive performance"],
    link: "https://drive.google.com/file/d/1hoFMytVlL5fBY1yu2321oqAjqS2oO8l7/view?usp=drive_link",
  },
  {
    title: "Skills for AI Jobs",
    date: "20 Feb 2025",
    speaker: "Pranjal Singh",
    description: "Skills required to break into AI careers.",
    insights: ["AI fundamentals", "Career readiness"],
    link: "https://drive.google.com/file/d/1pSppXq1Q1qNakRyy9hhX1bvSEUlh_UyI/view?usp=drive_link",
  },
  {
    title: "Most In-Demand Engineer 2025",
    date: "9 Jan 2025",
    speaker: "Lalitha Tallapragada",
    description: "Career strategies for future engineers.",
    insights: ["Industry demand", "Skill development"],
    link: "https://drive.google.com/file/d/1IblUnBePkqI0a-GLWB7h3s8wdNCsK7Fe/view?usp=drive_link",
  },
  {
    title: "World-Class Engineer",
    date: "21 Nov 2024",
    speaker: "Mohan KRK",
    description: "Becoming a top-level engineer with proven strategies.",
    insights: ["Engineering excellence", "Growth mindset"],
    link: "https://drive.google.com/file/d/1ZZSRFwi7izWv-_ihchVlkhHnUjzDjopA/view?usp=drive_link",
  },
  {
    title: "Interview Game Changer",
    date: "30 Oct 2024",
    speaker: "Madhura Gade",
    description: "What employers really expect in interviews.",
    insights: ["Employer psychology", "Interview tactics"],
    link: "https://drive.google.com/file/d/1lGqY88tM9ooGIwktt3ZV0JR77_pZ8KNK/view?usp=drive_link",
  },
  {
    title: "Beyond Tech Skills",
    date: "9 Oct 2024",
    speaker: "Kalyan Chandrapu",
    description: "Importance of soft skills in tech career.",
    insights: ["Communication", "Emotional intelligence"],
    link: "https://drive.google.com/file/d/1-p9RsIYZ2KoJjgpl17Q5y7MM6c3XQpjq/view?usp=drive_link",
  },
  {
    title: "NxtCode 7 Under 7 Challenge",
    date: "1 Oct 2024",
    speaker: "NxtWave",
    description: "Competitive coding challenge.",
    insights: ["Problem-solving", "Speed coding"],
    link: "https://drive.google.com/file/d/1pv_olh45AXRgZAEojAfe4wp5joqnSlgL/view?usp=drive_link",
  },
  {
    title: "Tips to Crack Data Scientist Interview",
    date: "17 Jul 2024",
    speaker: "Abhishek Das",
    description: "Preparing for data science interviews.",
    insights: ["Case studies", "ML questions"],
    link: "https://drive.google.com/file/d/1I4o1TzxXy-7fnLlR6KBAtunXlcSQayGi/view?usp=drive_link",
  },
  {
    title: "Project Management 101",
    date: "3 Jul 2024",
    speaker: "Vinay Nandina",
    description: "Basics of project management.",
    insights: ["Planning", "Stakeholder management"],
    link: "https://drive.google.com/file/d/1S8zZVxqCLoqhAB1rpjwCONH3ih3JTHgY/view?usp=drive_link",
  },
  {
    title: "How to Become Data Scientist at Microsoft",
    date: "18 Jun 2024",
    speaker: "Tezan Sahu",
    description: "Microsoft data science career insights.",
    insights: ["Skills required", "Hiring process"],
    link: "https://drive.google.com/file/d/1GWwsV_04QhmxpPdyVspdMj4-p0nA93n6/view?usp=drive_link",
  },
  {
    title: "7 Habits to Become Successful",
    date: "16 Apr 2024",
    speaker: "Krishna Raghavan",
    description: "Success habits and leadership mindset.",
    insights: ["Discipline", "Long-term vision"],
    link: "https://drive.google.com/file/d/1lsgnRne38Lt6U7oyPbkF7xKWvb8R5jzf/view?usp=drive_link",
  },
  {
    title: "Fundamentals of Software Engineering",
    date: "27 Feb 2024",
    speaker: "Ritesh Shah",
    description: "Core software engineering concepts.",
    insights: ["Clean code", "Development lifecycle"],
    link: "https://drive.google.com/file/d/1wouL7YUx7G8ONaIaXrj_e0OJji1BmB2L/view?usp=drive_link",
  },
  {
    title: "Product Management Blueprint",
    date: "14 Feb 2024",
    speaker: "Sandeep Chadda",
    description: "Product management fundamentals.",
    insights: ["Product strategy", "Roadmaps"],
    link: "https://drive.google.com/file/d/1O4l-RzLa-Mj2mTzpphhmhwjnKqlzczCd/view?usp=drive_link",
  },
  {
    title: "Building Career in AI",
    date: "9 Jan 2024",
    speaker: "Ankur Debnath",
    description: "Starting a career in AI.",
    insights: ["AI roadmap", "Industry skills"],
    link: "https://drive.google.com/file/d/1Ehp50q7XlvyjVc8Gda0xPWhdeJR9Mumf/view?usp=drive_link",
  },
  {
    title: "Internet of Things",
    date: "6 Dec 2023",
    speaker: "Johan Stokking",
    description: "IoT concepts and applications.",
    insights: ["IoT basics", "Real-world usage"],
    link: "https://drive.google.com/file/d/1lDhVvgT9_aggNNwd0zKNr9w6j51dwoKI/view?usp=drive_link",
  },
  {
    title: "Becoming Security Engineer",
    date: "21 Nov 2023",
    speaker: "Sandeep Bhandari",
    description: "Cybersecurity career guidance.",
    insights: ["Security basics", "Career path"],
    link: "https://drive.google.com/file/d/1GC98jknbQjq6uF8CkHChOQBLvv6JT0Xw/view?usp=drive_link",
  },
  {
    title: "AWS Fundamentals",
    date: "17 Oct 2023",
    speaker: "Irshad Chouhan",
    description: "AWS and cloud computing basics.",
    insights: ["Cloud services", "Career path"],
    link: "https://drive.google.com/file/d/1qyx70l-ypGcgnBBcO-43FHdWaKRytQ6x/view?usp=drive_link",
  },
  {
    title: "Data Infrastructure at LinkedIn",
    date: "6 Sep 2023",
    speaker: "Arun Mahapatro",
    description: "Scalable data systems at LinkedIn.",
    insights: ["Big data", "Scalability"],
    link: "https://drive.google.com/file/d/1jFdvhgnCWpmHr8Eg7LBMa_SslqlXI7zr/view?usp=drive_link",
  },
  {
    title: "Data Science 101",
    date: "16 Aug 2023",
    speaker: "Karthikeya Racharla",
    description: "Basics of data science.",
    insights: ["Data analysis", "Real applications"],
    link: "https://drive.google.com/file/d/1o81NKoduvFYBmCT1YBYXHAs_qgeoxFNd/view?usp=drive_link",
  },
  {
    title: "MAANG Preparation",
    date: "11 Jul 2023",
    speaker: "Ankita (Apple)",
    description: "Preparation for top tech companies.",
    insights: ["Interview prep", "Coding skills"],
    link: "https://drive.google.com/file/d/1OKONZQBezwKsN7X6fv9xqNy50T2pimwH/view?usp=drive_link",
  },
  {
    title: "AI/ML Stories from Samsung",
    date: "20 Jun 2023",
    speaker: "Sriram Varun",
    description: "AI/ML real-world implementation.",
    insights: ["Enterprise AI", "Product thinking"],
    link: "https://drive.google.com/file/d/1ZQe17qpzI8V1lrwBGs3tPj38Q5vAo0WE/view?usp=drive_link",
  },
];

const PodcastSection = () => {
  // Duplicate for infinite scroll effect
  const allCards = [...podcasts, ...podcasts];

  return (
    <section id="podcasts" className="py-20 section-alt overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <Mic className="text-primary" size={28} />
            <h2 className="text-3xl font-bold text-foreground">
              Continuous Learning through Podcasts & Industry Insights
            </h2>
          </div>
          <div className="w-12 h-1 bg-primary rounded mx-auto mb-4" />
          <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-sm px-4 py-1">
            🎧 Active Learner · {podcasts.length}+ Certificates
          </Badge>
        </motion.div>
      </div>

      {/* Auto-scrolling carousel */}
      <div className="group relative">
        <div className="flex animate-scroll group-hover:[animation-play-state:paused] w-max">
          {allCards.map((podcast, index) => (
            <a
              key={`${podcast.title}-${index}`}
              href={podcast.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[320px] mx-3 group/card"
            >
              <div className="h-full rounded-xl border border-border bg-card p-5 card-elevated transition-transform duration-300 group-hover/card:scale-[1.03] group-hover/card:border-primary/40">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mic size={18} className="text-primary" />
                  </div>
                  <ExternalLink size={14} className="text-muted-foreground group-hover/card:text-primary transition-colors mt-1" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-foreground text-sm leading-tight mb-2 line-clamp-2 min-h-[2.5rem]">
                  {podcast.title}
                </h3>

                {/* Meta */}
                <div className="flex flex-col gap-1 mb-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {podcast.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User size={12} />
                    {podcast.speaker}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                  {podcast.description}
                </p>

                {/* Key Insights */}
                <div className="space-y-1.5">
                  {podcast.insights.map((insight) => (
                    <div key={insight} className="flex items-center gap-2 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-foreground/80">{insight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default PodcastSection;
