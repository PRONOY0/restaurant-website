import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';
import { Card3DCarousel } from '../../components/3d-card-carousel/3d-card-carousel';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Menu</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Refreshing Beverage</p>
        <div className="app__specialMenu_menu_items">
          {data.aireMenuData.refreshingBeverage.shakes.map((item, index) => (
            <MenuItem
              key={index}
              title={item.name}
              price={item.price}
              tags={item.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Grilled And Baked</p>
        <div className="app__specialMenu_menu_items">
          {data.aireMenuData.grilledAndBaked.pizzas.map((item, index) => (
            <MenuItem
              key={index}
              title={item.name}
              price={item.price}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <Card3DCarousel />
    </div>
  </div>
);

export default SpecialMenu;
