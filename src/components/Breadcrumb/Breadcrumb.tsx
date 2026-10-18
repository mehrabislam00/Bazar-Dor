import Link from "next/link";

type Crumb = { label: string; href?: string };

const Breadcrumb = ({ crumbs }: { crumbs: Crumb[] }) => {
  return (
    <nav className="flex items-center gap-1.5 text-xs text-slate-400">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <span>›</span>}
          {crumb.href ? (
            <Link href={crumb.href} className="hover:text-slate-700 transition-colors">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-slate-600 font-medium">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;