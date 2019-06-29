import React from 'react';
import {
  DropdownItem, DropdownMenu, DropdownToggle, Nav,
} from 'reactstrap';

import {
  AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler,
} from '@coreui/react';
import { TranslateService } from 'ter-localization';
import logo from '../../assets/img/brand/logo.svg';
import sygnet from '../../assets/img/brand/sygnet.svg';
import BaseComponent from '../BaseComponent';

class DefaultHeader extends BaseComponent {
  translationGroup = 'header';

  render() {
    const { t, translate } = this;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{
            src: logo, width: 89, height: 25, alt: 'CoreUI Logo',
          }}
          minimized={{
            src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo',
          }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        {/* <Nav className="d-md-down-none" navbar> */}
        {/*  <NavItem className="px-3"> */}
        {/*    <NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink> */}
        {/*  </NavItem> */}
        {/*  <NavItem className="px-3"> */}
        {/*    <Link to="/users" className="nav-link">Users</Link> */}
        {/*  </NavItem> */}
        {/*  <NavItem className="px-3"> */}
        {/*    <NavLink to="#" className="nav-link">Settings</NavLink> */}
        {/*  </NavItem> */}
        {/* </Nav> */}
        <Nav className="ml-auto" navbar>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav id="btn_header_language">
              <i className={`flag-icon flag-icon-${translate('general')('language_icon')}`} />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem
                onClick={() => {
                  TranslateService.setLanguage('vi');
                  localStorage.setItem('language', 'vi');
                }}
                id="btn_change_language_vi"
              >
                <i className="flag-icon flag-icon-vn" />
                {translate('language')('vn')}
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  TranslateService.setLanguage('en');
                  localStorage.setItem('language', 'en');
                }}
                id="btn_change_language_en"
              >
                <i className="flag-icon flag-icon-gb" />
                {translate('language')('en')}
              </DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>

          <AppHeaderDropdown direction="down">
            <DropdownToggle nav id="btn_header_user">
              <img src="../../assets/img/avatars/6.jpg" className="img-avatar" alt="User" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem onClick={e => this.props.onLogout(e)} id="btn_logout">
                <i className="fa fa-lock" />
                {' '}
                {t('logout')}
              </DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
      </React.Fragment>
    );
  }
}


export default DefaultHeader;
