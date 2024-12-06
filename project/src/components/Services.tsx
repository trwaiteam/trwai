import React from 'react';
import { motion } from 'framer-motion';
import { Users, HeadphonesIcon, Database } from 'lucide-react';
import { TypewriterText } from './TypewriterText';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    icon: Users,
    title: "AI LEAD GENERATION",
    route: "/services/ai-lead-generation",
    headline: "Turn Prospects into Customers with AI-Powered Precision",
    description: "Generate high-quality leads with cutting-edge AI algorithms designed to find, analyze, and engage your ideal audience.",
    stats: [
      { value: "45%", label: "INCREASE IN CONVERSION" },
      { value: "35%", label: "REDUCED COST PER LEAD" },
      { value: "3X", label: "MORE QUALIFIED LEADS" }
    ],
    features: [
      "Targeted Outreach with AI-driven insights",
      "Efficient Scaling to reach 100s daily",
      "Real-Time Analytics for ROI optimization"
    ]
  },
  {
    icon: HeadphonesIcon,
    title: "CUSTOMER SUPPORT AI",
    route: "/services/customer-support",
    headline: "AI-Driven Customer Support That Never Sleeps",
    description: "Deliver seamless, 24/7 customer support with intelligent automation that understands, resolves, and delights your customers.",
    stats: [
      { value: "70%", label: "FASTER RESPONSE TIME" },
      { value: "500h", label: "SAVED PER MONTH" },
      { value: "92%", label: "CUSTOMER SATISFACTION" }
    ],
    features: [
      "Instant AI responses for 85% of queries",
      "Smart issue escalation system",
      "Personalized customer interactions"
    ]
  },
  {
    icon: Database,
    title: "CRM INTEGRATIONS",
    route: "/services/crm-integrations",
    headline: "Seamless CRM Integrations for Smarter Workflows",
    description: "Streamline your business processes with AI-powered CRM integrations that connect your data and tools for maximum efficiency.",
    stats: [
      { value: "25%", label: "TEAM PRODUCTIVITY BOOST" },
      { value: "60%", label: "FASTER IMPLEMENTATION" },
      { value: "99.9%", label: "DATA ACCURACY" }
    ],
    features: [
      "Automated data entry & syncing",
      "Unified dashboard view",
      "Custom workflow automation"
    ]
  }
];

export function Services() {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 font-mono">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-bold text-terminal-green mb-4">
            <TypewriterText text="_OUR SERVICES" />
          </h2>
          <p className="text-lg text-white/60">
            <TypewriterText 
              text="Future-Proof Your Business with AI Automation" 
              delay={0.3}
            />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Enhanced glow effect container */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-terminal-green/5 rounded-lg blur-[8px] animate-glow-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-terminal-purple/10 to-terminal-blue/10 rounded-lg blur-[12px] animate-pulse" />
              </div>
              
              {/* Card content */}
              <div className="relative bg-black/50 backdrop-blur-sm border border-terminal-green/20 rounded-lg p-6 transition-all duration-300 group-hover:border-terminal-green/40 group-hover:transform group-hover:scale-[1.02]">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <service.icon className="w-12 h-12 text-terminal-green mb-6 animate-bounce-subtle" />
                </motion.div>

                <h3 className="text-xl font-bold text-terminal-green mb-4">
                  _{service.title}
                </h3>
                <p className="text-white/60 mb-6 h-24">
                  {service.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {service.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      className="text-center transform transition-all duration-300 hover:scale-105"
                      whileHover={{ y: -5 }}
                    >
                      <motion.div
                        className="text-terminal-green font-bold text-2xl animate-flicker"
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1 + i * 0.1 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-white/40 text-xs">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="text-white/60 text-sm transform transition-all duration-300 hover:translate-x-2 hover:text-white/70"
                      whileHover={{ x: 10, color: "rgba(255, 255, 255, 0.8)" }}
                    >
                      &gt; {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate(service.route)}
                  className="w-full mt-6 border border-terminal-green text-terminal-green py-2 transition-all duration-300 font-bold tracking-wider hover:bg-terminal-green/10 hover:border-terminal-green/60 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.1)]"
                >
                  _LEARN_MORE
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.div
            className="inline-block border border-terminal-green/20 rounded-lg p-8 bg-black/50 backdrop-blur-sm"
            whileHover={{ boxShadow: "0 0 20px rgba(139, 92, 246, 0.1)" }}
          >
            <h3 className="text-2xl font-bold text-terminal-green mb-4">
              <TypewriterText text="_COMBINED IMPACT" />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { value: "30%", label: "Revenue Growth in 6 Months" },
                { value: "20+", label: "Hours Saved per Week" },
                { value: "40%", label: "Higher Customer Retention" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="transform transition-all duration-300"
                >
                  <motion.div
                    className="text-terminal-green font-bold text-3xl mb-2 animate-flicker"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <TypewriterText text={stat.value} delay={index * 0.2} />
                  </motion.div>
                  <div className="text-white/60">
                    <TypewriterText text={stat.label} delay={index * 0.2 + 0.2} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}