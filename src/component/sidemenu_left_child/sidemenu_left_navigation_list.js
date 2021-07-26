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
  const sidemenu_left_navigation_list_name = [
    "Home",
    "Explore",
    "Notification",
    "Message",
    "Bookmark",
    "lists",
    "Profile",
    "More",
  ];
  const sidemenu_left_navigation_list_icon = [
    <NavigationListIcon1 />,
    <NavigationListIcon2 />,
    <NavigationListIcon3 />,
    <NavigationListIcon4 />,
    <NavigationListIcon5 />,
    <NavigationListIcon6 />,
    <NavigationListIcon7 />,
    <NavigationListIcon8 />,
  ];
  // let test_array = [1, 2, 3, 4, 5, 6, 7];
  // let test = test_array.map((value)=>{
  //   return value * 2;
  // });
  // console.log(test);
  const sidemenu_name_icon = () => {
    // for (let i = 0; i < 9; i++) {
    //   <SidemenuLeftNavigationArray
    //     name={sidemenu_left_navigation_list_name[i]}
    //     icon={sidemenu_left_navigation_list_icon[i]}
    //   />;
    // }
    let list_name = sidemenu_left_navigation_list_name.map((value) => {
      return;
    });
  };
  console.log(sidemenu_name_icon());

  return (
    <ul className="sidemenu_left_navigation_list_wrap">
      {sidemenu_name_icon()}
    </ul>
  );
};

export default SidemenuLeftNavigationList;
