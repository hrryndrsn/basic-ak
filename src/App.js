
import React, { Fragment } from 'react';
import GlobalNavigation from '@atlaskit/global-navigation';
import ShortcutIcon from '@atlaskit/icon/glyph/shortcut';
import { AtlassianWordmark, JiraServiceDeskIcon} from '@atlaskit/logo';
import {
  ContainerHeader,
  GroupHeading,
  HeaderSection,
  Item,
  ItemAvatar,
  LayoutManager,
  MenuSection,
  NavigationProvider,
  Separator,
  Wordmark,
} from '@atlaskit/navigation-next';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import ReportsPage from './pages/ReportsPage';

const MyGlobalNavigation = () => (
  <GlobalNavigation
    productIcon={() => <JiraServiceDeskIcon size="medium" />}
    onProductClick={() => {}}
  />
);

const MyProductNavigation = () => (
  <Fragment>
    <HeaderSection>
      {({ className }) => (
        <div className={className}>
          <Wordmark wordmark={AtlassianWordmark} />
        </div>
      )}
    </HeaderSection>
    <MenuSection>
      {({ className }) => (
        <div className={className}>
          <Item text="Dashboard" />
          <Item text="Things" />
          <Item text="Settings" />
          <Separator />
          <GroupHeading>Add-ons</GroupHeading>
          <Item text="My plugin" />
        </div>
      )}
    </MenuSection>
  </Fragment>
);

const MyContainerNavigation = () => (
  <Fragment>
    <HeaderSection>
      {({ css }) => (
        <div style={{ ...css, paddingBottom: 20 }}>
          <ContainerHeader
            before={itemState => (
              <ItemAvatar
                itemState={itemState}
                appearance="square"
                size="large"
              />
            )}
            text="Sample container"
            subText="Container description"
          />
        </div>
      )}
    </HeaderSection>
    <MenuSection>
      {({ className }) => (
        <div className={className}>
          <Link to="/" >
            <Item text="Home" />  
          </Link>
          <Link to="/reports" >
            <Item text="Reports" />
          </Link>
          <Link to="settings">
            <Item text="Project settings" 
            // isSelected 
            />
          </Link>
          <Separator />
          <GroupHeading>Shortcuts</GroupHeading>
          <Item before={ShortcutIcon} text="Team space" />
        </div>
      )}
    </MenuSection>
  </Fragment>
);

export default () => (
  <Router>
    <NavigationProvider>
      <LayoutManager
        globalNavigation={MyGlobalNavigation}
        productNavigation={MyProductNavigation}
        containerNavigation={MyContainerNavigation}
      >
        <div >
        {/* content goes here */}
          <Route path='/' exact component={(props) => <HomePage props/>}/>
          <Route path='/reports' component={(props) => <ReportsPage {...props}/>}/>
          <Route path='/settings' component={() => <SettingsPage/>}/>
        </div>
      </LayoutManager>
    </NavigationProvider>
  </Router>
);