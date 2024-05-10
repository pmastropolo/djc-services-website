import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@library/projects";

import Hero3Section from "@components/sections/Hero3";
import About3Section from "@components/sections/About3";
import AboutSection from "@components/sections/About";
import CallToActionSection from "@components/sections/CallToAction";
import ContactFormSection from "@components/sections/ContactForm";
import LatestPosts2Section from "@components/sections/LatestPosts2";

const ProjectsSlider = dynamic( () => import("@components/sliders/Projects"), { ssr: false } );

const Home3 = (props) => {
  return (
    <Layouts contactButton cartButton>
      <>
        <Hero3Section />
        <AboutSection />
        <About3Section />
        <ContactFormSection />
        <ProjectsSlider projects={props.projects} />
        <LatestPosts2Section posts={props.posts} />
        <CallToActionSection />
      </>
    </Layouts>
  );
};
export default Home3;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  const allProjects = getSortedProjectsData();

  return {
    props: {
      posts: allPosts,
      projects: allProjects
    }
  }
}