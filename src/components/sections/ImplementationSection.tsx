import React from 'react';
import styled from 'styled-components';
import Section from '../common/Section';
import { Card } from '../common/Card';

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

const Icon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const PathTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const PathDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
`;

const ImplementationSection: React.FC = () => {
    return (
        <Section id="implementation">
            <SectionHeader>
                <SectionTitle>The Path Forward: Three Roads</SectionTitle>
                <SectionDescription>How we can apply these concepts across our platforms.</SectionDescription>
            </SectionHeader>
            <Grid>
                <PathCard>
                    <Icon>⚙️</Icon>
                    <PathTitle>TX (Services Focus)</PathTitle>
                    <PathDescription>Leverage backend services and APIs. Avoid custom front-end work in TX, focusing on configuration and service integration (e.g., DAM).</PathDescription>
                </PathCard>
                <PathCard>
                    <Icon>🛠️</Icon>
                    <PathTitle>DX (Digital Experience)</PathTitle>
                    <PathDescription>Empower developers by improving tools with external assets, like pre-built React components.</PathDescription>
                </PathCard>
                <PathCard>
                    <Icon>📱</Icon>
                    <PathTitle>MX (Multi Experience)</PathTitle>
                    <PathDescription>Simplify design universally. Create a library of good, reusable, common flows for our apps (e.g., Profile, Onboarding).</PathDescription>
                </PathCard>
            </Grid>
        </Section>
    );
};

export default ImplementationSection;