import styled from "@emotion/styled";

const FaqItem = styled.li`
  display: flex;
  align-items: start;
  gap: 8px;

  padding: 8px 8px 10px 8px;

  width: 216px;

  border-radius: 12px;

  @media (min-width: 768px) {
    gap: 24px;

    width: 592px;

    border-radius: 16px;

    padding: 18px 16px 23px 16px;

    &:not(:last-child) {
      margin-bottom: 18px;
    }
  }

  @media (min-width: 1280px) {
    gap: 31px;

    width: 1032px;

    border-radius: 24px;

    padding: 24px;

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  &.active {
    background-color: var(--secondary-accent-color);
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const Title = styled.h2`
  margin-bottom: 24px;

  color: var(--text-color);

  font-family: "Right Grotesk";
  font-size: 44px;
  font-weight: 900;
  line-height: 40px;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 40px;

    font-size: 80px;
    line-height: 80px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 80px;

    font-size: 160px;
    line-height: 160px;
  }
`;

const Number = styled.p`
  width: 26px;

  color: var(--accent-color);

  font-family: "Biro Script Plus";
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;

  @media (min-width: 768px) {
    width: 31px;

    font-size: 16px;
    line-height: 27px;
  }

  @media (min-width: 1280px) {
    width: 47px;

    font-size: 24px;
    line-height: 40px;
  }

  &.active {
    color: var(--text-color);
  }

  li:hover & {
    color: var(--text-color);
  }
`;

const Name = styled.h3`
  color: var(--text-color);

  font-family: "Right Grotesk";
  font-size: 20px;
  font-weight: 900;
  line-height: 20px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 32px;
  }

  @media (min-width: 1280px) {
    font-size: 64px;
    line-height: 64px;
  }

  &.active {
    margin-bottom: 10px;
    color: var(--accent-color);
  }

  li:hover & {
    color: var(--accent-color);
  }
`;

const Description = styled.p`
  margin-top: -130px;

  color: var(--text-color);

  font-family: "Messina Sans Mono";
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  text-transform: uppercase;

  opacity: 0;
  visibility: hidden;

  @media (min-width: 1280px) {
    font-size: 16px;
    line-height: 19px;
  }

  &.active {
    margin-top: 0;
    opacity: 1;
    visibility: visible;
    transition: margin-top 300ms linear, opacity 300ms linear 300ms;
  }
`;

const DeckriptionContainer = styled.div`
  height: auto;

  overflow: hidden;
`;

export { FaqItem, Title, Number, Name, Description, DeckriptionContainer };
