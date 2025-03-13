
import React from 'react';
import { Linkedin, Github, FileText, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const SocialLinks = ({ className, iconSize = 20 }: SocialLinksProps) => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={iconSize} />,
      href: 'https://linkedin.com/in/cairo-rocha', // Substitua pelo link correto
      color: 'hover:text-[#0077B5]',
    },
    {
      name: 'GitHub',
      icon: <Github size={iconSize} />,
      href: 'https://github.com/cairorocha', // Substitua pelo link correto
      color: 'hover:text-white',
    },
    {
      name: 'Portfólio',
      icon: <FileText size={iconSize} />,
      href: '#portfolio',
      color: 'hover:text-[#4CAF50]',
    },
    {
      name: 'Currículo',
      icon: <FileText size={iconSize} />,
      href: '/curriculo.pdf', // Substitua pelo link correto
      color: 'hover:text-[#FF5722]',
    },
  ];

  return (
    <div className={cn('flex items-center gap-4', className)}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={link.name}
          className={cn(
            'text-muted-foreground transition-all duration-300',
            link.color,
            'hover:scale-110'
          )}
        >
          {link.icon}
        </a>
      ))}
      <a
        href="mailto:cairoaorocha@gmail.com"
        aria-label="Email"
        className="text-muted-foreground hover:text-[#EA4335] transition-all duration-300 hover:scale-110"
      >
        <Mail size={iconSize} />
      </a>
    </div>
  );
};

export default SocialLinks;
