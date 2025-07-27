import React from 'react';
import styled from 'styled-components';
import Section from '../common/Section';
import {Card} from '../common/Card';
import Tag from '../common/Tag';
import {Description, HeaderContainer, Title} from '../common/Header';

const StepsContainer = styled(Card)`
    max-width: 48rem;
    margin: 0 auto;
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

    @media (max-width: 640px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
    }
`;

const StepContent = styled.div`
    flex-grow: 1;
`;

const StepTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 700;
`;

const StepDescription = styled.p`
    color: ${(props) => props.theme.colors.description};
`;

const TagContainer = styled.div`
    flex-shrink: 0;
`;

const ActionableStepsSection: React.FC = () => {
    return (
        <Section id="actions">
            <HeaderContainer>
                <Title>Actionable Next Steps</Title>
                <Description>How we can begin to lead this initiative.</Description>
            </HeaderContainer>
            <StepsContainer>
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
            </StepsContainer>
        </Section>
    );
};

export default ActionableStepsSection;