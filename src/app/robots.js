export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://chitwan-jungle-tour.com/sitemap.xml',
    }
}