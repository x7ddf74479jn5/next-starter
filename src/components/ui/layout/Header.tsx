import type { FC } from "react";

import { NavLink } from "@/components/ui/button";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];
export const Header: FC = () => {
  return (
    <header>
      <h1>Title</h1>
      <nav>
        {items.map(({ href, label }) => {
          return (
            <NavLink key={href} href={href} activeClassName="">
              <a style={{ display: "inline-block", padding: 12 }}>{label}</a>
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};
