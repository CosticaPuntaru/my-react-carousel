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
  centerCurrentSlide: boolean;
}
export interface CarouselProps {
  slidesToShow?: number;
  infinite?: boolean;
  transitionDuration?: number;
  centerCurrentSlide?: boolean;
  render?: (props: RenderProps) => React.ReactElement;
  onCurrentSlideChanged?: (currentSlide: number) => void;
}
export declare type RefInstance = Pick<
  RenderProps,
  "next" | "previous" | "goToStep"
>;
declare const _default: React.ForwardRefExoticComponent<CarouselProps & {
  children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export default _default;
