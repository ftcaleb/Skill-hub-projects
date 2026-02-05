export interface Course {
  id: string
  title: string
  description: string
  fullDescription: string
  duration: string
  category: string
  categorySlug: string
  image: string
  isAccredited: boolean
  price: string
  modules: string[]
  outcomes: string[]
}

export const categories = [
  { name: "All Categories", slug: "all" },
  { name: "Administrative & Executive", slug: "administrative" },
  { name: "AI in Business", slug: "ai" },
  { name: "Farms & Agriculture", slug: "agriculture" },
  { name: "Leadership & Management", slug: "leadership" },
  { name: "Human Resources", slug: "hr" },
  { name: "Finance & Accounting", slug: "finance" },
  { name: "Marketing & Sales", slug: "marketing" },
  { name: "Project Management", slug: "project-management" },
  { name: "Health & Safety", slug: "health-safety" },
  { name: "Information Technology", slug: "it" },
  { name: "Communication Skills", slug: "communication" },
]

export const courses: Course[] = [
  {
    id: "executive-assistant-masterclass",
    title: "Executive Assistant Masterclass",
    description: "Develop advanced skills for supporting C-suite executives and managing complex administrative tasks.",
    fullDescription: "This comprehensive program equips administrative professionals with the advanced skills needed to excel in executive support roles. Learn to manage complex calendars, coordinate international travel, handle confidential information, and become an indispensable partner to senior leadership.",
    duration: "5 Days",
    category: "Administrative & Executive",
    categorySlug: "administrative",
    image: "/images/pic.webp",
    isAccredited: true,
    price: "R 12,500",
    modules: ["Executive Communication", "Calendar & Travel Management", "Meeting Coordination", "Confidentiality & Ethics", "Technology Tools"],
    outcomes: ["Support C-suite executives effectively", "Manage complex schedules", "Handle sensitive information professionally", "Coordinate high-level meetings"]
  },
  {
    id: "ai-business-transformation",
    title: "AI for Business Transformation",
    description: "Learn how to leverage artificial intelligence to drive innovation and efficiency in your organization.",
    fullDescription: "Discover how AI is revolutionizing business operations across industries. This course provides practical insights into implementing AI solutions, from chatbots and automation to predictive analytics and machine learning applications that drive real business results.",
    duration: "3 Days",
    category: "AI in Business",
    categorySlug: "ai",
    image: "/images/pic2.webp",
    isAccredited: false,
    price: "R 15,000",
    modules: ["AI Fundamentals", "Machine Learning Basics", "AI Implementation Strategy", "ChatGPT & Generative AI", "Ethics in AI"],
    outcomes: ["Understand AI capabilities and limitations", "Identify AI opportunities in your business", "Develop an AI implementation roadmap", "Evaluate AI tools and vendors"]
  },
  {
    id: "farm-management-excellence",
    title: "Farm Management Excellence",
    description: "Master modern agricultural practices and farm business management for sustainable profitability.",
    fullDescription: "This comprehensive course covers all aspects of modern farm management, from crop planning and livestock management to financial planning and sustainable practices. Learn to optimize your farming operations for maximum efficiency and profitability.",
    duration: "4 Days",
    category: "Farms & Agriculture",
    categorySlug: "agriculture",
    image: "/images/pic3.webp",
    isAccredited: true,
    price: "R 9,500",
    modules: ["Crop Planning & Management", "Livestock Essentials", "Farm Financial Management", "Sustainable Practices", "Technology in Agriculture"],
    outcomes: ["Develop comprehensive farm business plans", "Implement sustainable farming practices", "Optimize resource allocation", "Understand agricultural technology"]
  },
  {
    id: "strategic-leadership-program",
    title: "Strategic Leadership Program",
    description: "Develop the strategic thinking and leadership capabilities needed to drive organizational success.",
    fullDescription: "This intensive program develops senior leaders and high-potential managers into strategic thinkers who can navigate complexity, inspire teams, and drive organizational transformation. Learn from real-world case studies and develop your personal leadership brand.",
    duration: "5 Days",
    category: "Leadership & Management",
    categorySlug: "leadership",
    image: "/images/pic4.webp",
    isAccredited: true,
    price: "R 18,000",
    modules: ["Strategic Thinking", "Change Management", "Team Leadership", "Decision Making", "Stakeholder Management"],
    outcomes: ["Develop strategic plans", "Lead organizational change", "Build high-performing teams", "Make data-driven decisions"]
  },
  {
    id: "hr-business-partner",
    title: "HR Business Partner Certification",
    description: "Transform from HR administrator to strategic business partner with this comprehensive certification.",
    fullDescription: "Elevate your HR career by developing the strategic and consultative skills needed to become a true business partner. Learn to align HR initiatives with business objectives, influence senior stakeholders, and drive organizational performance through people strategies.",
    duration: "4 Days",
    category: "Human Resources",
    categorySlug: "hr",
    image: "/images/pic.webp",
    isAccredited: true,
    price: "R 14,000",
    modules: ["Strategic HR Planning", "Talent Management", "Employee Relations", "HR Analytics", "Business Partnering Skills"],
    outcomes: ["Align HR with business strategy", "Implement talent management programs", "Use HR data for decision making", "Consult effectively with business leaders"]
  },
  {
    id: "financial-analysis-mastery",
    title: "Financial Analysis Mastery",
    description: "Master financial analysis techniques to make better business decisions and drive profitability.",
    fullDescription: "Develop advanced financial analysis skills that enable you to evaluate business performance, assess investment opportunities, and provide strategic financial insights. This course combines theory with practical Excel-based exercises and real-world case studies.",
    duration: "3 Days",
    category: "Finance & Accounting",
    categorySlug: "finance",
    image: "/images/pic2.webp",
    isAccredited: false,
    price: "R 11,500",
    modules: ["Financial Statement Analysis", "Ratio Analysis", "Cash Flow Management", "Budgeting & Forecasting", "Investment Evaluation"],
    outcomes: ["Analyze financial statements", "Build financial models", "Evaluate investment opportunities", "Present financial insights"]
  },
  {
    id: "digital-marketing-strategy",
    title: "Digital Marketing Strategy",
    description: "Create and implement effective digital marketing strategies that drive leads and conversions.",
    fullDescription: "Learn to develop comprehensive digital marketing strategies that leverage SEO, social media, content marketing, and paid advertising. This hands-on course teaches you to plan, execute, and measure digital campaigns that deliver real business results.",
    duration: "3 Days",
    category: "Marketing & Sales",
    categorySlug: "marketing",
    image: "/placeholder.svg?height=400&width=600",
    isAccredited: false,
    price: "R 10,500",
    modules: ["Digital Strategy Development", "SEO & Content Marketing", "Social Media Marketing", "Paid Advertising", "Analytics & Optimization"],
    outcomes: ["Develop digital marketing plans", "Optimize for search engines", "Create engaging content", "Measure marketing ROI"]
  },
  {
    id: "pmp-exam-preparation",
    title: "PMP Exam Preparation",
    description: "Prepare for the Project Management Professional certification with this comprehensive course.",
    fullDescription: "This intensive course prepares you to pass the PMP certification exam on your first attempt. Covering all knowledge areas and process groups, you'll gain a deep understanding of project management principles while practicing with realistic exam questions.",
    duration: "5 Days",
    category: "Project Management",
    categorySlug: "project-management",
    image: "/placeholder.svg?height=400&width=600",
    isAccredited: true,
    price: "R 16,500",
    modules: ["Project Integration", "Scope & Schedule Management", "Cost & Quality Management", "Resource & Communication", "Risk & Procurement"],
    outcomes: ["Pass the PMP exam", "Apply PMBOK principles", "Manage projects effectively", "Earn 35 PDUs"]
  },
  {
    id: "workplace-health-safety",
    title: "Workplace Health & Safety Management",
    description: "Implement effective health and safety programs that protect employees and ensure compliance.",
    fullDescription: "Learn to develop, implement, and manage comprehensive workplace health and safety programs. This course covers legal requirements, risk assessment, incident investigation, and creating a safety culture that protects your most valuable asset – your people.",
    duration: "3 Days",
    category: "Health & Safety",
    categorySlug: "health-safety",
    image: "/placeholder.svg?height=400&width=600",
    isAccredited: true,
    price: "R 8,500",
    modules: ["Safety Legislation", "Risk Assessment", "Incident Investigation", "Emergency Preparedness", "Safety Culture"],
    outcomes: ["Conduct risk assessments", "Investigate incidents", "Develop safety programs", "Ensure regulatory compliance"]
  },
  {
    id: "cybersecurity-fundamentals",
    title: "Cybersecurity Fundamentals",
    description: "Understand cyber threats and learn to protect your organization's digital assets.",
    fullDescription: "In today's digital world, cybersecurity is everyone's responsibility. This course provides essential knowledge about cyber threats, security best practices, and how to protect your organization from attacks. Ideal for IT professionals and business leaders alike.",
    duration: "2 Days",
    category: "Information Technology",
    categorySlug: "it",
    image: "/placeholder.svg?height=400&width=600",
    isAccredited: false,
    price: "R 9,000",
    modules: ["Threat Landscape", "Security Frameworks", "Data Protection", "Incident Response", "Security Awareness"],
    outcomes: ["Identify security threats", "Implement security controls", "Respond to incidents", "Build security awareness"]
  },
  {
    id: "business-communication",
    title: "Business Communication Excellence",
    description: "Master written and verbal communication skills essential for professional success.",
    fullDescription: "Effective communication is the foundation of professional success. This course develops your written and verbal communication skills, from crafting compelling emails and reports to delivering impactful presentations and managing difficult conversations.",
    duration: "2 Days",
    category: "Communication Skills",
    categorySlug: "communication",
    image: "/placeholder.svg?height=400&width=600",
    isAccredited: false,
    price: "R 7,500",
    modules: ["Business Writing", "Presentation Skills", "Meeting Facilitation", "Difficult Conversations", "Cross-cultural Communication"],
    outcomes: ["Write clear business documents", "Deliver engaging presentations", "Facilitate productive meetings", "Navigate difficult conversations"]
  },
  {
    id: "agile-project-management",
    title: "Agile Project Management",
    description: "Learn Scrum, Kanban, and other agile methodologies to deliver projects faster and better.",
    fullDescription: "Embrace agile ways of working with this comprehensive course covering Scrum, Kanban, and hybrid approaches. Learn to lead agile teams, facilitate ceremonies, and deliver value incrementally while adapting to changing requirements.",
    duration: "3 Days",
    category: "Project Management",
    categorySlug: "project-management",
    image: "/placeholder.svg?height=400&width=600",
    isAccredited: true,
    price: "R 12,000",
    modules: ["Agile Principles", "Scrum Framework", "Kanban Method", "Agile Leadership", "Scaling Agile"],
    outcomes: ["Implement Scrum framework", "Use Kanban boards effectively", "Lead agile teams", "Scale agile practices"]
  },
]

export function getCoursesByCategory(categorySlug: string): Course[] {
  if (categorySlug === "all") return courses
  return courses.filter(course => course.categorySlug === categorySlug)
}

export function getAccreditedCourses(): Course[] {
  return courses.filter(course => course.isAccredited)
}

export function getCourseById(id: string): Course | undefined {
  return courses.find(course => course.id === id)
}

export function searchCourses(query: string): Course[] {
  const lowercaseQuery = query.toLowerCase()
  return courses.filter(
    course =>
      course.title.toLowerCase().includes(lowercaseQuery) ||
      course.description.toLowerCase().includes(lowercaseQuery) ||
      course.category.toLowerCase().includes(lowercaseQuery)
  )
}
