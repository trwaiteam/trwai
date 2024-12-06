import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { TypewriterText } from '../components/TypewriterText';
import { Users, Target, BarChart, Zap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function AILeadGeneration() {
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
              <TypewriterText text="Unlock Growth with AI-Powered Lead Generation" />
            </h1>
            <p className="text-xl text-white/60 mb-8">
              <TypewriterText 
                text="Say goodbye to manual prospecting. Let AI find, analyze, and deliver high-quality leads straight to your CRM."
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
              <TypewriterText text="The Problem with Traditional Lead Generation" />
            </h2>
            <p className="text-lg text-white/60 mb-12">
              Manual lead generation is slow, inefficient, and expensive. Sales teams waste hours chasing unqualified leads, while ideal customers slip through the cracks.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Wasted Time",
                  description: "Hours spent on manual prospecting and unqualified leads"
                },
                {
                  icon: Target,
                  title: "Poor Targeting",
                  description: "Difficulty identifying and reaching ideal customers"
                },
                {
                  icon: BarChart,
                  title: "Low ROI",
                  description: "High costs with unpredictable results and conversion rates"
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
              <TypewriterText text="How TRW.AI Revolutionizes Lead Generation" />
            </h2>
            <p className="text-lg text-white/60 mb-12 text-center">
              Our AI tools analyze vast datasets, pinpoint high-quality leads, and automate outreach—so your sales team can focus on closing deals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Intelligent Prospecting",
                  description: "AI identifies ideal customers based on behavioral and demographic data",
                  features: ["Pattern recognition", "Predictive analytics", "Real-time updates"]
                },
                {
                  title: "Lead Scoring",
                  description: "Automatically prioritize leads based on their likelihood to convert",
                  features: ["Machine learning algorithms", "Behavioral analysis", "Custom scoring models"]
                },
                {
                  title: "Automated Outreach",
                  description: "Personalized communication at scale with perfect timing",
                  features: ["Smart scheduling", "Dynamic content", "Multi-channel approach"]
                },
                {
                  title: "Performance Analytics",
                  description: "Detailed insights and reporting for continuous optimization",
                  features: ["Real-time dashboards", "ROI tracking", "A/B testing"]
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
              <TypewriterText text="Results You Can Count On" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { value: "45%", label: "Increase in Lead-to-Customer Conversion" },
                { value: "35%", label: "Lower Cost-per-Lead on Average" },
                { value: "3X", label: "More Qualified Leads in 30 Days" }
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
                Lead generation is just the beginning. Our solutions integrate seamlessly with customer support management and CRM workflows for maximum efficiency and results.
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
              <TypewriterText text="Ready to Scale Your Business with AI?" />
            </h2>
            <p className="text-lg text-white/60 mb-8">
              Don't wait—let TRW.AI transform your lead generation strategy today.
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