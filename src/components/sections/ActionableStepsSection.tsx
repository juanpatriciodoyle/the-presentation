import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card } from '../common/Card';
import Tag from '../common/Tag';
import { Description, HeaderContainer, Title } from '../common/Header';
import Section from "../common/Section";

const AnimationContainer = styled.div`
    perspective: 2000px;
    height: 50vh;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`;

const FlippingCard = styled(motion.div)`
    position: relative;
    max-width: 48rem;
    width: 100%;
    height: 300px;
    transform-style: preserve-3d;
`;

const CardFace = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
`;

const CardFront = styled(CardFace)`
    /* The Card component will provide the background and styling */
`;

const CardBack = styled(CardFace)`
    transform: rotateY(180deg);
`;

const CardBackContent = styled(Card)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
`;

const StepsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const StepItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`;

const StepContent = styled.div`
    flex-grow: 1;
`;

const StepTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 8px;
`;

const StepDescription = styled.p`
    color: ${(props) => props.theme.colors.description};
`;

const TagContainer = styled.div`
    flex-shrink: 0;
`;

const ActionableStepsSection: React.FC = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start']
    });

    const rotateX = useTransform(scrollYProgress, [0.1, 0.3], [60, 0]);
    const rotateY = useTransform(scrollYProgress, [0.4, 0.6], [0, 180]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.7, 1]);

    return (
        <Section id="actions">
            <HeaderContainer>
                <Title>Next Steps</Title>
                <Description>How we can begin to lead this initiative.</Description>
            </HeaderContainer>
            <AnimationContainer ref={targetRef}>
                <FlippingCard style={{ rotateX, rotateY, scale }}>
                    <CardFront as={Card}>
                        <StepsList>
                            <StepItem>
                                <StepContent>
                                    <StepTitle>Flip-UP our apps</StepTitle>
                                    <StepDescription>Showcase how our apps can be visually and functionally improved from a
                                        design perspective.</StepDescription>
                                </StepContent>
                                <TagContainer>
                                    <Tag effort="Low"/>
                                </TagContainer>
                            </StepItem>
                            <StepItem>
                                <StepContent>
                                    <StepTitle>Be a Design Setter / Filter</StepTitle>
                                    <StepDescription>Establish and enforce new design standards to ensure quality and
                                        consistency.</StepDescription>
                                </StepContent>
                                <TagContainer>
                                    <Tag effort="Medium"/>
                                </TagContainer>
                            </StepItem>
                            <StepItem>
                                <StepContent>
                                    <StepTitle>Provide Visual Prototypes</StepTitle>
                                    <StepDescription>Create tangible, high-fidelity prototypes to establish a clear visual
                                        standard.</StepDescription>
                                </StepContent>
                                <TagContainer>
                                    <Tag effort="High"/>
                                </TagContainer>
                            </StepItem>
                        </StepsList>
                    </CardFront>
                    <CardBack>
                        <CardBackContent>Let's tackle the UX challenges!</CardBackContent>
                    </CardBack>
                </FlippingCard>
            </AnimationContainer>
        </Section>
    );
};

export default ActionableStepsSection;