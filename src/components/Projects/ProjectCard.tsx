import React from "react";
import { motion } from "framer-motion";
import {
  containerVariants,
  projectCardVariants,
  itemVariants,
  imageVariants,
} from "./variants";

interface Media {
  url: string;
  description?: string;
}

interface Project {
  name: string;
  role: string;
  description: string;
  start_date: string;
  end_date: string;
  media?: Media[];
}

interface ProjectCardProps {
  direction: number;
  currentProject: Project;
  startDate: string;
  endDate: string;
  media: Media[];
  currentProjectIndex: number;
  currentImageIndex: number;
  setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  direction,
  currentProject,
  startDate,
  endDate,
  media,
  currentProjectIndex,
  currentImageIndex,
  setCurrentImageIndex,
}) => {

  const getAssetImage = (url: string) => {
    try {

      const assetPath = url.replace('@/', './');
      return new URL(`/src/${assetPath}`, import.meta.url).href;
    } catch (error) {
      console.error("Error loading image:", error);
      return "";
    }
  };

  return (
    <motion.div
      key={currentProjectIndex}
      className="flex justify-center items-center lg:w-[90%]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        className="card relative w-full mb-16 lg:mb-24 h-auto lg:h-[80vh] overflow-hidden lg:overflow-visible"
        custom={direction}
        variants={projectCardVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Versión Mobile/Tablet */}
        <motion.div
          className="lg:hidden flex flex-col p-6 space-y-4 text-dar dark:text-gray-100"
          variants={containerVariants}
        >
          <motion.span
            variants={itemVariants}
            className="font-rob text-xs text-gray-500 dark:text-gray-400"
          >
            {startDate} – {endDate}
          </motion.span>
          <motion.h4
            variants={itemVariants}
            className="font-rob text-xs sm:text-sm uppercase tracking-[0.2em] text-blue-500 dark:text-blue-400"
          >
            {currentProject.role}
          </motion.h4>
          <motion.h2
            variants={itemVariants}
            className="font-cor text-2xl sm:text-3xl font-bold leading-tight"
          >
            {currentProject.name}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="font-lat text-dar p-4 text-base bg-gray-400/20 rounded-md border border-gray-300/30 dark:border-gray-600 shadow-sm"
          >
            {currentProject.description}
          </motion.p>

          {media.length > 1 && (
            <motion.div variants={itemVariants} className="flex space-x-2">
              {media.map((_, i) => (
                <motion.span
                  key={i}
                  className={`w-2 h-2 rounded-full cursor-pointer ${
                    i === currentImageIndex
                      ? "bg-blue-500 dark:bg-blue-400"
                      : "bg-gray-300"
                  }`}
                  onMouseEnter={() => setCurrentImageIndex(i)}
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Versión Desktop */}
        <motion.div
          className="hidden lg:block absolute left-8 z-10 w-1/2 space-y-4 text-dar dark:text-gray-100 translate-y-16"
          variants={containerVariants}
        >
          <motion.span
            variants={itemVariants}
            className="font-rob text-sm text-gray-500 dark:text-gray-400"
          >
            {startDate} – {endDate}
          </motion.span>
          <motion.h4
            variants={itemVariants}
            className="font-rob text-sm uppercase tracking-[0.2em] text-blue-500 dark:text-blue-400"
          >
            {currentProject.role}
          </motion.h4>
          <motion.h2
            variants={itemVariants}
            className="font-cor text-4xl font-bold leading-tight"
          >
            {currentProject.name}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="font-lat text-dar dark:text-whi p-4 text-base bg-gray-400/20 rounded-md border border-gray-600 shadow-sm"
          >
            {currentProject.description}
          </motion.p>

          {media.length > 1 && (
            <motion.div variants={itemVariants} className="flex space-x-2">
              {media.map((_, i) => (
                <motion.span
                  key={i}
                  className={`w-2 h-2 rounded-full cursor-pointer ${
                    i === currentImageIndex
                      ? "bg-blue-500 dark:bg-blue-400"
                      : "bg-gray-300"
                  }`}
                  onMouseEnter={() => setCurrentImageIndex(i)}
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Contenedor de imágenes mejorado */}
        <motion.div
          className="card w-full lg:absolute right-0 lg:top-1/4 lg:pl-9 lg:w-[55%] h-[300px] sm:h-[400px] lg:h-[60%] overflow-hidden mt-6 lg:mt-0"
          variants={imageVariants}
          whileHover="hover"
        >
          {media.length > 0 ? (
            <motion.img
              src={getAssetImage(media[currentImageIndex].url)}
              alt={media[currentImageIndex].description || "Project Media"}
              className="w-full h-full object-cover rounded-xl lg:translate-y-9 border-b border-gray-200/30 dark:border-gray-600"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              loading="lazy"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-xl">
              <p className="text-gray-500 dark:text-gray-300">
                Sin imágenes disponibles
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;