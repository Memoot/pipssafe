import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Target, Eye, Shield, Award, Users, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "We provide verified results and never hide our performance. What you see is what you get.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Every signal is meticulously analyzed using institutional-grade methodologies.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in growing together. Our traders support each other on the journey to success.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We continuously improve our strategies and services to deliver the best results.",
  },
];

const stats = [
  { value: "2019", label: "Founded" },
  { value: "10,000+", label: "Active Members" },
  { value: "87%+", label: "Win Rate" },
  { value: "50+", label: "Countries" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="gold-text">Safe Pips</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're a team of professional traders and analysts dedicated to 
              helping traders worldwide achieve consistent profitability through 
              expert signals and education.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="card-elevated rounded-2xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold gold-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-elevated rounded-2xl p-8"
            >
              <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-background" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To democratize professional trading by providing retail traders with 
                the same quality analysis and signals that institutional traders use. 
                We believe everyone deserves access to the tools and knowledge needed 
                to succeed in the financial markets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-elevated rounded-2xl p-8"
            >
              <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-background" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's most trusted trading signals and education 
                platform, known for transparency, consistent results, and exceptional 
                trader success stories. We envision a community where traders support 
                each other in achieving financial independence.
              </p>
            </motion.div>
          </div>

          {/* Why Safe Pips */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose <span className="gold-text">Safe Pips</span>?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We stand apart from other signal providers through our commitment 
                to these core values.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card-elevated rounded-2xl p-6 text-center hover-lift"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-elevated rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Safe Pips was founded in 2019 by a group of professional traders who 
                saw a significant gap in the market for reliable, transparent trading 
                signals. Frustrated by the lack of accountability in the industry, they 
                set out to create a service that would prioritize member success above all else.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Starting with just a handful of members, we focused on delivering consistent 
                results while building a supportive community. Word spread quickly, and today 
                we serve over 10,000 active traders across more than 50 countries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team now includes analysts, educators, and support specialists, all united 
                by a common goal: to help our members achieve their trading goals. We continue 
                to evolve, adding new features and courses based on member feedback, always 
                staying true to our founding principles of trust, transparency, and excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
