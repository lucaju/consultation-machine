export const stripHTMLTags = (str?: string) => {
  const div = document.createElement('div');
  div.innerHTML = str ?? '';
  const text = div.textContent ?? '';
  return text;
};
