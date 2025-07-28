import React from 'react';
import styled from 'styled-components';
import {Feather, Maximize, Palette, TabletSmartphone, Layers, AccessibilityIcon} from 'lucide-react';
import Section from '../common/Section';
import { Card } from '../common/Card';
import { Description, HeaderContainer, Title } from '../common/Header';

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

const PillarCard = styled(Card)`
    padding: 32px;
    position: relative;
    overflow: hidden;
`;

const PillarTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    position: relative;
    z-index: 2;
`;

const PillarDescription = styled.p`
    color: ${(props) => props.theme.colors.description};
    margin-bottom: 2.5rem;
    position: relative;
    z-index: 2;
`;

const PillarList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;
    z-index: 2;
`;

const PillarListItem = styled.li`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    line-height: 1.6;

    svg {
        flex-shrink: 0;
        color: ${(props) => props.theme.colors.accent};
        margin-top: 0.2rem;
    }
`;

const ItemTitle = styled.h4`
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
`;

const ItemDescription = styled.p`
    font-size: 0.95rem;
    color: ${(props) => props.theme.colors.description};
    line-height: 1.5;
`;

const Anchor = styled.div`
    position: absolute;
    font-size: 38rem;
    font-weight: 800;
    color: ${(props) => props.theme.colors.accent};
    opacity: 0.05;
    z-index: 1;
    user-select: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;


const FoundationsSection: React.FC = () => {
    return (
        <Section id="foundations">
            <HeaderContainer>
                <Title>The Two Pillars of Great Design</Title>
                <Quote>
                    What defines a good UI now-a-days? A good UI is no longer just about aesthetics; it's a blend of
                    seamless functionality and sophisticated design that anticipates user needs.
                </Quote>
            </HeaderContainer>
            <Grid>
                <PillarCard>
                    <Anchor>1</Anchor>
                    <PillarTitle>Timeless Elegance</PillarTitle>
                    <PillarDescription>Enduring rules of simplicity and clarity that form the bedrock of good
                        design.</PillarDescription>
                    <PillarList>
                        <PillarListItem>
                            <Feather size={24} />
                            <div>
                                <ItemTitle>Keep it Simple Stupid (US Navy)</ItemTitle>
                                <ItemDescription>Eliminate irrelevant information to reduce cognitive load.</ItemDescription>
                            </div>
                        </PillarListItem>
                        <PillarListItem>
                            <Maximize size={24} />
                            <div>
                                <ItemTitle>Mastery of White Space</ItemTitle>
                                <ItemDescription>Use negative space to create focus and guide the user.</ItemDescription>
                            </div>
                        </PillarListItem>
                        <PillarListItem>
                            <Palette size={24} />
                            <div>
                                <ItemTitle>Strict & Muted Visuals</ItemTitle>
                                <ItemDescription>A limited color palette and strong typography create a clean, professional interface.</ItemDescription>
                            </div>
                        </PillarListItem>
                    </PillarList>
                </PillarCard>
                <PillarCard>
                    <Anchor>2</Anchor>
                    <PillarTitle>The Modern Standard</PillarTitle>
                    <PillarDescription>Essential practices that address the complexities of today's multi-device
                        world.</PillarDescription>
                    <PillarList>
                        <PillarListItem>
                            <AccessibilityIcon size={24} />
                            <div>
                                <ItemTitle>Accessibility by Default</ItemTitle>
                                <ItemDescription>Design for everyone. Meeting WCAG AA is the minimum.</ItemDescription>
                            </div>
                        </PillarListItem>
                        <PillarListItem>
                            <TabletSmartphone size={24} />
                            <div>
                                <ItemTitle>Responsive & Mobile-First</ItemTitle>
                                <ItemDescription>Layouts must adapt seamlessly to any screen size.</ItemDescription>
                            </div>
                        </PillarListItem>
                        <PillarListItem>
                            <Layers size={24} />
                            <div>
                                <ItemTitle>Clear Visual Hierarchy</ItemTitle>
                                <ItemDescription>Intentionally guide the user's eye to the most important elements.</ItemDescription>
                            </div>
                        </PillarListItem>
                    </PillarList>
                </PillarCard>
            </Grid>
        </Section>
    );
};

export default FoundationsSection;