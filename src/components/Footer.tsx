import { Github, Mail, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Akshatha015',
      label: 'GitHub'
    },
    {
      icon: ExternalLink,
      href: 'https://leetcode.com/u/akshatha_006',
      label: 'LeetCode'
    },
    {
      icon: Mail,
      href: 'mailto:akshathasakragowda@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Akshatha T</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Passionate AI/ML student building innovative solutions that merge 
              technology with real-world impact. Always eager to learn and grow.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-primary-foreground/80 hover:text-primary-foreground transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <a
                href="mailto:akshathasakragowda@gmail.com"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                akshathasakragowda@gmail.com
              </a>
              <a
                href="tel:+919353218300"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                +91 9353218300
              </a>
              <p className="text-primary-foreground/80">
                Ballari, Karnataka, India
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
              © {currentYear} Akshatha T. All rights reserved.
            </p>
            <div className="flex items-center text-primary-foreground/80 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-400 fill-current" />
              <span>and passion for technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;