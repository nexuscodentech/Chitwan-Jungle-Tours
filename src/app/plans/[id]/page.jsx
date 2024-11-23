import "../plans.css";
import items from "../items";
import ClientPage from "./ClientPage";

export function generateMetadata({ params: { id } }) {
  const item = items.find((item) => item.id == id);
  if (!item) {
    return {
      title: "Not Found",
      description: "The plan you are looking for doesn't exit"
    };
  }
  return {
    metadataBase: new URL('https://chitwan-jungle-tour.com'),
    title: item.title + " - Chitwan Jungle Tours",
    description: item.description,
    images: [item.src],
    keywords: item.keywords,
    openGraph: {
      title: item.title,
      description: item.description,
      images: [item.src.src] // btw, src.src isn't typo do not remove it..
    },
  }
}

export default function Page({ params: { id } }) {
  const item = items.find((item) => item.id == id);

  if (!item) {
    return <p>Item not found</p>;
  }
  return <ClientPage item={item} />
}

export function generateStaticParams() {
  return items.map(p => ({
    id: p.id.toString(),
  }))
}
