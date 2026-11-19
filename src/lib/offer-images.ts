const offerImages: Record<string, string> = {
  "Kroasani i peciva mix": "/offers/kroasani-i-peciva-mix.png",
  "Dnevni paket kruha": "/offers/dnevni-paket-kruha.png",
  "Paket iznenađenja – slastice": "/offers/paket-iznenadenja-slastice.png",
  "Jabuke i agrumi 3 kg": "/offers/jabuke-i-agrumi-3-kg.png",
  "Sezonsko povrće za juhu": "/offers/sezonsko-povrce-za-juhu.png",
  "Kruh i peciva za donaciju": "/offers/kruh-i-peciva-za-donaciju.png",
};

const categoryImages: Record<string, string> = {
  "pekarski-proizvodi": "/offers/dnevni-paket-kruha.png",
  slastice: "/offers/paket-iznenadenja-slastice.png",
  "voce-i-povrce": "/offers/jabuke-i-agrumi-3-kg.png",
  "mlijecni-proizvodi": "/offers/kroasani-i-peciva-mix.png",
};

const fallbackImage = "/branding/spasizalogaj-logo-alt.png";

export function getOfferImage(title: string, categorySlug?: string | null): string {
  if (offerImages[title]) return offerImages[title];
  if (categorySlug && categoryImages[categorySlug]) return categoryImages[categorySlug];
  return fallbackImage;
}
