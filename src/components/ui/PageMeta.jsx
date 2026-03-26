import { useEffect } from "react";
import { siteConfig } from "../../lib/site";

export function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = title
      ? `${title} - ${siteConfig.brand}`
      : `${siteConfig.brand} - ${siteConfig.name}`;

    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription && description) {
      metaDescription.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}
