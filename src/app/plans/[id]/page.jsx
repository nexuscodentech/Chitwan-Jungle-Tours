import "../plans.css";
import items from "../items";
import ClientPage from "./ClientPage";

export function generateMetadata({ params }) {
  const {id}=params;
  const item = items.find((item) => item.id == id);
  if (!item) {
    return {
      title: "Not Found",
      description: "The plan you are looking for doesn't exit"
    };
  }
  return {
    metadataBase: new URL('https://chitwan-jungle-tours.com'),
    title: item.title + " - Chitwan Jungle Tours",
    description: item.description,
    images: [item.src],
    keywords: item.keywords,
    openGraph: {
      title: item.title,
      description: item.description,
      images: [{url: item.src.src, height:item.src.height, width:item.src.width}]
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
