export const useAnimationOpenClose = () => {
  const animateEnter = (el) => {
    el.style.height = "auto";
    const height = getComputedStyle(el).height;

    el.style.height = "0";
    setTimeout(() => {
      el.style.height = height;
    });
  };

  const animateAfterEnter = (el) => {
    el.style.height = "auto";
  };

  const animateLeave = (el) => {
    el.style.height = getComputedStyle(el).height;
    setTimeout(() => {
      el.style.height = "0";
    });
  };

  return {
    animateEnter,
    animateAfterEnter,
    animateLeave,
  };
};
