import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Alert } from '../'

configure({
  adapter: new Adapter()
})

describe('<Alert />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Alert />)
  })

  it('should render if have a message', () => {
    wrapper.setProps({
      message: 'Message test.'
    })

    expect(
      wrapper.isEmptyRender()
    ).toEqual(false)
  })

  it('should not render if you do not have a message', () => {
    expect(
      wrapper.isEmptyRender()
    ).toEqual(true)
  })

  it('should render with "alert-default" class when not set attribute "type"', () => {
    wrapper.setProps({
      message: 'Message test.'
    })

    expect(
      wrapper.hasClass('alert-default')
    ).toEqual(true)
  })

  it('should render with "alert-danger" class when set attribute "type" equals danger', () => {
    wrapper.setProps({
      message: 'Message test.',
      type: 'danger'
    })

    expect(
      wrapper.hasClass('alert-danger')
    ).toEqual(true)
  })

  it('should render with "alert-default" class when set invalid attribute "type"', () => {
    wrapper.setProps({
      message: 'Message test.',
      type: 'dangere'
    })

    expect(
      wrapper.hasClass('alert-default')
    ).toEqual(true)
  })
})