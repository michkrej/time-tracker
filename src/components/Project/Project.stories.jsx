// YourComponent.stories.js | YourComponent.stories.jsx

import React from "react";

import Project from "./Project";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Project",
  component: Project,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Project {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
