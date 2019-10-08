import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { SkipNavContent } from '@reach/skip-nav';

import { NavigationContext, NavigationActionTypes } from '../Navigation/NavigationContext';
import { Header, HeaderInner } from '../Header';
import { NavButton } from '../Navigation';
import { Edge, HeaderMenuItem } from 'interfaces/nodes';
import { FooterWrapper, Footer } from 'components/layout/Footer'


import { breakpoints, dimensions, colors, textSizes, space } from 'utils/variables';
import { isActive } from 'utils/helpers';
import { determineFontDimensions, Heading } from 'components/foundations';
import Button from 'components/foundations/Button'
import { Llama_Icon } from 'components/foundations/icons'


interface LayoutMainInnerProps {
  className?: string;
  isNavigationOpen?: boolean;
}

interface LayoutMainProps extends LayoutMainInnerProps {
  title: string;
  headerMenus?: Edge<HeaderMenuItem>[];
}

interface FontSizeProps {
  size: ReturnType<typeof determineFontDimensions>;
}

const StyledLayoutMain = styled('div')<LayoutMainInnerProps>`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  position: relative;
  transition: margin-left 0.3s ease;
`;

const LogoWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 0 24px;
`;

const DocumentationMenu = styled('nav')`
  display: flex;
  flex-direction: row;
  padding: 0 ${space.xs}px;
  a {
    padding: 8px 0;
    color: ${colors.grey07};
    font-size: ${textSizes[300].fontSize}px;
    line-height: ${textSizes[300].lineHeight}px;
    font-weight: 600;

    &:hover,
    &:focus,
    &.active {
      color: ${colors.blue07};
      text-decoration: none;
      outline: none;
    }

    &:not(:first-child) {
      margin-left: ${space.xSmallDesktop}px;
    }
  }
`;

const StyledMainContent = styled('section')`
  flex-grow: 1;
`

const HomepageLink = styled(Link)<FontSizeProps>`
  color: ${colors.grey09};
  font-size: ${props => props.size.fontSize};
  line-height: ${props => props.size.lineHeight};
  font-weight: ${props => props.size.fontWeight};
  display: flex;
  padding-top: 10px;
  /* height: 15px; */

  &:hover,
  &:focus {
    color: ${colors.grey09};
    text-decoration: none;
  }
  svg {
    height: 35px;
  }
  @media(min-width:${breakpoints.lg}px) {
    height: 50px;
  }
`;

const LayoutMain: React.SFC<LayoutMainProps> = ({ children, title, className, headerMenus }) => {
  const { state, dispatch } = React.useContext(NavigationContext);

  return (
    <StyledLayoutMain className={className} isNavigationOpen={state.isOpen}>
      <Header >
        <HeaderInner hideOnDesktop>
          <NavButton
            icon="circle"
            fill={colors.grey05}
            onClick={() => dispatch({ type: NavigationActionTypes.TOGGLE_DRAWER })}
          >
            Toggle Drawer
          </NavButton>
          <LogoWrapper>
            <HomepageLink
              to="/"
              size={determineFontDimensions('heading', 400)}
              onClick={() => dispatch({ type: NavigationActionTypes.CLOSE_DRAWER })}
            >
               <Llama_Icon color={`${colors.burntOrange}`}/>
            </HomepageLink>
          </LogoWrapper>
        </HeaderInner>
        <HeaderInner hideOnMobile contents="center">
          <DocumentationMenu>
            {headerMenus &&
              headerMenus.map(({ node }) => {
                if (node.external) {
                  return (
                    <a key={node.id} href={node.href} target="_blank" rel="noopener noreferrer">
                      <Heading as="h1" size={100}>{node.label}</Heading>
                    </a>
                  );
                }
                return (
                  <Button
                    key={node.id}
                    to={node.href}
                    bgColor={`${colors.white}`}
                    textColor={`${colors.hunterOrange}`}
                    height="40">
                    {node.label}
                  </Button>
                );
              })}
          </DocumentationMenu>
          <Button to="/docs/getting-started/introduction" height={'40'} bgColor={`${colors.hunterOrange}`} textColor={`${colors.seafoam}`}>
            Get Started
          </Button>
        </HeaderInner>
      </Header>
      <StyledMainContent>
        <SkipNavContent>{children}</SkipNavContent>
      </StyledMainContent>
      <FooterWrapper>
        <Footer headerMenus={headerMenus} />
      </FooterWrapper>
    </StyledLayoutMain>
  );
};

export default LayoutMain;
