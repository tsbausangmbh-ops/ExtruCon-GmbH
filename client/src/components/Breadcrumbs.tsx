import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const { t } = useLanguage();

  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-3">
      <ol className="flex items-center flex-wrap gap-1 text-sm text-gray-400" itemScope itemType="https://schema.org/BreadcrumbList">
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <a 
            href="/" 
            className="flex items-center gap-1 hover:text-primary transition-colors"
            itemProp="item"
          >
            <Home className="w-4 h-4" />
            <span itemProp="name">Home</span>
          </a>
          <meta itemProp="position" content="1" />
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <ChevronRight className="w-4 h-4 text-gray-600" />
            {item.href ? (
              <a 
                href={item.href} 
                className="hover:text-primary transition-colors"
                itemProp="item"
              >
                <span itemProp="name">{item.label}</span>
              </a>
            ) : (
              <>
                <span className="text-white font-medium" itemProp="name">{item.label}</span>
                <meta itemProp="item" content={typeof window !== 'undefined' ? window.location.href : ''} />
              </>
            )}
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
