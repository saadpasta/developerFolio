function extractTextContentFromHtml(html) {
  // Medium API returns blogs' content in HTML format. Below function extracts blogs' text content within paragraph tags
  return typeof html === "string"
    ? html
        .split("p>")
        .filter(el => !el.includes(">"))
        .map(el => el.replace("</", ".").replace("<", ""))
        .join(" ")
    : NaN;
}

export {extractTextContentFromHtml};
