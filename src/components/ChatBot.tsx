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
      text: "Hi! I'm here to help you with any questions about our storytelling services. How can I assist you today?",
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
      "Hello! Welcome to Stories at Scale. How can I help you today?",
      "Hi there! I'm here to answer any questions about our storytelling services.",
      "Welcome! What would you like to know about our brand storytelling solutions?"
    ],
    services: [
      "We offer comprehensive storytelling services including brand narrative development, content strategy, social media storytelling, and video content creation. Would you like to know more about any specific service?",
      "Our main services include: Brand Story Development, Content Marketing Strategy, Social Media Campaigns, Video Storytelling, and Brand Voice Creation. Which interests you most?"
    ],
    pricing: [
      "Our pricing varies based on project scope and requirements. We offer custom packages tailored to your specific needs. Would you like to schedule a consultation to discuss your project?",
      "We provide customized quotes based on your unique storytelling needs. I'd recommend booking a free consultation where we can discuss your goals and provide detailed pricing."
    ],
    process: [
      "Our process typically involves: 1) Discovery consultation, 2) Strategy development, 3) Content creation, 4) Implementation, and 5) Performance tracking. Each project is tailored to your specific goals.",
      "We start with understanding your brand and goals, then develop a custom storytelling strategy, create compelling content, and help you implement it across your channels."
    ],
    timeline: [
      "Project timelines vary depending on scope, but most storytelling projects take 4-8 weeks from start to finish. We'll provide a detailed timeline during our initial consultation.",
      "Typical projects range from 3-12 weeks depending on complexity. We work efficiently while ensuring quality storytelling that resonates with your audience."
    ],
    contact: [
      "You can reach us through the contact form on this website, or click 'Get Started' to begin your storytelling journey. We typically respond within 24 hours.",
      "Feel free to use our contact form below or click any 'Get Started' button to schedule a consultation. We're excited to help tell your story!"
    ]
  };

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return predefinedResponses.greeting[Math.floor(Math.random() * predefinedResponses.greeting.length)];
    }
    
    if (message.includes('service') || message.includes('what do you do') || message.includes('offerings')) {
      return predefinedResponses.services[Math.floor(Math.random() * predefinedResponses.services.length)];
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('budget')) {
      return predefinedResponses.pricing[Math.floor(Math.random() * predefinedResponses.pricing.length)];
    }
    
    if (message.includes('process') || message.includes('how do you work') || message.includes('methodology')) {
      return predefinedResponses.process[Math.floor(Math.random() * predefinedResponses.process.length)];
    }
    
    if (message.includes('timeline') || message.includes('how long') || message.includes('duration')) {
      return predefinedResponses.timeline[Math.floor(Math.random() * predefinedResponses.timeline.length)];
    }
    
    if (message.includes('contact') || message.includes('reach') || message.includes('get in touch')) {
      return predefinedResponses.contact[Math.floor(Math.random() * predefinedResponses.contact.length)];
    }
    
    return "Thank you for your question! For specific inquiries about our storytelling services, I'd recommend scheduling a consultation where our team can provide detailed answers tailored to your needs. You can get started by clicking the 'Get Started' button on our website.";
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
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      y: 20,
      transition: {
        type: 'spring',
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
          className="rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300"
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
              {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
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
            className="fixed bottom-24 right-6 w-[440px] h-[630px] z-50 origin-bottom-right"
          >
            <Card className="h-full w-full flex flex-col shadow-2xl border-border bg-background">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-lg">
                <div>
                  <h3 className="font-semibold text-lg">Stories at Scale</h3>
                  <p className="text-sm opacity-90">We're here to help!</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground hover:bg-primary/80 rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4 bg-background/90">
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
                          "max-w-[85%] rounded-lg px-4 py-2 text-base",
                          message.isUser
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        )}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-muted max-w-[85%] rounded-lg px-4 py-2 text-base">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="p-4 border-t border-border bg-background/90 rounded-b-lg">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 h-12 text-base"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    size="icon"
                    className="h-12 w-12"
                  >
                    <Send className="w-5 h-5" />
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
