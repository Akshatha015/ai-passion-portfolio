import { ExternalLink, Github, Eye, Brain, BookOpen, Gamepad2, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      icon: Eye,
      title: 'AI-Based Drowning Detection & Alert System',
      description: 'Advanced computer vision system using TensorFlow and OpenCV to detect drowning incidents in real-time and trigger immediate alerts.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Computer Vision', 'AI'],
      features: [
        'Real-time video processing',
        'Machine learning-based detection',
        'Automatic alert system',
        'High accuracy detection'
      ],
      category: 'AI/ML'
    },
    {
      icon: BookOpen,
      title: 'Book Recommendation System',
      description: 'Intelligent recommendation engine using TF-IDF vectorization and cosine similarity to suggest books based on user preferences.',
      technologies: ['Python', 'TF-IDF', 'Scikit-Learn', 'Pandas', 'ML'],
      features: [
        'Content-based filtering',
        'TF-IDF vectorization',
        'Cosine similarity matching',
        'User preference analysis'
      ],
      category: 'ML'
    },
    {
      icon: Gamepad2,
      title: 'Computer Vision Game',
      description: 'Interactive gaming experience using hand gesture recognition with OpenCV for intuitive gameplay control.',
      technologies: ['Python', 'OpenCV', 'Computer Vision', 'Game Development'],
      features: [
        'Hand gesture recognition',
        'Real-time tracking',
        'Interactive gameplay',
        'Smooth controls'
      ],
      category: 'Computer Vision'
    },
    {
      icon: Database,
      title: 'Library Management System',
      description: 'Comprehensive database-driven application for managing library operations with efficient book tracking and user management.',
      technologies: ['Python', 'MySQL', 'Database Design', 'GUI'],
      features: [
        'Book inventory management',
        'User registration system',
        'Issue/return tracking',
        'Search functionality'
      ],
      category: 'Web/Database'
    }
  ];

  const getCategoryClasses = (category: string) => {
    switch (category) {
      case 'AI/ML':
        return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'ML':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'Computer Vision':
        return 'bg-gradient-to-r from-green-500 to-teal-500';
      case 'Web/Database':
        return 'bg-gradient-to-r from-orange-500 to-red-500';
      default:
        return 'bg-gradient-secondary';
    }
  };

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-lg text-primary mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions that demonstrate my expertise in AI/ML, 
            computer vision, and software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-3 bg-gradient-secondary rounded-lg mr-4">
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mt-2 ${getCategoryClasses(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-primary mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-primary mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex-1">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button variant="default" size="sm" className="flex-1">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <Button variant="outline" size="lg">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;