type Link = {
  id: number;
  title: string;
  path: string;
};

const navLinks: Link[] = [
  {
    id: 1,
    title: "Overview",
    path: "/overview",
  },
  {
    id: 2,
    title: "Skills",
    path: "/skills",
  },
  {
    id: 3,
    title: "Projects",
    path: "/projects",
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
  },
];

export default navLinks;
