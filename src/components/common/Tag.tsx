import React from 'react';
import styled from 'styled-components';

type EffortLevel = 'Low' | 'Medium' | 'High';

const effortColors = {
    Low: { bg: '#D1FAE5', text: '#065F46' }, // green
    Medium: { bg: '#FEF3C7', text: '#92400E' }, // yellow
    High: { bg: '#FEE2E2', text: '#991B1B' }, // red
};

const TagWrapper = styled.span<{ $effort: EffortLevel }>`
  display: inline-block;
  background-color: ${({ $effort }) => effortColors[$effort].bg};
  color: ${({ $effort }) => effortColors[$effort].text};
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
`;

interface TagProps {
    effort: EffortLevel;
}

const Tag: React.FC<TagProps> = ({ effort }) => {
    return <TagWrapper $effort={effort}>{effort} Effort</TagWrapper>;
};

export default Tag;