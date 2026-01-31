"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: Math.random() * 10 + 2 + "px",
              height: Math.random() * 10 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%"
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div
        className="max-w-6xl mx-auto space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold tracking-wide"
          variants={itemVariants}
        >
          Experience
        </motion.h2>

        {/* Experience Card Container */}
        <div className="bg-card/60 backdrop-blur-sm border rounded-2xl divide-y">

          {/* Internship 1 */}
          <motion.div
            variants={itemVariants}
            className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10"
          >
            {/* Left side (meta info) */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                Web Developer Intern
              </h3>
              <p className="text-primary font-medium">
                Aimence Infotech Pvt Ltd
              </p>
              <p className="text-sm text-muted-foreground">
                May 2025 – Oct 2025
              </p>
              <p className="text-sm text-muted-foreground">
                Industry: IT Services
              </p>
            </div>

            {/* Right side (description) */}
            <div className="md:col-span-2 text-muted-foreground leading-relaxed text-sm sm:text-base">
              Designed and developed  website intuitive user experience.
              Built a professional corporate website to showcase services and
              portfolio, strengthening online presence and brand identity.
              Delivered responsive, performance-optimized interfaces using
              modern web technologies and reusable UI components.
            </div>
          </motion.div>

          {/* Internship 2 */}
          <motion.div
            variants={itemVariants}
            className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10"
          >
            {/* Left side (meta info) */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                SEO Specialist Intern
              </h3>
              <p className="text-primary font-medium">
                Ozark Solution
              </p>
              <p className="text-sm text-muted-foreground">
                Feb 2024 – Jun 2024
              </p>
              <p className="text-sm text-muted-foreground">
                Industry: E-commerce
              </p>
            </div>

            {/* Right side (description) */}
            <div className="md:col-span-2 text-muted-foreground leading-relaxed text-sm sm:text-base">
              Conducted SEO audits and analyzed website performance using
              Google Analytics. Optimized content through keyword research,
              improved indexing, and resolved technical SEO issues. Enhanced
              user experience by optimizing images, reducing load time, and
              improving Core Web Vitals for better search rankings.
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Gradient blobs */}
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-gradient-to-r from-primary to-purple-500 blur-[80px] sm:blur-[100px]"
          animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-gradient-to-r from-blue-500 to-primary blur-[80px] sm:blur-[100px]"
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", delay: 5 }}
        />
      </motion.div>



      
    </section>
  );
};
