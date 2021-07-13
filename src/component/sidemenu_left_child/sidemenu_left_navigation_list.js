import React from "react";
import NavigationListIcon1 from "./sidemenu_left_grand_child/navigation_list_icon_home";
import NavigationListIcon2 from "./sidemenu_left_grand_child/navigation_list_icon_hash";
import NavigationListIcon3 from "./sidemenu_left_grand_child/navigation_list_icon_bell";
import NavigationListIcon4 from "./sidemenu_left_grand_child/navigation_list_icon_mail";
import NavigationListIcon5 from "./sidemenu_left_grand_child/navigation_list_icon_bookmark";
import NavigationListIcon6 from "./sidemenu_left_grand_child/navigaiton_list_icon_paper";
import NavigationListIcon7 from "./sidemenu_left_grand_child/navigation_list_icon_human";
import NavigationListIcon8 from "./sidemenu_left_grand_child/navigation_list_icon_ditails_button";

const SidemenuLeftNavigationList = () => {
  const sidemenu_left_navigaiton_list_names = [
    "ホーム",
    "話題を検索",
    "通知",
    "メッセージ",
    "ブックマークリスト",
    "プロフィール",
    "もっと見る",
  ];
  const sidemenu_left_navigaiton_list_name = () => {
    for (let i = 0; i < sidemenu_left_navigaiton_list_names.length; i++) {
      return sidemenu_left_navigaiton_list_names[i];
    }
    const sidemenu_left_navigation_list_icons = [
      <NavigaitonListIcon1 />,
      <NavigationListIcon2 />,
      <NavigationListIcon3 />,
      <NavigationListIcon4 />,
      <NavigationListIcon5 />,
      <NavigationListIcon6 />,
      <NavigationListIcon7 />,
      <NavigationListIcon8 />,
    ];
    {
      /* const sidemenu_left_navigaiton_list_icon = () => {
    for
  } */
    }
  };

  return (
    <li>
      <a href="#top">
        <div>{/* アイコン */}</div>
        <p>{sidemenu_left_navigaiton_list_name()}</p>
      </a>
    </li>
  );
};

export default SidemenuLeftNavigationList;
