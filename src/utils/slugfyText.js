import slugify from "slugify";

export function slugfyText (text) {
    return slugify(normalized, {
        lower: true,
        strict: true,
        trim: true,
    })
}