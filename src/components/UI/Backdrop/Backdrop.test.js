import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Backdrop } from '../'

configure({
  adapter: new Adapter()
})

describe('<Backdrop />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Backdrop />)
  })

  it('should render if attribute show is true', () => {
    wrapper.setProps({
      show: true
    })

    expect(
      wrapper.isEmptyRender()
    ).toEqual(false)
  })

  it('should not render if not have attribute show', () => {
    expect(
      wrapper.isEmptyRender()
    ).toEqual(true)
  })

  it('should not render if attribute show is false', () => {
    wrapper.setProps({
      show: true
    })

    expect(
      wrapper.isEmptyRender()
    ).toEqual(true)
  })
})