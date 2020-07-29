import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './header'
import DashboardView from './dashboard-view'
import DashboardMain from './dashboard-main-view'
import DashboardProfile from './dashboard-profile-view'

const Home = () => {
  return (
    <div>
      <Route path="/dashboard/*">
        <Header />
      </Route>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Switch>
            <Route path="/dashboard/profile/:username">
              <DashboardProfile />
            </Route>
            <Route path="/dashboard/main">
              <DashboardMain />
            </Route>
            <Route path="/dashboard/">
              <DashboardView />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
