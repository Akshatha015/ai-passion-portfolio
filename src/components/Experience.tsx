import { GraduationCap, Trophy, Code, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'education',
      title: 'B.E. in Artificial Intelligence & Machine Learning',
      organization: 'Ballari Institute of Technology and Management (BITM)',
      location: 'Ballari, India',
      period: '2022 - 2026 (Expected)',
      details: [
        'Current CGPA: 8.47/10',
        'Specialized in AI/ML algorithms and applications',
        'Strong foundation in data structures and programming',
        'Active participation in coding competitions and hackathons'
      ],
      icon: GraduationCap,
      color: 'bg-blue-500'
    },
    {
      type: 'achievement',
      title: 'Competitive Programming Excellence',
      organization: 'Multiple Platforms',
      location: 'Online',
      period: '2022 - Present',
      details: [
        'Solved 200+ Data Structures & Algorithms problems',
        'Gold Badge holder on HackerRank platform',
        'Regular participation in coding contests',
        'Consistent problem-solving practice and improvement'
      ],
      icon: Code,
      color: 'bg-green-500'
    },
    {
      type: 'achievement',
      title: 'Hackathon Participation',
      organization: 'Various Tech Events',
      location: 'Multiple Venues',
      period: '2023 - Present',
      details: [
        'Active participant in multiple hackathons',
        'Collaborative problem-solving experience',
        'Rapid prototyping and development skills',
        'Innovation and creative thinking application'
      ],
      icon: Trophy,
      color: 'bg-purple-500'
    },
    {
      type: 'certification',
      title: 'Professional Certifications',
      organization: 'Various Providers',
      location: 'Online Learning',
      period: '2022 - Present',
      details: [
        'Python Programming Certification',
        'HTML & CSS Web Development Certification',
        'Subject-Specific Technical Certifications',
        'Continuous learning and skill development'
      ],
      icon: Trophy,
      color: 'bg-teal-500'
    }
  ];

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'education':
        return 'Education';
      case 'achievement':
        return 'Achievement';
      case 'certification':
        return 'Certification';
      default:
        return 'Experience';
    }
  };

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-lg text-primary mb-4">Education & Experience</h2>
          <div className="w-20 h-1 bg-gradient-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional growth through education, 
            competitive programming, and continuous learning.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`timeline-item fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start">
                  <div className={`relative z-10 p-3 rounded-full ${experience.color} shadow-lg`}>
                    <experience.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="ml-6 flex-1">
                    <div className="bg-background rounded-lg p-6 shadow-sm border card-hover">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full">
                              {getTypeLabel(experience.type)}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-primary mb-1">
                            {experience.title}
                          </h3>
                          <p className="text-secondary font-semibold">
                            {experience.organization}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {experience.location}
                          </p>
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm mt-2 md:mt-0">
                          <Calendar className="h-4 w-4 mr-1" />
                          {experience.period}
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {experience.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;