import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import colors from '../../utils/theme';
import Accordian from '../accordian';
import Button from '../button';
import Chip from '../chip';
import Flex from '../flex';
import Text from '../text';

export interface ProjectItemProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  summary: string;
  tag: string;
}

const Container = styled(Accordian)({
  padding: '20px',
  transition: '0.3s',
  '&:hover': {
    backgroundColor: colors.ternary,
    filter: 'brightness(1.1)',
  },
});

const ProjectItem: React.FC<ProjectItemProps> = ({ title, summary, tag }) => (
  <Container>
    <Text size="large">{title}</Text>
    <Flex type="spaceBetween">
      <Text>{summary}</Text>
      <Button size=" " variant="secondary">
        View Project
      </Button>
    </Flex>
    <Flex>
      <Chip type="primary">{tag}</Chip>
    </Flex>
  </Container>
);

export default ProjectItem;
