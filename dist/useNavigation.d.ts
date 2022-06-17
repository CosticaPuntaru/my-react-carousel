import React from "react";
interface Options {
  infinite: boolean;
  slidesToShow: number;
  slideCount: number;
}
declare function useNavigation({
  infinite,
  slidesToShow,
  slideCount
}: Options): {
  previous: () => void;
  next: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
  currentIndex: number;
  currentStep: number;
  totalSteps: number;
  goToStep: React.Dispatch<React.SetStateAction<number>>;
};
export default useNavigation;
