import React from 'react'
import ReactDOM from 'react-dom'

import { Tab } from './components/tab'
import { TabNav } from './components/tab-nav'
import { TabContent } from './components/tab-content'
import { TabNavItem } from './components/tab-nav-item'
import { TabContentBody } from './components/tab-content-body'


class App extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Tab>
          <TabNav>
            <TabNavItem>Tab A</TabNavItem>
            <TabNavItem>Tab B</TabNavItem>
            <TabNavItem>Tab C</TabNavItem>
          </TabNav>
          <TabContent>
            <TabContentBody>Tab Content A</TabContentBody>
            <TabContentBody>Tab Content B</TabContentBody>
            <TabContentBody>Tab Content C</TabContentBody>
          </TabContent>
        </Tab>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
