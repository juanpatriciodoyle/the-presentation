import React from 'react';
import styled from 'styled-components';
import {useScrollAnimation} from '../../hooks/useScrollAnimation';

const SectionWrapper = styled.section<{ $isVisible: boolean, $paddingTop?: string, $paddingBottom?: string }>`
    padding-top: ${(props) => props.$paddingTop || '5rem'};
    padding-bottom: ${(props) => props.$paddingBottom || '5rem'};
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 1s ease-out;

    ${(props) =>
            props.$isVisible &&
            `
    opacity: 1;
    transform: translateY(0);
  `};

    @media (max-width: 640px) {
        padding-top: ${(props) => props.$paddingTop || '3rem'};
        padding-bottom: ${(props) => props.$paddingBottom || '3rem'};
    }
`;

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    paddingTop?: string;
    paddingBottom?: string;
}

export default function Section ({children, id, className, paddingTop, paddingBottom}: SectionProps) {
    const {ref, isVisible} = useScrollAnimation<HTMLDivElement>();

    return (
        <SectionWrapper
            ref={ref}
            $isVisible={isVisible}
            id={id}
            className={className}
            $paddingTop={paddingTop}
            $paddingBottom={paddingBottom}
        >
            {children}
        </SectionWrapper>
    );
};