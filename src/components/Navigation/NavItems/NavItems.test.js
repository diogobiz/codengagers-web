import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { NavItem, NavItems } from '../'

configure({
  adapter: new Adapter()
})

describe('<NavItems />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<NavItems />)
  })

  it('should render one <NavItem /> elements if not authenticated', () => {
    expect(
      wrapper.find(NavItem)
    ).toHaveLength(1)
  })

  it('should render four <NavItem /> elements if authenticated', () => {
    wrapper.setProps({
      isAuthenticated: true
    })

    expect(
      wrapper.find(NavItem)
    ).toHaveLength(4)
  })

  it('should an exact logout button', () => {
    wrapper.setProps({
      isAuthenticated: true
    })

    expect(
      wrapper.contains(<NavItem link="/logout" exact>Logout</NavItem>)
    ).toEqual(true)
  })
})