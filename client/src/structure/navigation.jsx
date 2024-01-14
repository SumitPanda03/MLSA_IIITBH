import  Application  from "../pages/Application";
import  Chapter  from "../pages/Chapter";
import  Zero  from "../components/Zero";
import  Title  from "../components/Title";
import  Opening  from "../pages/Opening";
import  Upload  from "../pages/Upload";
import  Milestones  from "../pages/Milestones"
 
const nav = [
  {
    path: "/",
    name: "Zero",
    element: <Zero />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/home",
    name: "Title",
    element: <Title />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/application",
    name: "Application",
    element: <Application />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/chapter",
    name: "Chapter",
    element: <Chapter />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/milestones",
    name: "Milestones",
    element: <Milestones />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/opening",
    name: "Opening",
    element: <Opening />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: "/register",
    name: "Upload",
    element: <Upload />,
    isMenu: true,
    isPrivate: true,
  },
];

export default nav