const SidemenuLeftNavigationArray = (props) => {
  return (
    <div className="_item">
      {/* <a href="#top" className="sidemenu_left_navigation_list"> */}
      <div>{props.icon}</div>
      <p className="sidemenu_left_navigation_list_name_icon">{props.name}</p>
      {/* </a> */}
    </div>
  );
};

export default SidemenuLeftNavigationArray;
