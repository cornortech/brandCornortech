const primaryEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";
const footerEmail = process.env.NEXT_PUBLIC_FOOTER_CONTACT_EMAIL ?? primaryEmail;
const phoneDisplay = process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY ?? "";
const phoneHref = process.env.NEXT_PUBLIC_CONTACT_PHONE_TEL ?? phoneDisplay.replace(/[^\d+]/g, "");
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? phoneHref.replace(/\D/g, "");

export const contactConfig = {
  companyName: process.env.NEXT_PUBLIC_COMPANY_NAME ?? "Cornor Tech Pvt. Ltd.",
  brandWebsiteUrl: process.env.NEXT_PUBLIC_BRAND_WEBSITE_URL ?? "https://www.cornortech.com",
  email: primaryEmail,
  footerEmail,
  phoneDisplay,
  phoneHref,
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
      "Hello Brand With Cornor Team, I would like to discuss our digital marketing needs!"
  )}`,
  address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS ?? "Tilottama, Butwal, Nepal",
  mapsUrl: process.env.NEXT_PUBLIC_MAPS_URL ?? "https://share.google/ipeEuiQ4lKklENKRz",
  mapsEmbedUrl:
    process.env.NEXT_PUBLIC_MAPS_EMBED_URL ??
    "https://www.google.com/maps?q=Cornor+Tech+Pvt.+Ltd.&output=embed",
};
