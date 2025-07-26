import React from 'react';
import styled from 'styled-components';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const SectionWrapper = styled.section<{ $isVisible: boolean }>`
  padding: 5rem 0;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  ${(props) =>
    props.$isVisible &&
    `
    opacity: 1;
    transform: translateY(0);
  `};

  @media (max-width: 640px) {
    padding: 3rem 0;
  }
`;

interface SectionProps {
    children: React.ReactNode;
    id?: string;
}

const Section: React.FC<SectionProps> = ({ children, id }) => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

    return (
        <SectionWrapper ref={ref} $isVisible={isVisible} id={id}>
            {children}
        </SectionWrapper>
    );
};

export default Section;