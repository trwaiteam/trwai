import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { TypewriterText } from '../components/TypewriterText';
import { Database, Workflow, Settings, BarChart3, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function CRMIntegrations() {
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
              <TypewriterText text="Seamless CRM Integration with AI Power" />
            </h1>
            <p className="text-xl text-white/60 mb-8">
              <TypewriterText 
                text="Streamline your business processes with intelligent automation that connects your data and tools for maximum efficiency."
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
              <TypewriterText text="Common CRM Integration Challenges" />
            </h2>
            <p className="text-lg text-white/60 mb-12">
              Traditional CRM integrations are complex, time-consuming, and prone to errors. Your business needs a smarter solution.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Database,
                  title: "Data Silos",
                  description: "Disconnected systems leading to fragmented customer data"
                },
                {
                  icon: Workflow,
                  title: "Manual Processes",
                  description: "Time-consuming data entry and workflow management"
                },
                {
                  icon: Settings,
                  title: "Complex Setup",
                  description: "Lengthy implementation and technical challenges"
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
              <TypewriterText text="The TRW.AI CRM Integration Advantage" />
            </h2>
            <p className="text-lg text-white/60 mb-12 text-center">
              Our AI-powered integration platform connects your systems seamlessly, automating workflows and providing real-time insights.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Automated Data Sync",
                  description: "Eliminate manual data entry with intelligent synchronization",
                  features: ["Real-time updates", "Data validation", "Error prevention"]
                },
                {
                  title: "Smart Workflows",
                  description: "Create automated processes that adapt to your business needs",
                  features: ["Custom triggers", "Conditional logic", "Multi-step automation"]
                },
                {
                  title: "Unified Dashboard",
                  description: "Access all your customer data and insights in one place",
                  features: ["360° customer view", "Custom reports", "Performance metrics"]
                },
                {
                  title: "AI-Powered Insights",
                  description: "Get actionable recommendations for process optimization",
                  features: ["Trend analysis", "Predictive analytics", "Optimization suggestions"]
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
              <TypewriterText text="Integration Success Metrics" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { value: "25%", label: "Team Productivity Boost" },
                { value: "60%", label: "Faster Implementation" },
                { value: "99.9%", label: "Data Accuracy" }
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
                CRM integration is just the beginning. Our solutions work together to create a fully optimized business ecosystem.
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
              <TypewriterText text="Ready to Streamline Your CRM Integration?" />
            </h2>
            <p className="text-lg text-white/60 mb-8">
              Transform your business processes with intelligent automation today.
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