import React from 'react'
import { Link } from 'react-router-dom'

const DashboardView = () => {
  return (
    <div>
      <div id="title">Dashboard</div>
      <div>
        <Link to="/dashboard/profile/3f05ffed-e648-4545-bb6c-a70118fca01a">Go To Profile</Link>
      </div>
      <div>
        <Link to="/dashboard/main">Go To Main</Link>
      </div>
    </div>
  )
}

DashboardView.propTypes = {}

export default DashboardView
