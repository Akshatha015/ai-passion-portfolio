import { useEffect, useRef, useState } from 'react';
import { Code, Database, Brain, Globe, Wrench, Users } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'C', level: 75 }
      ]
    },
    {
      icon: Brain,
      title: 'AI/ML & Data Science',
      skills: [
        { name: 'TensorFlow', level: 85 },
        { name: 'Scikit-Learn', level: 90 },
        { name: 'Pandas', level: 88 },
        { name: 'OpenCV', level: 82 }
      ]
    },
    {
      icon: Database,
      title: 'Databases & Tools',
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'Git/GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Data Structures', level: 88 }
      ]
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      skills: [
        { name: 'HTML', level: 85 },
        { name: 'CSS', level: 80 },
        { name: 'Web Development', level: 75 }
      ]
    },
    {
      icon: Users,
      title: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', level: 95 },
        { name: 'Leadership', level: 85 },
        { name: 'Communication', level: 88 },
        { name: 'Time Management', level: 82 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-lg text-primary mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical and soft skills, continuously growing through 
            hands-on projects and competitive programming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-background rounded-lg p-6 card-hover fade-in"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-secondary rounded-lg mr-4">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-secondary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${categoryIndex * 100 + skillIndex * 50}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center fade-in">
          <div className="inline-flex items-center px-8 py-3 bg-gradient-secondary rounded-full text-white font-semibold">
            <Code className="mr-2 h-5 w-5" />
            200+ DSA Problems Solved
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;