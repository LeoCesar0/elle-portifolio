export const selectT = (lang, obj) => {
  const text = obj[lang] || "";

  return text;
};
