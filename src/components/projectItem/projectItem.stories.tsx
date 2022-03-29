import React from 'react';
import ProjectItem from '.';

export default {
  title: 'Molecules/ProjectItem',
  component: ProjectItem,
};

export const withDefault = (args:any) => (
  <ProjectItem
    title="Hello Wordl Shivaraj Bakale"
    summary="Hello Wordl Shivaraj Bakale Hello Wordl Shivaraj BakaleHello Wordl Shivaraj Bakale "
    tag="Business Model Canvas"
  />
);
