import React, {useRef} from 'react';
import styled from 'styled-components';
import {motion, useScroll, useTransform} from 'framer-motion';
import {strategyData} from '../../data/strategyData';
import {Description, HeaderContainer, Title} from '../common/Header';
import Section from '../common/Section';

const StrategiesHeader = styled(HeaderContainer)`
    margin-bottom: 2rem;
`;

const PinContainer = styled.div`
    height: 180vh;
    width: 100%;
    position: relative;
`;

const StickyPanel = styled.div`
    position: sticky;
    top: 0;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AnimatedContentWrapper = styled(motion.div)`
    display: grid;
    width: 100%;
    max-width: 80rem;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 4rem 2rem;
    }
`;

const TextContainer = styled(motion.div)`
    max-width: 36rem;
    margin: 0 auto;
    display: grid;

    ${(props) => props.theme.blur && `
        background-color: ${props.theme.colors.secondaryBg};
        backdrop-filter: blur(12px);
        padding: 2.5rem;
        border-radius: 1rem;
        border: 1px solid ${props.theme.colors.cardBorder};
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
    `};

    @media (max-width: 768px) {
        min-height: 50vh;
    }
`;

const VisualContainer = styled(motion.div)`
    width: 100%;
    height: 450px;
    position: relative;

    @media (max-width: 768px) {
        order: -1;
        height: 300px;
    }
`;

const StrategyContent = styled(motion.div)`
    grid-area: 1 / 1;
`;

const StrategyTitle = styled.h3`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
`;

const StrategyDescription = styled.p`
    font-size: 1.125rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.colors.description};
`;

const ExampleCard = styled.div`
    background-color: ${(props) => props.theme.colors.secondaryBg}80;
    backdrop-filter: blur(10px);
    padding: 1rem 1.5rem;
    border-radius: 0.75rem;
    margin-top: 1rem;
    border: 1px solid ${(props) => props.theme.colors.cardBorder};
`;

const ExampleTitle = styled.p`
    font-weight: 600;
    margin-bottom: 0.25rem;
`;

const ExampleDesc = styled.p`
    font-size: 1rem;
    color: ${(props) => props.theme.colors.description};
`;

const VisualOne = styled(motion.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`;

const VisualTwo = styled(motion.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`;

const StrategiesSection: React.FC = () => {
    const minimalist = strategyData.minimalist;
    const immersive = strategyData.immersive;

    const targetRef = useRef<HTMLDivElement | null>(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ['start start', 'end end'],
    });

    const scale = useTransform(scrollYProgress, [0, 0.2], [0.85, 1]);
    const y = useTransform(scrollYProgress, [0, 0.2], ['-20vh', '0vh']);

    const opacityFirst = useTransform(scrollYProgress, [0.35, 0.6], [1, 0]);
    const opacitySecond = useTransform(scrollYProgress, [0.65, 0.9], [0, 1]);

    return (
        <Section id="strategies" paddingBottom={"0"}>
            <StrategiesHeader>
                <Title>Our Two Strategic Directions</Title>
                <Description>Based on our principles, we can pursue two distinct and powerful UI strategies. Scroll to
                    explore each approach.</Description>
            </StrategiesHeader>

            <PinContainer ref={targetRef}>
                <StickyPanel>
                    <AnimatedContentWrapper style={{scale, y}}>
                        <VisualContainer>
                            <VisualOne src={`${process.env.PUBLIC_URL}/revolut.png`} style={{opacity: opacityFirst}}/>
                            <VisualTwo src={`${process.env.PUBLIC_URL}/airbnb.png`} style={{opacity: opacitySecond}}/>
                        </VisualContainer>
                        <TextContainer>
                            <StrategyContent style={{opacity: opacityFirst}}>
                                <StrategyTitle>{minimalist.title}</StrategyTitle>
                                <StrategyDescription>{minimalist.why}</StrategyDescription>
                                <h3>Examples</h3>
                                {minimalist.examples.map(ex => (
                                    <ExampleCard key={ex.name}>
                                        <ExampleTitle>{ex.name}</ExampleTitle>
                                        <ExampleDesc>{ex.desc}</ExampleDesc>
                                    </ExampleCard>
                                ))}
                            </StrategyContent>
                            <StrategyContent style={{opacity: opacitySecond}}>
                                <StrategyTitle>{immersive.title}</StrategyTitle>
                                <StrategyDescription>{immersive.why}</StrategyDescription>
                                <h3>Examples</h3>
                                {immersive.examples.map(ex => (
                                    <ExampleCard key={ex.name}>
                                        <ExampleTitle>{ex.name}</ExampleTitle>
                                        <ExampleDesc>{ex.desc}</ExampleDesc>
                                    </ExampleCard>
                                ))}
                            </StrategyContent>
                        </TextContainer>
                    </AnimatedContentWrapper>
                </StickyPanel>
            </PinContainer>
        </Section>
    );
};

export default StrategiesSection;