import React from 'react';
import styled from 'styled-components';
import { Circle } from 'lucide-react';
import Section from '../common/Section';
import { Card } from '../common/Card';
import { HeaderContainer, Title, Description } from '../common/Header';

const Quote = styled(Description)`
    font-style: italic;
    border-left: 4px solid ${(props) => props.theme.colors.accent}40;
    padding: 0.5rem 0 0.5rem 1.5rem;
    text-align: left;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const PillarTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
`;

const PillarDescription = styled.p`
    color: #6b7280;
    margin-bottom: 1rem;
`;

const PillarList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

const PillarListItem = styled.li`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    line-height: 1.6;

    svg {
        flex-shrink: 0;
        color: ${(props) => props.theme.colors.accent};
        margin-top: 0.25rem;
    }
`;

const FoundationsSection: React.FC = () => {
    return (
        <Section id="foundations">
            <HeaderContainer>
                <Title>The Two Pillars of Great Design</Title>
                <Quote>
                    What defines a good UI now-a-days? A good UI is no longer just about aesthetics; it's a blend of seamless functionality and sophisticated design that anticipates user needs.
                </Quote>
            </HeaderContainer>
            <Grid>
                <Card>
                    <PillarTitle>Pillar 1: Timeless Elegance</PillarTitle>
                    <PillarDescription>Enduring rules of simplicity and clarity that form the bedrock of good design.</PillarDescription>
                    <PillarList>
                        <PillarListItem>
                            <Circle size={12} strokeWidth={3} />
                            <span><strong>Elegant Simplicity (KISS):</strong> Eliminate irrelevant information to reduce cognitive load.</span>
                        </PillarListItem>
                        <PillarListItem>
                            <Circle size={12} strokeWidth={3} />
                            <span><strong>Mastery of White Space:</strong> Use negative space to create focus and guide the user.</span>
                        </PillarListItem>
                        <PillarListItem>
                            <Circle size={12} strokeWidth={3} />
                            <span><strong>Strict & Muted Visuals:</strong> A limited color palette and strong typography create a clean, professional interface.</span>
                        </PillarListItem>
                    </PillarList>
                </Card>
                <Card>
                    <PillarTitle>Pillar 2: The Modern Standard</PillarTitle>
                    <PillarDescription>Essential practices that address the complexities of today's multi-device world.</PillarDescription>
                    <PillarList>
                        <PillarListItem>
                            <Circle size={12} strokeWidth={3} />
                            <span><strong>Accessibility by Default:</strong> Design for everyone. Meeting WCAG AA is the minimum.</span>
                        </PillarListItem>
                        <PillarListItem>
                            <Circle size={12} strokeWidth={3} />
                            <span><strong>Responsive & Mobile-First:</strong> Layouts must adapt seamlessly to any screen size.</span>
                        </PillarListItem>
                        <PillarListItem>
                            <Circle size={12} strokeWidth={3} />
                            <span><strong>Clear Visual Hierarchy:</strong> Intentionally guide the user's eye to the most important elements.</span>
                        </PillarListItem>
                    </PillarList>
                </Card>
            </Grid>
        </Section>
    );
};

export default FoundationsSection;