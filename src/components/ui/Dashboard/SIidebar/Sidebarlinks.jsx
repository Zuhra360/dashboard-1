import { AiFillAppstore } from "react-icons/ai";
import { FaFileInvoice } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { TbAlignBoxLeftMiddleFilled } from "react-icons/tb";
import { PiCalendarDotsFill } from "react-icons/pi";
import { RiMessageFill, RiNotification2Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";

export const Sidebardata = [
  {
    link: "home",
    name: "Home",
    icon: <AiFillAppstore />,
  },
  {
    link: "analytics",
    name: "Analytics",
    icon: <MdAnalytics />,
  },
  {
    link: "invoice",
    name: "Invoice",
    icon: <FaFileInvoice />,
  },
  {
    link: "Schedule",
    name: "Schedule",
    icon: <TbAlignBoxLeftMiddleFilled />,
  },
  {
    link: "calender",
    name: "Calender",
    icon: <PiCalendarDotsFill />,
  },
  {
    link: "messages",
    name: "Messages",
    icon: <RiMessageFill />,
  },
  {
    link: "notification",
    name: "Notification",
    icon: <RiNotification2Fill />,
  },
  {
    link: "settings",
    name: "Setting",
    icon: <IoMdSettings />,
  },
];
