import plans from "./plans/items"
import banner from "assets/i2.png";
import img1 from "assets/j8.jpg";
import img2 from "assets/j4.jpg";
import img3 from "assets/i7.jpg";
import img4 from "assets/i6.jpg";
import img5 from "assets/j3.jpg";
import img6 from "assets/i10.jpg";
import img7 from "assets/j6.jpg";
import img8 from "assets/i8.jpg";
import img9 from "assets/j9.jpg";

export default function sitemap() {
    const base_url = "https://chitwantour.com"
    const plans_sitemap = plans.map(p => ({
        url: `${base_url}/plans/${p.id}`,
        lastModified: new Date()
    }))

    return [
        {
            url: base_url,
            lastModified: new Date()

        },
        {
            url: `${base_url}/plans`,
            lastModified: new Date()

        },
        {
            url: `${base_url}/itinerary`,
            lastModified: new Date()
        },
        {
            url: `${base_url}/gallery`,
            lastModified: new Date(),
            images: [img1, img2, img3, img4, img5, img6, img7, img8, img9].map(i => base_url + "/" + i.src)
        },
        {
            url: `${base_url}/contact`,
            lastModified: new Date()

        },
        ...plans_sitemap
    ]
}