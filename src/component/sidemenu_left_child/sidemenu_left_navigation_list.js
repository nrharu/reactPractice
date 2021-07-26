import React from "react";
import SidemenuLeftNavigationArray from "./sidemenu_left_grand_child/sidemenu_left_navigation_array";
import NavigationListIcon1 from "./sidemenu_left_grand_child/navigation_list_icon_home";
import NavigationListIcon2 from "./sidemenu_left_grand_child/navigation_list_icon_hash";
import NavigationListIcon3 from "./sidemenu_left_grand_child/navigation_list_icon_bell";
import NavigationListIcon4 from "./sidemenu_left_grand_child/navigation_list_icon_mail";
import NavigationListIcon5 from "./sidemenu_left_grand_child/navigation_list_icon_bookmark";
import NavigationListIcon6 from "./sidemenu_left_grand_child/navigation_list_icon_paper";
import NavigationListIcon7 from "./sidemenu_left_grand_child/navigation_list_icon_human";
import NavigationListIcon8 from "./sidemenu_left_grand_child/navigation_list_icon_ditails_button";

const SidemenuLeftNavigationList = () => {
  const sidemenu_left_navigation_list = [
    [<NavigationListIcon1 />, "Home"],
    [<NavigationListIcon2 />, "Explora"],
    [<NavigationListIcon3 />, "Notification"],
    [<NavigationListIcon4 />, "Message"],
    [<NavigationListIcon5 />, "Bookmark"],
    [<NavigationListIcon6 />, "Lists"],
    [<NavigationListIcon7 />, "Profile"],
    [<NavigationListIcon8 />, "More"],
  ];
  const list_name = sidemenu_left_navigation_list.map((name) => {
    return <SidemenuLeftNavigationArray name={name} />;
  });

  const sidemenu_left_navigation_list_name = [
    "Home",
    "Explora",
    "Notification",
    "Message",
    "Bookmark",
    "Lists",
    "Profile",
    "More",
  ];
  const sidemenu_left_navigation_list_icon = [
    <NavigationListIcon1 />,
    <NavigationListIcon2 />,
    <NavigationListIcon4 />,
    <NavigationListIcon5 />,
    <NavigationListIcon6 />,
    <NavigationListIcon7 />,
    <NavigationListIcon8 />,
  ];

  return <li className="sidemenu_left_navigation_list">{list_name}</li>;
};

export default SidemenuLeftNavigationList;
