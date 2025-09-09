import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            Get in Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ready to start your next project? We'd love to hear about your vision 
                and explore how we can bring your story to life.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">hello@storiesatscale.com</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Office</h3>
                  <p className="text-muted-foreground">
                    123 Creative Avenue<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" type="text" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" type="text" className="mt-2" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" className="mt-2" />
              </div>
              
              <div>
                <Label htmlFor="company">Company</Label>
                <Input id="company" type="text" className="mt-2" />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  rows={6} 
                  className="mt-2" 
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;