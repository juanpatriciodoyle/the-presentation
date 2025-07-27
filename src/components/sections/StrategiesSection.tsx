import React, {useState} from 'react';
import styled from 'styled-components';
import Section from '../common/Section';
import {Card} from '../common/Card';
import {Strategy, strategyData} from '../../data/strategyData';
import {Description, HeaderContainer, Title} from '../common/Header';

const StrategyGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    align-items: start;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

const SelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const StrategySelectorCard = styled(Card)<{ $isActive: boolean }>`
    cursor: pointer;
    border: 2px solid ${(props) => (props.$isActive ? props.theme.colors.accent : 'transparent')};
    transform: ${(props) => (props.$isActive ? 'translateY(-5px)' : 'none')};
    box-shadow: ${(props) => (props.$isActive ? props.theme.colors.cardShadow : '0 4px 6px -1px rgba(0, 0, 0, 0.1)')};
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    padding: 1.5rem;
`;

const SwitchCardTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 8px;
`;

const ContentDisplay = styled(Card)`
    position: relative;
`;

const AppsTitle = styled.div<{ $isVisible: boolean }>`
    transition: opacity 0.4s ease-in-out;
    opacity: ${(props) => (props.$isVisible ? 1 : 0)};
    color: ${(props) => props.theme.colors.secondaryText};
    font-weight: bold;
`

const AppDescription = styled.div<{ $isVisible: boolean }>`
    transition: opacity 0.4s ease-in-out;
    opacity: ${(props) => (props.$isVisible ? 1 : 0)};
    color: ${(props) => props.theme.colors.secondaryText};
`

const ContentInner = styled.div<{ $isVisible: boolean }>`
    transition: opacity 0.4s ease-in-out;
    opacity: ${(props) => (props.$isVisible ? 1 : 0)};

    h3 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    h4 {
        font-weight: 600;
        font-size: 1.125rem;
        margin-bottom: 0.5rem;
    }

    p {
        color: ${(props) => props.theme.colors.description};
        line-height: 1.6;
    }

    > div {
        margin-bottom: 1.5rem;
    }
`;

const ExampleCard = styled.div`
    background-color: #f9fafb;
    padding: 0.75rem;
    border-radius: 0.5rem;
    margin-top: 0.75rem;

    p:first-child {
        font-weight: 600;
    }

    p:last-child {
        font-size: 0.875rem;
    }
`;

const StrategiesSection: React.FC = () => {
    const [activeStrategy, setActiveStrategy] = useState<'minimalist' | 'immersive'>('minimalist');
    const [content, setContent] = useState<Strategy | null>(strategyData.minimalist);
    const [isContentVisible, setIsContentVisible] = useState(true);

    const handleSelectStrategy = (key: 'minimalist' | 'immersive') => {
        setIsContentVisible(false);
        setTimeout(() => {
            setActiveStrategy(key);
            setContent(strategyData[key]);
            setIsContentVisible(true);
        }, 400);
    };

    return (
        <Section id="strategies">
            <HeaderContainer>
                <Title>Our Two Strategic Directions</Title>
                <Description>Based on our principles, we can pursue two distinct and powerful UI strategies. Click to
                    explore each approach.</Description>
            </HeaderContainer>
            <StrategyGrid>
                <SelectorContainer>
                    <StrategySelectorCard
                        $isActive={activeStrategy === 'minimalist'}
                        onClick={() => handleSelectStrategy('minimalist')}
                    >
                        <SwitchCardTitle>The Hyper-Efficient & Minimalist Interface</SwitchCardTitle>
                        <p>A frictionless, task-oriented user journey focused on speed and clarity.</p>
                    </StrategySelectorCard>
                    <StrategySelectorCard
                        $isActive={activeStrategy === 'immersive'}
                        onClick={() => handleSelectStrategy('immersive')}
                    >
                        <SwitchCardTitle>The Emotionally Intelligent & Immersive Experience</SwitchCardTitle>
                        <p>An engaging, memorable, and brand-building interaction.</p>
                    </StrategySelectorCard>
                </SelectorContainer>
                <ContentDisplay>
                    {content && (
                        <ContentInner $isVisible={isContentVisible}>
                            <div>
                                <h3>{content.title}</h3>
                                <p>{content.description}</p>
                            </div>
                            <div>
                                <h4>Why It Works</h4>
                                <p>{content.why}</p>
                            </div>
                            <div>
                                <h4>The Holy Trinity of Visuals</h4>
                                <p dangerouslySetInnerHTML={{__html: content.trinity}}/>
                            </div>
                            <div>
                                <h4>Examples</h4>
                                {content.examples.map((ex) => (
                                    <ExampleCard key={ex.name}>
                                        <AppsTitle $isVisible={isContentVisible}>{ex.name}</AppsTitle>
                                        <AppDescription $isVisible={isContentVisible}>{ex.desc}</AppDescription>
                                    </ExampleCard>
                                ))}
                            </div>
                        </ContentInner>
                    )}
                </ContentDisplay>
            </StrategyGrid>
        </Section>
    );
};

export default StrategiesSection;