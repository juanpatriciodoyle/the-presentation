import React from 'react';
import styled from 'styled-components';
import {Cog, ComponentIcon, FullscreenIcon} from 'lucide-react';
import Section from '../common/Section';
import {Card} from '../common/Card';
import {Description, HeaderContainer, Title} from '../common/Header';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const PathCard = styled(Card)`
    text-align: center;
`;

const IconWrapper = styled.div`
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.accent};
`;

const PathTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
`;

const PathDescription = styled.p`
    color: ${(props) => props.theme.colors.description};
    line-height: 1.6;
`;

const ImplementationSection: React.FC = () => {
    return (
        <Section id="implementation" paddingTop={"0"}>
            <HeaderContainer>
                <Title>The Path Forward</Title>
                <Description>How we can apply these concepts across our platforms.</Description>
            </HeaderContainer>
            <Grid>
                <PathCard>
                    <IconWrapper><Cog size={40} strokeWidth={1.5}/></IconWrapper>
                    <PathTitle>TX (Services Focus)</PathTitle>
                    <PathDescription>Leverage backend services and APIs. Avoid custom front-end work in TX, focusing on
                        configuration and service integration (e.g., DAM).</PathDescription>
                </PathCard>
                <PathCard>
                    <IconWrapper><FullscreenIcon size={40} strokeWidth={1.5}/></IconWrapper>
                    <PathTitle>DX (Components)</PathTitle>
                    <PathDescription>Empower developers by improving tools with external assets, like pre-built React
                        components.</PathDescription>
                </PathCard>
                <PathCard>
                    <IconWrapper><ComponentIcon size={40} strokeWidth={1.5}/></IconWrapper>
                    <PathTitle>MX (Components)</PathTitle>
                    <PathDescription>Simplify design universally. Create a library of good, reusable, common flows for
                        our apps (e.g., Profile, Onboarding).</PathDescription>
                </PathCard>
            </Grid>
        </Section>
    );
};

export default ImplementationSection;