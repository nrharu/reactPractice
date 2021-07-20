import React from "react";
import NavigationListIcon1 from "./sidemenu_left_grand_child/navigation_list_icon_home";
import NavigationListIcon2 from "./sidemenu_left_grand_child/navigation_list_icon_hash";
import NavigationListIcon3 from "./sidemenu_left_grand_child/navigation_list_icon_bell";
import NavigationListIcon4 from "./sidemenu_left_grand_child/navigation_list_icon_mail";
import NavigationListIcon5 from "./sidemenu_left_grand_child/navigation_list_icon_bookmark";
import NavigationListIcon6 from "./sidemenu_left_grand_child/navigation_list_icon_paper";
import NavigationListIcon7 from "./sidemenu_left_grand_child/navigation_list_icon_human";
import NavigationListIcon8 from "./sidemenu_left_grand_child/navigation_list_icon_ditails_button";

const SidemenuLeftNavigationList = () => {
  // サイドメニューのmap関数実装

  // const sidemenu_left_navigation_list_names = [
  //   "ホーム",
  //   "話題を検索",
  //   "通知",
  //   "メッセージ",
  //   "ブックマークリスト",
  //   "プロフィール",
  //   "もっと見る",
  // ];
  // const sidemenu_left_navigation_list_icons = [
  //   <NavigationListIcon1 />,
  //   <NavigationListIcon2 />,
  //   <NavigationListIcon3 />,
  //   <NavigationListIcon4 />,
  //   <NavigationListIcon5 />,
  //   <NavigationListIcon6 />,
  //   <NavigationListIcon7 />,
  //   <NavigationListIcon8 />,
  // ];
  // const sidemenu_left_navigation_list_icon = () => {
  //   for (let i = 0; i < sidemenu_left_navigation_list_icons.length; i++) {
  //     return sidemenu_left_navigation_list_icons[i];
  //   }
  // };
  // const sidemenu_left_navigation_list_name = () => {
  //   for (let i = 0; i < sidemenu_left_navigation_list_names.length; i++) {
  //     return sidemenu_left_navigation_list_names[i];
  //   }
  // };

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
  const sidemenu_left_navigation = () => {
    for (let i = 0; i < sidemenu_left_navigation_list.length; i++) {
      return sidemenu_left_navigation_list[i];
    }
  };

  // const result = sidemenu_left_navigation_list.map(() => {

  // });
  // console.log(sidemenu_left_navigation());
  return (
    <li>
      <a href="#top" className="sidemenu_left_navigation_list">
        <div>{sidemenu_left_navigation()[1]}</div>
        <p className="sidemenu_left_navigation_list_name">
          {sidemenu_left_navigation()[0]}
        </p>
        {/* <div>{sidemenu_left_navigation_icon()}</div>
        <p>{sidemenu_left_navigation_name()}</p> */}
      </a>
    </li>
  );
};

export default SidemenuLeftNavigationList;
