// docs: https://www.11ty.io/docs/config/

module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats(["less", "html", "liquid"]);
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addWatchTarget("./src/less/");

  function sortByPageOrder(values) {
    return values.slice().sort((a, b) => a.data.order - b.data.order);
  }
  eleventyConfig.addFilter("sortByPageOrder", sortByPageOrder);

  return {
    dir: {
      includes: "_includes",
      layouts: "_layouts",
      input: "src",
      output: "dist"
    }
  };
};
