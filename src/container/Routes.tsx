// Path: C:\Users\darin\Documents\react-vite-shadcn-ui-template\routes.tsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HomePage from "@/pages/Home/HomePage";
import Contact from "@/pages/Contact/Contact";
import Page2 from "@/pages/Page2/Page2";

export default function AppRoutes() {
  const location = useLocation();

  // Animation variants for page transitions
  const pageVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <HomePage />
            </motion.div>
          }
        />
        <Route
          path="/Contact"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="/page2"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <Page2 />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
