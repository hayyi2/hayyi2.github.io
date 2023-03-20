const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {

    eleventyConfig.addFilter('dump', obj => {
        return JSON.stringify(obj)
    });

    eleventyConfig.addGlobalData("isProd", function () {
        return process.env.ELEVENTY_RUN_MODE !== 'serve';
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

    eleventyConfig.addCollection('postCategories', collection => {
        let catSet = {};
        collection.getAll()
            .filter(item => item.data.tags.includes('post'))
            .filter(item => item.data.categories)
            .forEach(item => {
                item.data.categories.forEach(cat => {
                    if (!catSet[cat]) {
                        catSet[cat] = [];
                    }
                    catSet[cat].push(item)
                });
            });
        return catSet;
    });
    eleventyConfig.addCollection('portfolioCategories', collection => {
        let catSet = {};
        collection.getAll()
            .filter(item => item.data.tags.includes('portfolio'))
            .filter(item => item.data.categories)
            .forEach(item => {
                item.data.categories.forEach(cat => {
                    if (!catSet[cat]) {
                        catSet[cat] = [];
                    }
                    catSet[cat].push(item)
                });
            });
        return catSet;
    });

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