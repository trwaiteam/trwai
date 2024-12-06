import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { TypewriterText } from '../components/TypewriterText';
import { HeadphonesIcon, Clock, Users, BarChart3, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function CustomerSupport() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black font-mono">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-terminal-green mb-6">
              <TypewriterText text="AI-Driven Customer Support That Never Sleeps" />
            </h1>
            <p className="text-xl text-white/60 mb-8">
              <TypewriterText 
                text="Transform your customer service with intelligent automation that understands, resolves, and delights your customers 24/7."
                delay={0.5}
              />
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/start')}
              className="bg-terminal-green text-black px-8 py-4 rounded hover:bg-terminal-green/90 transition-colors font-bold tracking-wider"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-terminal-green mb-6">
              <TypewriterText text="The Challenges of Traditional Customer Support" />
            </h2>
            <p className="text-lg text-white/60 mb-12">
              Traditional customer support struggles with scalability, response times, and consistent service quality. Your customers deserve better.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  title: "Slow Response Times",
                  description: "Customers waiting hours or days for simple solutions"
                },
                {
                  icon: Users,
                  title: "Limited Availability",
                  description: "Support confined to business hours and time zones"
                },
                {
                  icon: BarChart3,
                  title: "Inconsistent Quality",
                  description: "Variable service levels and human error risks"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center p-6 border border-terminal-green/20 rounded-lg hover:border-terminal-green/40 transition-colors"
                >
                  <item.icon className="w-12 h-12 text-terminal-green mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-terminal-green mb-2">{item.title}</h3>
                  <p className="text-white/60">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-terminal-green mb-6 text-center">
              <TypewriterText text="How TRW.AI Transforms Customer Support" />
            </h2>
            <p className="text-lg text-white/60 mb-12 text-center">
              Our AI-powered platform delivers instant, personalized support that scales with your business and delights your customers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Instant Response System",
                  description: "AI chatbots that understand and resolve customer queries in seconds",
                  features: ["Natural language processing", "Context awareness", "Multi-language support"]
                },
                {
                  title: "Smart Escalation",
                  description: "Intelligent routing of complex issues to the right human agents",
                  features: ["Priority-based routing", "Skill matching", "Real-time handoff"]
                },
                {
                  title: "Proactive Support",
                  description: "Identify and resolve issues before they become problems",
                  features: ["Predictive analytics", "Automated follow-ups", "Customer journey tracking"]
                },
                {
                  title: "Analytics Dashboard",
                  description: "Comprehensive insights into support performance and customer satisfaction",
                  features: ["Real-time metrics", "Sentiment analysis", "Trend identification"]
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 border border-terminal-green/20 rounded-lg hover:border-terminal-green/40 transition-all duration-300 group hover:bg-terminal-green/5"
                >
                  <h3 className="text-xl font-bold text-terminal-green mb-3">{item.title}</h3>
                  <p className="text-white/60 mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-white/60">
                        <ArrowRight className="w-4 h-4 text-terminal-green mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-terminal-green mb-12">
              <TypewriterText text="Proven Results" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { value: "70%", label: "Faster Response Times" },
                { value: "500h", label: "Saved Per Month" },
                { value: "92%", label: "Customer Satisfaction" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 border border-terminal-green/20 rounded-lg"
                >
                  <div className="text-4xl font-bold text-terminal-green mb-2">{stat.value}</div>
                  <div className="text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Combined Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center border border-terminal-green/20 rounded-lg p-12">
              <h2 className="text-3xl font-bold text-terminal-green mb-6">
                <TypewriterText text="The Combined Impact of TRW.AI" />
              </h2>
              <p className="text-lg text-white/60 mb-12">
                Customer support is just one piece of the puzzle. Our integrated solutions work together to create a seamless customer experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { value: "30%", label: "Revenue Growth in 6 Months" },
                  { value: "20+", label: "Hours Saved per Week" },
                  { value: "40%", label: "Higher Customer Retention" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="text-3xl font-bold text-terminal-green mb-2">
                      <TypewriterText text={stat.value} delay={index * 0.2} />
                    </div>
                    <div className="text-white/60">
                      <TypewriterText text={stat.label} delay={index * 0.2 + 0.2} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-terminal-green mb-6">
              <TypewriterText text="Ready to Transform Your Customer Support?" />
            </h2>
            <p className="text-lg text-white/60 mb-8">
              Join the AI revolution and deliver exceptional customer experiences 24/7.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/start')}
              className="bg-terminal-green text-black px-8 py-4 rounded hover:bg-terminal-green/90 transition-colors font-bold tracking-wider"
            >
              Schedule a Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}