export const useText = () => {
  const copy = (text) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    return true;
  };

  return {
    copy,
  };
};
