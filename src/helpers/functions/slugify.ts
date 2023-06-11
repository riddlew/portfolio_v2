const slugify = (name: string) =>
	name
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, '')
		.replace(/[\s_]+/g, '-');

export default slugify;
