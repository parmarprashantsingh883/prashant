import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z.string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  subject: z.string()
    .trim()
    .min(1, { message: "Subject is required" })
    .max(200, { message: "Subject must be less than 200 characters" }),
  message: z.string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(2000, { message: "Message must be less than 2000 characters" })
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log("Submitting contact form:", { ...data, message: "[redacted]" });

    try {
      const { data: response, error } = await supabase.functions.invoke('send-contact-email', {
        body: data
      });

      if (error) {
        console.error("Error sending email:", error);
        throw error;
      }

      console.log("Email sent successfully:", response);

      toast({
        title: "Message Sent Successfully! ✓",
        description: "Thank you for reaching out. I'll get back to you soon!",
        duration: 5000,
      });

      reset();
    } catch (error) {
      console.error("Failed to send message:", error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or email me directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's work together on your next project
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-8 border-border/50 bg-card/50 backdrop-blur hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:border-primary/50 animate-slide-in-left">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Send a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Name *</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Your Name"
                    className="mt-2 bg-background/50 border-border/50 focus:border-primary transition-colors"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="your.email@example.com"
                    className="mt-2 bg-background/50 border-border/50 focus:border-primary transition-colors"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="subject" className="text-foreground">Subject *</Label>
                  <Input
                    id="subject"
                    {...register("subject")}
                    placeholder="What's this about?"
                    className="mt-2 bg-background/50 border-border/50 focus:border-primary transition-colors"
                    disabled={isSubmitting}
                  />
                  {errors.subject && (
                    <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">Message *</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Tell me about your project or question..."
                    rows={6}
                    className="mt-2 bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/50 hover:scale-105 transition-all hover:shadow-xl hover:shadow-primary/60 group/btn"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-8 border-border/50 bg-card/50 backdrop-blur hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:border-primary/50 animate-slide-in-right">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover/item:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary group-hover/item:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href="mailto:Parmarprashantsingh883@gmail.com"
                        className="text-foreground hover:text-primary transition-colors break-all"
                      >
                        Parmarprashantsingh883@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover/item:bg-primary/20 transition-colors">
                      <Phone className="h-5 w-5 text-primary group-hover/item:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a
                        href="tel:+919574028096"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        +91-9574028096
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover/item:bg-primary/20 transition-colors">
                      <MapPin className="h-5 w-5 text-primary group-hover/item:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground">Ahmedabad, Gujarat</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border/50 bg-card/50 backdrop-blur hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:border-primary/50 animate-scale-in">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Connect With Me</h3>
                
                <div className="space-y-4">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start border-primary/50 hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all group/btn"
                  >
                    <a
                      href="https://github.com/parmarprashantsingh883"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      GitHub
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start border-primary/50 hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all group/btn"
                  >
                    <a
                      href="https://linkedin.com/in/prashant-parmar"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      LinkedIn
                    </a>
                  </Button>
                </div>

                <div className="pt-6 mt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center animate-pulse">
                    Open to new opportunities and collaborations
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;