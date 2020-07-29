import React from 'react'
import { Link } from 'react-router-dom'

const DashboardMain = () => {
  return (
    <div>
      <div id="title">Main</div>
      <div>
        <Link to="/dashboard/profile/3f05ffed-e648-4545-bb6c-a70118fca01a">Go To Profile</Link>
      </div>
      <div>
        <Link to="/dashboard">Go To Root</Link>
      </div>
    </div>
  )
}

DashboardMain.propTypes = {}

export default DashboardMain
