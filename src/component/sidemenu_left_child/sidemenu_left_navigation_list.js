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
    ["Home", <NavigationListIcon1 />],
    ["Explore", <NavigationListIcon2 />],
    ["Notifications", <NavigationListIcon3 />],
    ["Message", <NavigationListIcon4 />],
    ["bookmarks", <NavigationListIcon5 />],
    ["lists", <NavigationListIcon6 />],
    ["Profile", <NavigationListIcon7 />],
    ["More", <NavigationListIcon8 />],
  ];

  return (
    <ul className="sidemenu_left_navigation_list_wrap">
      <SidemenuLeftNavigationArray />
    </ul>
  );
};

export default SidemenuLeftNavigationList;
