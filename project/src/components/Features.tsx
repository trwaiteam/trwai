import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Zap } from 'lucide-react';

const features = [
  {
    title: 'AI WORKFLOWS',
    description: '> Build automation tailored to your business needs and goals.',
    icon: Terminal,
  },
  {
    title: 'INTEGRATION',
    description: '> Works perfectly with your existing tools and platforms.',
    icon: Cpu,
  },
  {
    title: 'RESULTS',
    description: '> Real-world success in reducing costs and boosting growth.',
    icon: Zap,
  },
];

export function Features() {
  return (
    <section className="relative py-24 font-mono">
      {/* Top fade gradient */}
      <div className="absolute top-0 left-0 right-0 h-[150px] bg-gradient-to-t from-black/80 via-black/80 to-transparent backdrop-blur-sm" />
      
      {/* Background */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-terminal-green mb-4">&gt;_WHY TRW.AI?</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            &gt; We design custom AI automation solutions that optimize your workflows,
            <br />&gt; so you can focus on what truly matters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="text-center group"
            >
              <div className="inline-block p-4 bg-terminal-green/5 rounded-lg mb-6 group-hover:bg-terminal-green/10 transition-colors backdrop-blur-sm">
                <feature.icon className="w-8 h-8 text-terminal-green" />
              </div>
              <h3 className="text-xl font-bold text-terminal-green mb-3">&gt;_{feature.title}</h3>
              <p className="text-white/60 font-mono">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}