import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';
import './MainNav.css';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import BackDrop from './BackDrop';

const MainNavigation = props =>{
    const [drawerIsOpen,SetDrawerIsOpen]= useState(false);

    const openDrawerBot =() =>{
        SetDrawerIsOpen(true);
    }
    const closeDrawerBot = () =>{
        SetDrawerIsOpen(false);
    
    };

    return( <React.Fragment>
        {drawerIsOpen &&<BackDrop onClick={closeDrawerBot} />}

       
        
        <Layout>
            <button className= "main-navigation__menu-btn" onClick={openDrawerBot}>
                <span />
                <span />
                <span />
            </button> 

            <h1 className="main-navigation__title"><Link to="/">EasyShop</Link></h1>
            <nav className="main-navigation__header-nav">
                <NavLinks />
            </nav> 

        </Layout>

        <SideDrawer  show= {drawerIsOpen} >
            <nav className="main-navigation__drawer-nav">
                <NavLinks onClick={closeDrawerBot} />
            </nav>
        </SideDrawer>
        </React.Fragment>
    )
};
export default MainNavigation; 