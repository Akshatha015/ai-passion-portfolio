import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'Python Programming Internship',
      organization: 'Internship Program',
      date: '2024',
      description: 'Completed comprehensive Python programming internship covering advanced programming concepts and practical applications.',
      link: 'https://drive.google.com/file/d/1AHT3OXzzfJBrb9a3nE7sZbl8YaBRNhMJ/view?usp=sharing',
      category: 'Programming',
      featured: true
    },
    {
      title: 'AI Agent using Agentforce',
      organization: 'GeeksforGeeks & Salesforce',
      date: '2024',
      description: 'Advanced certification in building AI agents using Salesforce Agentforce platform and related technologies.',
      link: 'https://drive.google.com/file/d/1APEwL3iv23Edym88MxbLGB7HVv5ALJqU/view?usp=sharing',
      category: 'AI/ML',
      featured: true
    },
    {
      title: 'Digital 101',
      organization: 'Digital Literacy Program',
      date: '2024',
      description: 'Foundational certification covering essential digital skills and modern technology concepts.',
      link: 'https://drive.google.com/file/d/1APlODddlU2pCI7U0WLkAaLLspUTtInp3/view?usp=sharing',
      category: 'Digital Skills',
      featured: false
    },
    {
      title: 'Getting Started with Enterprise Data Science',
      organization: 'IBM',
      date: '2024',
      description: 'Professional certification in enterprise-level data science methodologies and IBM tools.',
      link: 'https://drive.google.com/file/d/1ox06MI9VAZ8HLiEHUlGE1iqNdaXnrrds/view?usp=drive_link',
      category: 'Data Science',
      featured: false
    }
  ];

  return (
    <section id="certificates" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-lg text-primary mb-4">Certifications & Credentials</h2>
          <div className="w-20 h-1 bg-gradient-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and credentials that validate my technical expertise 
            and commitment to continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className={`bg-background rounded-lg p-6 border transition-all duration-300 fade-in ${
                certificate.featured
                  ? 'border-secondary/30 bg-gradient-to-br from-secondary/5 to-transparent shadow-glow'
                  : 'border-border card-hover'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${
                  certificate.featured ? 'bg-gradient-secondary' : 'bg-muted'
                }`}>
                  <Award className={`h-6 w-6 ${
                    certificate.featured ? 'text-white' : 'text-primary'
                  }`} />
                </div>
                {certificate.featured && (
                  <div className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full">
                    Featured
                  </div>
                )}
              </div>

              <h3 className={`text-lg font-bold mb-2 ${
                certificate.featured ? 'text-secondary' : 'text-primary'
              }`}>
                {certificate.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {certificate.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  {certificate.date}
                </div>
                <span className="px-3 py-1 bg-muted/50 text-muted-foreground text-xs font-medium rounded-full">
                  {certificate.category}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground font-medium">
                  {certificate.organization}
                </span>
                {certificate.link && (
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-secondary hover:text-secondary/80 font-semibold text-sm transition-colors"
                  >
                    View Certificate
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;