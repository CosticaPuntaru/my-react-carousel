import React from "react";
export interface RenderProps {
  slides: React.ReactElement;
  next: () => void;
  previous: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
  totalSteps: number;
  currentStep: number;
  goToStep: (index: number) => void;
  slidesToShow: number;
  infinite: boolean;
  transitionDuration: number;
}
export interface VerticalCarouselProps {
  children: React.ReactElement;
  slidesToShow?: number;
  infinite?: boolean;
  transitionDuration?: number;
  render?: (props: RenderProps) => React.ReactElement;
  onCurrentSlideChanged?: (currentSlide: number) => void;
}
declare const _default: React.ForwardRefExoticComponent<VerticalCarouselProps & {
  children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export default _default;
