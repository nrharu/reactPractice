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
      <div className="sidemenu_left_navigation_list_icon_wrap">
        <NavigationListIcon1 />
      </div>,
      <p className="sidemenu_left_navigation_list_name">Home</p>,
    ],
    [
      <div className="sidemenu_left_navigation_list_icon_wrap">
        <NavigationListIcon2 />
      </div>,
      <p className="sidemenu_left_navigation_list_name">Explora</p>,
    ],
    [
      <div className="sidemenu_left_navigation_list_icon_wrap">
        <NavigationListIcon3 />
      </div>,
      <p className="sidemenu_left_navigation_list_name">Notification</p>,
    ],
    [
      <div className="sidemenu_left_navigation_list_icon_wrap">
        <NavigationListIcon4 />
      </div>,
      <p className="sidemenu_left_navigation_list_name">Message</p>,
    ],
    [
      <div className="sidemenu_left_navigation_list_icon_wrap">
        <NavigationListIcon5 />
      </div>,
      <p className="sidemenu_left_navigation_list_name">Bookmark</p>,
    ],
    [
      <div className="sidemenu_left_navigation_list_icon_wrap">
        <NavigationListIcon6 />
      </div>,
      <p className="sidemenu_left_navigation_list_name">Lists</p>,
    ],
    [
      <div className="sidemenu_left_navigation_list_icon_wrap">
        <NavigationListIcon7 />
      </div>,
      <p className="sidemenu_left_navigation_list_name">Profile</p>,
    ],
    [
      <div className="sidemenu_left_navigation_list_icon_wrap">
        <NavigationListIcon8 />
      </div>,
      <p className="sidemenu_left_navigation_list_name">More</p>,
    ],
  ];
  const list_name = sidemenu_left_navigation_list.map((name) => {
    return <SidemenuLeftNavigationArray name={name} />;
  });
  return <ul className="sidemenu_left_navigation_list">{list_name}</ul>;
};

export default SidemenuLeftNavigationList;
