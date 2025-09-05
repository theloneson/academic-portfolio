import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, GraduationCap } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'Google Scholar',
      icon: GraduationCap,
      url: '#',
      description: 'Research publications and citations'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: '#',
      description: 'Professional network and updates'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: '#',
      description: 'Open source projects and code'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: '#',
      description: 'Research insights and discussions'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Get In Touch
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm always interested in discussing research collaborations, academic opportunities, 
            or innovative projects. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-academic hover:shadow-hover transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-2xl font-semibold text-foreground">
                  Send a Message
                </CardTitle>
                <CardDescription className="font-body text-muted-foreground">
                  I'll respond within 24-48 hours during business days.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-body font-medium text-foreground">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="font-body"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-body font-medium text-foreground">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="font-body"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-body font-medium text-foreground">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your research interests, collaboration ideas, or questions..."
                      rows={6}
                      className="font-body resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-hover text-primary-foreground shadow-academic hover:shadow-hover transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="shadow-card hover:shadow-hover transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-xl font-semibold text-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="text-primary mt-1" size={18} />
                  <div>
                    <p className="font-body font-medium text-foreground">Email</p>
                    <p className="font-body text-sm text-muted-foreground">dr.academic@university.edu</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="text-primary mt-1" size={18} />
                  <div>
                    <p className="font-body font-medium text-foreground">Office Phone</p>
                    <p className="font-body text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="text-primary mt-1" size={18} />
                  <div>
                    <p className="font-body font-medium text-foreground">Office</p>
                    <p className="font-body text-sm text-muted-foreground">
                      Science Building, Room 304<br />
                      Research University<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="shadow-card hover:shadow-hover transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-xl font-semibold text-foreground">
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 font-body text-sm">
                  <div className="flex justify-between">
                    <span className="text-foreground">Tuesday</span>
                    <span className="text-muted-foreground">2:00 - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground">Thursday</span>
                    <span className="text-muted-foreground">10:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground">Friday</span>
                    <span className="text-muted-foreground">1:00 - 3:00 PM</span>
                  </div>
                  <p className="text-xs text-muted-foreground pt-2 border-t border-border">
                    Or by appointment - please email to schedule
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-16 animate-slide-up">
          <h2 className="font-heading text-2xl font-semibold text-foreground text-center mb-8">
            Connect With Me
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-hover transition-all duration-300 transform hover:scale-105 cursor-pointer bg-gradient-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <IconComponent size={24} className="text-primary group-hover:text-primary-foreground" />
                      </div>
                    </div>
                    <h3 className="font-body font-semibold text-foreground mb-2">
                      {social.name}
                    </h3>
                    <p className="font-body text-xs text-muted-foreground">
                      {social.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;