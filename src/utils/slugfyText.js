import slugify from 'slugify';

export function slugfyText(text) {
	return slugify(text, {
		lower: true,
		strict: true,
		trim: true,
	});
}
