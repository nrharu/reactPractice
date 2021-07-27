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
    [
      <div>
        <NavigationListIcon1 />
      </div>,
      <p className="sidemenu_left_navigation_list_name_icon">Home</p>,
    ],
    [
      <div>
        <NavigationListIcon2 />
      </div>,
      <p className="sidemenu_left_navigation_list_name_icon">Explora</p>,
    ],
    [
      <div>
        <NavigationListIcon3 />
      </div>,
      <p className="sidemenu_left_navigation_list_name_icon">Notification</p>,
    ],
    [
      <div>
        <NavigationListIcon4 />
      </div>,
      <p className="sidemenu_left_navigation_list_name_icon">Message</p>,
    ],
    [
      <div>
        <NavigationListIcon5 />
      </div>,
      <p className="sidemenu_left_navigation_list_name_icon">Bookmark</p>,
    ],
    [
      <div>
        <NavigationListIcon6 />
      </div>,
      <p className="sidemenu_left_navigation_list_name_icon">Lists</p>,
    ],
    [
      <div>
        <NavigationListIcon7 />
      </div>,
      <p className="sidemenu_left_navigation_list_name_icon">Profile</p>,
    ],
    [
      <div>
        <NavigationListIcon8 />
      </div>,
      <p className="sidemenu_left_navigation_list_name_icon">More</p>,
    ],
  ];
  const list_name = sidemenu_left_navigation_list.map((name) => {
    return <SidemenuLeftNavigationArray name={name} />;
  });
  return <li className="sidemenu_left_navigation_list">{list_name}</li>;
};

export default SidemenuLeftNavigationList;
