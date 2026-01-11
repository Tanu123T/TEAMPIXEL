import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Lightbulb, 
  Pencil, 
  Code, 
  Rocket, 
  BarChart, 
  RefreshCw
} from 'lucide-react';

const processSteps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Discovery & Strategy',
    description: 'We dive deep into your brand, audience, and objectives to craft a tailored strategy.',
    details: [
      'Comprehensive market analysis',
      'Competitor research',
      'Target audience profiling',
      'Strategic roadmap creation'
    ]
  },
  {
    number: '02',
    icon: Pencil,
    title: 'Creative Development',
    description: 'Our creative team brings your vision to life with compelling designs and messaging.',
    details: [
      'Brand identity refinement',
      'Visual asset creation',
      'Copywriting & messaging',
      'Design system development'
    ]
  },
  {
    number: '03',
    icon: Code,
    title: 'Technical Implementation',
    description: 'Building robust, scalable solutions with cutting-edge technology and best practices.',
    details: [
      'Platform development',
      'Integration setup',
      'Quality assurance testing',
      'Performance optimization'
    ]
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch & Activation',
    description: 'Strategic deployment ensuring maximum impact and seamless execution.',
    details: [
      'Soft launch testing',
      'Campaign activation',
      'Channel deployment',
      'Initial monitoring'
    ]
  },
  {
    number: '05',
    icon: BarChart,
    title: 'Optimization & Growth',
    description: 'Continuous monitoring and refinement to maximize performance and ROI.',
    details: [
      'Performance tracking',
      'A/B testing',
      'Data analysis',
      'Strategic adjustments'
    ]
  },
  {
    number: '06',
    icon: RefreshCw,
    title: 'Scale & Iterate',
    description: 'Expanding successful strategies and exploring new opportunities for growth.',
    details: [
      'Scaling campaigns',
      'New channel exploration',
      'Innovation testing',
      'Long-term planning'
    ]
  },
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative bg-white">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-20">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A44]">
              How We Transform Your Vision Into Reality
            </h2>
            <p className="text-lg text-[#1E293B]">
              A proven methodology refined through hundreds of successful projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  whileHover={{ scale: 1.03 }}
                  className="p-8 bg-white border border-[#E6ECF4] rounded-2xl hover-card-navy group relative transition-all"
                >
                  <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-[#0F2A44] text-white flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  
                  <Icon className="size-10 text-[#0F2A44] mb-6" />
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#0F2A44]">
                      {step.title}
                    </h3>
                    <p className="text-[#1E293B] leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="space-y-2 pt-4 border-t border-[#E6ECF4]">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-2 text-sm text-[#475569]">
                          <div className="w-1 h-1 rounded-full bg-[#0F2A44]" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
