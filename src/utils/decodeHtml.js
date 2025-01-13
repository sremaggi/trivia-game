export const decodeHtmlEntities = (text) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");
    return doc.documentElement.textContent;
}

const question = "What is the make and model of the tour vehicles in &quot;Jurassic Park&quot; (1990)?";
console.log(decodeHtmlEntities(question));
// Output: What is the make and model of the tour vehicles in "Jurassic Park" (1990)?
