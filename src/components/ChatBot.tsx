"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send } from 'lucide-react';
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! Welcome to Dhasha Media. I'm here to help elevate your digital presence. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const predefinedResponses = {
    greeting: [
      "Hi there! Welcome to Dhasha Media. Looking to grow your brand?",
      "Hello! I'm Dhasha Media's virtual assistant. What brings you here today?",
      "Welcome! Whether it's marketing or media production, we're here to help. What do you need?"
    ],
    services: [
      "Dhasha Media offers a 360° approach to digital growth. We specialize in Digital Marketing, Brand Strategy, Web Development, and Multimedia Production. Would you like details on a specific service?",
      "We turn ideas into impact. Our core services include SEO/SEM, Social Media Management, Content Creation, and Tech Development. Which one interests you?"
    ],
    pricing: [
      "Every brand is unique, and so are our packages. We offer customized quotes based on your specific campaign goals and requirements. Shall we set up a quick call to discuss your budget?",
      "We believe in value-driven pricing. Since project scopes vary from simple branding to complex web apps, we recommend a free consultation to get an accurate quote."
    ],
    process: [
      "Our workflow is designed for results: 1) Discovery & Audit, 2) Strategic Planning, 3) Creative Execution, 4) Launch, and 5) Analytics & Optimization.",
      "We start by understanding your market position, then we craft a tailored strategy. Once approved, our media and tech teams execute the plan with precision."
    ],
    timeline: [
      "Timelines depend on the project type. A social media campaign might launch in 2 weeks, while a full website overhaul could take 4-8 weeks. We provide a strict roadmap during onboarding.",
      "We prioritize both speed and quality. Small projects usually take 2-3 weeks, while comprehensive media strategies run on a monthly retainer basis."
    ],
    contact: [
      "Ready to scale? You can use the contact form on this page or email us directly at hello@dhashamedia.com.",
      "Let's get the ball rolling! Click the 'Contact Us' button above or leave your email here, and a Dhasha Media representative will reach out shortly."
    ]
  };

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return predefinedResponses.greeting[Math.floor(Math.random() * predefinedResponses.greeting.length)];
    }
    
    if (message.includes('service') || message.includes('what do you do') || message.includes('offerings') || message.includes('work')) {
      return predefinedResponses.services[Math.floor(Math.random() * predefinedResponses.services.length)];
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('budget') || message.includes('quote')) {
      return predefinedResponses.pricing[Math.floor(Math.random() * predefinedResponses.pricing.length)];
    }
    
    if (message.includes('process') || message.includes('how') || message.includes('steps')) {
      return predefinedResponses.process[Math.floor(Math.random() * predefinedResponses.process.length)];
    }
    
    if (message.includes('time') || message.includes('long') || message.includes('duration')) {
      return predefinedResponses.timeline[Math.floor(Math.random() * predefinedResponses.timeline.length)];
    }
    
    if (message.includes('contact') || message.includes('email') || message.includes('number') || message.includes('talk')) {
      return predefinedResponses.contact[Math.floor(Math.random() * predefinedResponses.contact.length)];
    }
    
    return "Thanks for reaching out! To give you the best advice for your media and tech needs, I'd recommend speaking with one of our strategists directly. Please check our Contact page to book a meeting.";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // macOS-like spring animation variants
  const chatWindowVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
      y: 20,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      y: 20,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90"
          size="icon"
          aria-label="Toggle Chat"
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={isOpen ? 'x' : 'message'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X className="w-7 h-7 text-white" /> : <MessageCircle className="w-7 h-7 text-white" />}
            </motion.div>
          </AnimatePresence>
        </Button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={chatWindowVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed bottom-24 right-6 w-[380px] sm:w-[440px] h-[600px] z-50 origin-bottom-right"
          >
            <Card className="h-full w-full flex flex-col shadow-2xl border-border bg-background overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground">
                <div className="flex flex-col">
                  <h3 className="font-bold text-lg tracking-wide">Dhasha Media</h3>
                  <p className="text-xs opacity-90 font-light">Digital Excellence Partner</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground hover:bg-primary/80 rounded-full w-8 h-8"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4 bg-background/95">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex",
                        message.isUser ? "justify-end" : "justify-start"
                      )}
                    >
                      <div
                        className={cn(
                          "max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm",
                          message.isUser
                            ? "bg-primary text-primary-foreground rounded-br-none"
                            : "bg-muted text-foreground rounded-bl-none border border-border/50"
                        )}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-muted max-w-[85%] rounded-2xl rounded-bl-none px-4 py-3 border border-border/50">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="p-4 border-t border-border bg-background">
                <div className="flex space-x-2 items-center">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about our services..."
                    className="flex-1 h-11 rounded-full px-4 focus-visible:ring-primary/20"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    size="icon"
                    className="h-11 w-11 rounded-full shrink-0"
                  >
                    <Send className="w-5 h-5 ml-0.5" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
