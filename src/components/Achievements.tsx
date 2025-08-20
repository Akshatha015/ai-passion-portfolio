import { Trophy, Award, Code, Users, Target, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'HackerRank Gold Badge',
      description: 'Achieved Gold Badge on HackerRank platform demonstrating excellence in problem-solving and programming skills.',
      category: 'Competitive Programming',
      highlight: true
    },
    {
      icon: Code,
      title: '200+ DSA Problems Solved',
      description: 'Successfully solved over 200 Data Structures and Algorithms problems across various platforms including LeetCode.',
      category: 'Problem Solving',
      highlight: true
    },
    {
      icon: Users,
      title: 'Hackathon Participation',
      description: 'Active participant in multiple hackathons, demonstrating rapid prototyping and collaborative development skills.',
      category: 'Team Collaboration',
      highlight: false
    },
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Maintaining a strong CGPA of 8.47 while pursuing B.E. in Artificial Intelligence & Machine Learning.',
      category: 'Academic Performance',
      highlight: false
    },
    {
      icon: Target,
      title: 'Project Portfolio',
      description: 'Developed multiple AI/ML projects including computer vision applications and recommendation systems.',
      category: 'Technical Projects',
      highlight: false
    },
    {
      icon: Star,
      title: 'Professional Certifications',
      description: 'Earned multiple certifications in Python programming, web development, and specialized technical subjects.',
      category: 'Professional Development',
      highlight: false
    }
  ];

  const stats = [
    { label: 'Problems Solved', value: '200+', icon: Code },
    { label: 'CGPA', value: '8.47', icon: Award },
    { label: 'Projects Completed', value: '10+', icon: Target },
    { label: 'Certifications', value: '5+', icon: Star }
  ];

  return (
    <section id="achievements" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-lg text-primary mb-4">Achievements & Recognition</h2>
          <div className="w-20 h-1 bg-gradient-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milestones and accomplishments that reflect my dedication to continuous learning 
            and excellence in technology.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 fade-in">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-card rounded-lg card-hover"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-secondary rounded-lg mb-4">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`bg-background rounded-lg p-6 border transition-all duration-300 fade-in ${
                achievement.highlight
                  ? 'border-secondary/30 bg-gradient-to-br from-secondary/5 to-transparent shadow-glow'
                  : 'border-border card-hover'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${
                  achievement.highlight ? 'bg-gradient-secondary' : 'bg-muted'
                }`}>
                  <achievement.icon className={`h-6 w-6 ${
                    achievement.highlight ? 'text-white' : 'text-primary'
                  }`} />
                </div>
                {achievement.highlight && (
                  <div className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full">
                    Featured
                  </div>
                )}
              </div>

              <h3 className={`text-lg font-bold mb-2 ${
                achievement.highlight ? 'text-secondary' : 'text-primary'
              }`}>
                {achievement.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {achievement.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-muted/50 text-muted-foreground text-xs font-medium rounded-full">
                  {achievement.category}
                </span>
                {achievement.highlight && (
                  <div className="flex items-center text-secondary text-sm font-semibold">
                    <Trophy className="h-4 w-4 mr-1" />
                    Highlight
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in">
          <div className="bg-gradient-secondary text-white rounded-lg p-8 max-w-2xl mx-auto">
            <Trophy className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ready for New Challenges</h3>
            <p className="text-white/90 mb-6">
              Always looking for opportunities to apply my skills in innovative projects 
              and contribute to meaningful technological solutions.
            </p>
            <button className="bg-white text-secondary font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors">
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;