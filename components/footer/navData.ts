export type NavData = {
  title: string;
  items: {
    id: number;
    name: string;
    href?: string;
  }[];
};

export const MenuData: NavData = {
  title: "Menu",
  items: [
    { id: 1, name: "home" },
    { id: 2, name: "about" },
    { id: 3, name: "services" },
    { id: 4, name: "testimonial" },
    { id: 5, name: "blog" },
    { id: 6, name: "contact" },
  ],
};

export const AccountData: NavData = {
  title: "Account",
  items: [
    { id: 1, name: "account", href: "#" },
    { id: 2, name: "checkout", href: "#" },
    { id: 3, name: "login", href: "#" },
    { id: 4, name: "register", href: "#" },
    { id: 5, name: "shopping", href: "#" },
    { id: 6, name: "widget", href: "#" },
  ],
};
