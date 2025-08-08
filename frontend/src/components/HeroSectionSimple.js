import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const NodeNetworkBackground = () => {
  const canvasRef = useRef(null);
  const nodes = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    if (nodes.current.length === 0) {
      for (let i = 0; i < 50; i++) {
        nodes.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 2 + 1,
          dx: (Math.random() - 0.5) * 0.3,
          dy: (Math.random() - 0.5) * 0.3,
        });
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "rgba(0, 80, 180, 0.9)";
      ctx.strokeStyle = "rgba(0, 80, 180, 0.7)";
      ctx.lineWidth = 1.5;
      ctx.shadowColor = "rgba(0, 80, 180, 0.7)";
      ctx.shadowBlur = 4;

      nodes.current.forEach((node) => {
        node.x += Math.sin(Date.now() * 0.001 + node.x) * 0.1 + node.dx;
        node.y += Math.cos(Date.now() * 0.001 + node.y) * 0.1 + node.dy;

        if (node.x < 0 || node.x > width) node.dx *= -1;
        if (node.y < 0 || node.y > height) node.dy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r + 0.5, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = 0; i < nodes.current.length; i++) {
        for (let j = i + 1; j < nodes.current.length; j++) {
          const dist = Math.hypot(
            nodes.current[i].x - nodes.current[j].x,
            nodes.current[i].y - nodes.current[j].y
          );
          if (dist < 300) {
            ctx.beginPath();
            ctx.moveTo(nodes.current[i].x, nodes.current[i].y);
            ctx.lineTo(nodes.current[j].x, nodes.current[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

// Add CSS styles for the glossy effect on image container
const styles = `
  .glossy-image-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: 1rem; /* Match image rounding */
  }
  .glossy-image-wrapper::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -75%;
    width: 50%;
    height: 200%;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-25deg);
    animation: shine 3s linear infinite;
    pointer-events: none;
    border-radius: 1rem;
    z-index: 10;
  }
  @keyframes shine {
    0% {
      left: -75%;
    }
    100% {
      left: 125%;
    }
  }
`;

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <style>{styles}</style>

      <section
        id="home"
        className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-white"
      >
        {/* Node Network Background */}
        <NodeNetworkBackground />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/80 to-blue-100/70"></div>

        {/* Main Content */}
        <div className="relative z-10 h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div className="space-y-8">
                <motion.div
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100 border border-primary-200 rounded-full text-sm font-medium text-primary-600"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Sparkles className="h-4 w-4" />
                  <span>{t("hero.badge")}</span>
                </motion.div>

                <motion.h1
                  className="text-5xl md:text-7xl font-bold text-secondary-900 leading-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  {t("hero.title")}
                  <span className="block gradient-text"> {t("hero.subtitle1")}</span>
                  <span className="block text-primary-600"> {t("hero.subtitle2")}</span>
                </motion.h1>

                <motion.p
                  className="text-xl text-secondary-600 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {t("hero.description")}
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <motion.button
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/25 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      document.getElementById("ecosystem").scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <span>{t("hero.exploreEcosystem")}</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </motion.button>

                  <motion.button
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl border border-primary-200 hover:bg-primary-50 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      document.getElementById("use-cases").scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <PlayCircle className="mr-2 h-5 w-5" />
                    <span>{t("hero.viewUseCases")}</span>
                  </motion.button>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="relative h-full flex items-center">
                <motion.div
                  className="glossy-image-wrapper"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1.0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <img
                    src="website_image_1_trans.png"
                    alt="Advanced Robotics Facility"
                    className="w-full object-contain rounded-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

