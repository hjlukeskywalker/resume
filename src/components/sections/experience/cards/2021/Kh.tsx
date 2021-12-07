import React from 'react';
import styled from 'styled-components';

import { FadeInContent } from '#/components/common/gsap';
import { FADE_IN_DELAY } from '#/constants';

import CardContainer from '#/components/sections/experience/cards/CardContainer';
import CardHeader from '#/components/sections/experience/cards/CardHeader';
import CardBody from '#/components/sections/experience/cards/CardBody';
import CardBodyText from '#/components/sections/experience/cards/CardBodyText';
import CardBodyTextContainer from '#/components/sections/experience/cards/CardBodyTextContainer';
import Hyperlink from '#/components/sections/experience/cards/Hyperlink';
import HyperlinkContainer from '#/components/sections/experience/cards/HyperlinkContainer';
import SkillList from '#/components/sections/experience/cards/SkillList';
import SkillItem from '#/components/sections/experience/cards/SkillItem';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #e73147;
`;

const data = {
  title: 'KH 정보교육원',
  date: '2021년 1월 - 2021년 8월',
  bodyTexts: [
    '응용 SW 엔지니어 양성과정 공통교과 및 내용',
    '세미 프로젝트 - 뫼비우스 (가구 사이트)',
    '파이널 프로젝트 - K-LIBRARY (도서관 사이트) ',
  ],
  hyperlinks: [
    {
      href: 'https://github.com/hjlukeskywalker/SEMI',
      text: '세미 프로젝트 링크',
    },
    {
      href: 'https://github.com/yama2270/KH_FinalProject',
      text: '파이널 프로젝트 링크',
    },
    {
      href: 'https://political-sodium-64d.notion.site/f6deac14c3f54f849d19b2003809d207?v=038d56e0e18542f5bdb92dd888675328',
      text: '수업 내용 정리',
    },
  ],
  skills: ['Java', 'Spring', 'Oracle', 'HTML,CSS', 'JavaScript'],
};

const Component = () => {
  return (
    <FadeInContent delay={FADE_IN_DELAY}>
      <Container>
        <CardContainer>
          <CardHeader title={data.title} date={data.date} />
          <CardBody>
            <CardBodyTextContainer>
              {data.bodyTexts.map(bodyText => {
                return <CardBodyText text={bodyText} key={bodyText} />;
              })}
            </CardBodyTextContainer>
            <HyperlinkContainer>
              {data.hyperlinks.map(hyperlink => {
                return (
                  <Hyperlink
                    key={hyperlink.text}
                    href={hyperlink.href}
                    text={hyperlink.text}
                  />
                );
              })}
            </HyperlinkContainer>
          </CardBody>
          <SkillList>
            {data.skills.map(skill => {
              return <SkillItem key={skill} skill={skill} />;
            })}
          </SkillList>
        </CardContainer>
      </Container>
    </FadeInContent>
  );
};

export default Component;
