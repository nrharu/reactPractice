const SidemenuLeftNavigationArray = (props) => {
  return (
    <li>
      <a href="#top" className="sidemenu_left_navigation_list">
        <div>{props.icon}</div>
        <p className="sidemenu_left_navigation_list_name">{props.name}</p>
      </a>
    </li>
  );
};

export default SidemenuLeftNavigationArray;
