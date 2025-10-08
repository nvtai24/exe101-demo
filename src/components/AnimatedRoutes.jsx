import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./PageTransition";
import Home from "../pages/Home";
import AIPlanner from "../pages/AIPlanner";
import Destinations from "../pages/Destinations";
import Tours from "../pages/Tours";
import Community from "../pages/Community";
import About from "../pages/About";
import Contact from "../pages/Contact";
import TourDetail from "../pages/TourDetail";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/ai-planner"
          element={
            <PageTransition>
              <AIPlanner />
            </PageTransition>
          }
        />
        <Route
          path="/destinations"
          element={
            <PageTransition>
              <Destinations />
            </PageTransition>
          }
        />
        <Route
          path="/tours"
          element={
            <PageTransition>
              <Tours />
            </PageTransition>
          }
        />
        <Route
          path="/tours/:id"
          element={
            <PageTransition>
              <TourDetail />
            </PageTransition>
          }
        />
        <Route
          path="/community"
          element={
            <PageTransition>
              <Community />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
