import { Brain, Code, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'AI/ML Enthusiast',
      description: 'Passionate about artificial intelligence and machine learning technologies'
    },
    {
      icon: Code,
      title: 'Problem Solver',
      description: '200+ problems solved on competitive programming platforms'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focused',
      description: 'Building solutions that create real-world impact'
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'Strong communication and team collaboration skills'
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-lg text-primary mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-secondary mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am a passionate and results-driven Artificial Intelligence and Machine Learning 
                student with a strong foundation in software development, data structures, and 
                problem-solving. I enjoy building innovative solutions that merge technology with 
                real-world impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Currently pursuing my B.E. in AI/ML at BITM Ballari with a CGPA of 8.47, 
                I've dedicated myself to mastering the technical skills that drive modern innovation. 
                My journey includes solving 200+ DSA problems, earning a Gold Badge on HackerRank, 
                and participating in various hackathons and coding competitions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, I'm exploring the latest trends in AI/ML, contributing to 
                open-source projects, or mentoring fellow students in their programming journey.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 fade-in">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg bg-gradient-card card-hover"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-secondary rounded-lg mb-4">
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;