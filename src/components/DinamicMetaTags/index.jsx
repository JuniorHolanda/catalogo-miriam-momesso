import { Helmet } from "react-helmet"

const DinamicMetaTag = ({ title, description, imageUrl }) => {
    return (
        <Helmet>
            {/* Meta Tags Essenciais */}
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Open Graph (Facebook, LinkedIn, etc.) */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
        </Helmet>
    )
}

export default DinamicMetaTag
