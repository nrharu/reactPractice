

const SidemenuLeftNavigationArray = (props) => {

  };
  return (
    <li>
      <a href="#top" className="sidemenu_left_navigation_list">
        <div>
          {props.icon}
        </div>
        <p className="sidemenu_left_navigation_list_name">
          {props.name}
        </p>
        {/* <div>{sidemenu_left_navigation_icon()}</div>
        <p>{sidemenu_left_navigation_name()}</p> */}
      </a>
    </li>
  );
};

export default SidemenuLeftNavigationArray;
