// https://github.com/phun-ky/grunt-mustache
module.exports = {
	files : {
		src: "<%= files.templates %>",
		dest: "js/templates.js",
		options: {
			prefix: "YoastSEO = ( 'undefined' === typeof YoastSEO ) ? {} : YoastSEO; YoastSEO.templates = ",
			postfix: ";"
		}
	}
};
