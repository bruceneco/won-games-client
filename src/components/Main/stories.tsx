import Main from ".";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Main",
  component: Main,
  args: {
    title: "Test default",
    description: "Default also"
  }
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;

export const Default: Story = (args) => <Main {...args} />;
Default.args = {
  title: "NextJS Boilerplate",
  description: "TypeScript, NextJS, ReactJS and Styled-Components"
};
