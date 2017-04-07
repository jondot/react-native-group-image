import 'react-native'
import React from 'react'
import GroupImage from '../index'

import renderer from 'react-test-renderer'

test('renders correctly', () => {
  const tree = renderer.create(
    <GroupImage />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
