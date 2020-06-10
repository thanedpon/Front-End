import React from 'react';
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme'
import App from './App';


describe('<App /> Test Suite', () => {
  let wrapper
 beforeEach(() => {
   wrapper = shallow(<App/>)
  })

  it('<h1 /> render correctly', () => {
    expect(wrapper.find('h1')).toHaveLength(1)
   })

})
