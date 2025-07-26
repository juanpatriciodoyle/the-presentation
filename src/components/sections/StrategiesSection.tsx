import React, { useState } from 'react';
import styled from 'styled-components';
import Section from '../common/Section';
import { Card } from '../common/Card';
import { strategyData, Strategy } from '../../data/strategyData';

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 800;
  letter-spacing: -0.02em;
`;

const SectionDescription = styled.p`
  margin-top: 1rem;
  font-size: 1.125rem;
  color: #6b7280;
`;

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

const ContentDisplay = styled(Card)`
    min-height: 400px;
    position: relative;
`;

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
    color: #4a4a4a;
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
    color: #6b7280;
  }
`;

const StrategiesSection: React.FC = () => {
    const [activeStrategy, setActiveStrategy] = useState<'minimalist' | 'immersive'>('minimalist');
    const [content, setContent] = useState<Strategy | null>(strategyData.minimalist);
    const [isContentVisible, setIsContentVisible] = useState(true);

    const handleSelectStrategy = (key: 'minimalist' | 'immersive') => {
        setIsContentVisible(false); // Fade out
        setTimeout(() => {
            setActiveStrategy(key);
            setContent(strategyData[key]);
            setIsContentVisible(true); // Fade in
        }, 400); // Match transition duration
    };

    return (
        <Section id="strategies">
            <SectionHeader>
                <SectionTitle>Our Two Strategic Directions</SectionTitle>
                <SectionDescription>Based on our principles, we can pursue two distinct and powerful UI strategies. Click to explore each approach.</SectionDescription>
            </SectionHeader>
            <StrategyGrid>
                <SelectorContainer>
                    <StrategySelectorCard
                        $isActive={activeStrategy === 'minimalist'}
                        onClick={() => handleSelectStrategy('minimalist')}
                    >
                        <h3>The Hyper-Efficient & Minimalist Interface</h3>
                        <p>A frictionless, task-oriented user journey focused on speed and clarity.</p>
                    </StrategySelectorCard>
                    <StrategySelectorCard
                        $isActive={activeStrategy === 'immersive'}
                        onClick={() => handleSelectStrategy('immersive')}
                    >
                        <h3>The Emotionally Intelligent & Immersive Experience</h3>
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
                                <p dangerouslySetInnerHTML={{ __html: content.trinity }} />
                            </div>
                            <div>
                                <h4>Examples in the Wild</h4>
                                {content.examples.map((ex) => (
                                    <ExampleCard key={ex.name}>
                                        <p>{ex.name}</p>
                                        <p>{ex.desc}</p>
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