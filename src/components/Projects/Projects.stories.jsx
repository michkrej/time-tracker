import React from "react";

import Projects from "./Projects";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Projects",
  component: Projects,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Projects {...args} />;

export const ProjectsGrid = Template.bind({});

ProjectsGrid.args = {
  /*👇 The args you need here will depend on your component */
};
