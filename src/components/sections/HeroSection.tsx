import React from 'react';
import styled from 'styled-components';
import Section from '../common/Section';

const HeroContainer = styled.div`
    text-align: center;
`;

const Title = styled.h1`
    font-size: 4.5rem;
    font-weight: 800;
    letter-spacing: -0.05em;
    line-height: 1.1;

    @media (max-width: 768px) {
        font-size: 3.75rem;
    }
    @media (max-width: 640px) {
        font-size: 2.5rem;
    }
`;

const AccentText = styled.span`
    color: ${(props) => props.theme.colors.accent};
`;

const Subtitle = styled.p`
    margin-top: 1.5rem;
    max-width: 42rem;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors.description};
`;

const HeroSection: React.FC = () => {
    return (
        <Section>
            <HeroContainer>
                <Title>
                    A New Vision for<br/>
                    <AccentText>User Interface Design</AccentText>
                </Title>
                <Subtitle>
                    It's time to stop reusing old patterns. An strategy to build modern, effective, and
                    engaging digital experiences.
                </Subtitle>
            </HeroContainer>
        </Section>
    );
};

export default HeroSection;