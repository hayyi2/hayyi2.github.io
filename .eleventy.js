const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {

    eleventyConfig.addFilter('dump', obj => {
        return JSON.stringify(obj)
    });

    eleventyConfig.addFilter('dateFormat', data => {
        var tahun = data.getFullYear();
        var bulan = data.getMonth();
        var tanggal = data.getDate();
        var hari = data.getDay();
        const labelBulan = [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
        ]
        const labelHari = [
            "Minggu",
            "Senin",
            "Selasa",
            "Rabu",
            "Kamis",
            "Jum'at",
            "Sabtu",
        ]
        return `${labelHari[hari]}, ${tanggal} ${labelBulan[bulan]} ${tahun}`
    });

    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("uploads");

    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(syntaxHighlight);

    return {
        dir: {
            input: "./",
            includes: "./src/includes",
            layouts: "./src/layouts",
            data: "./data",
            output: "./dist",
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        templateFormats: ["md", "njk"],
        passthroughFileCopy: false,
    }
};