import { Code, Briefcase, Hash, Camera } from 'lucide-react';

export const config = {
  personal: {
    name: "Noir Snippet",
    role: "Frontend Developer / Designer / Student ",
    location: "Prayagraj, India",
    bio: "Im a passionate developer focused on building clean accesible and user friendly web applications.i love turning complex problems into intuitive digital experiences.",
    email: "tashansingh57@gmail.com.com", // Placeholder
  },
  socials: [
    { name: "GitHub", url: "https://github.com/NoirSnippet", icon: Code },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/noir-snippet-6b3b51302", icon: Briefcase },
    { name: "X", url: "https://x.com/EzCodexx", icon: Hash },
    { name: "Instagram", url: "https://www.instagram.com/_lens.legacy_", icon: Camera },
  ],
  skills: [
    "React", "JavaScript", "TypeScript", "Python", "Node.js",
    "Tailwind CSS", "Framer Motion", "UI/UX Design", "Figma",
    "AI Integration", "Next.js", "Git", "Java", "Html", "CSS",

  ],
  projects: [
    {
      id: 1,
      title: "CyberDeck UI",
      description: "A futuristic dashboard interface with real-time data visualization and customizable widgets.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800", // Placeholder tech image
    },
    {
      id: 2,
      title: "Neural Notes",
      description: "AI-powered note-taking application that automatically tags and summarizes your thoughts.",
      tech: ["Python", "React", "OpenAI API"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Neon E-Commerce",
      description: "A high-performance modern e-commerce storefront with sleek animations and dark mode.",
      tech: ["Next.js", "TypeScript", "Stripe"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    }
  ],
  photography: [
    "/image-3.jpg",
    "/image-1.jpg",
    "/image-5.jpg",
    "/image-4.jpg"
  ]
};
