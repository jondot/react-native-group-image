import React from 'react'
import { View, StyleSheet } from 'react-native'
import { storiesOf } from '@kadira/react-native-storybook'
import { image } from 'faker'
import { withKnobs, number } from '@kadira/storybook-addon-knobs'

import GroupImage from '../../src/index'

const images = [
  'https://s3.amazonaws.com/uifaces/faces/twitter/ccinojasso1/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/kucingbelang4/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/safrankov/128.jpg',
]

const groupStyles = StyleSheet.create({
  group: {
    width: 88,
    height: 88,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#000'
  },
})

storiesOf('GroupImage', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <View style={{paddingTop: 64}}>{getStory()}</View>
  ))
  .add('blank', () => <GroupImage />)
  .add('blank w/background', () => <GroupImage background={{uri: images[0]}} />)
  .add('single', () => <GroupImage images={[
    { uri: images[0] },
  ]} />)
  .add('single', () => <GroupImage images={[
    { uri: images[0] },
  ]} />)
  .add('two', () => <GroupImage images={[
    { uri: images[0] },
    { uri: images[1] },
  ]} />)
  .add('three', () => <GroupImage images={[
    { uri: images[0] },
    { uri: images[1] },
    { uri: images[2] },
  ]} />)
  .add('four', () => <GroupImage images={[
    { uri: image.avatar() },
    { uri: image.avatar() },
    { uri: image.avatar() },
    { uri: image.avatar() },
  ]} />)
  .add('four but display only 3', () => {
    const displayOnly = number('Display Only', 3)
    return <GroupImage displayOnly={displayOnly} images={[
    { uri: image.avatar() },
    { uri: image.avatar() },
    { uri: image.avatar() },
    { uri: image.avatar() },
    ]} />
  }
  )
  .add('four w/background', () => <GroupImage background={{uri: images[0]}} images={[
    { uri: image.avatar() },
    { uri: image.avatar() },
    { uri: image.avatar() },
    { uri: image.avatar() },
  ]} />)
  .add('four w/background, styled', () => <GroupImage style={groupStyles.group} background={{uri: images[0]}} images={[
    { uri: image.avatar() },
    { uri: image.avatar() },
    { uri: image.avatar() },
    { uri: image.avatar() },
  ]} />)
  .add('four and up', () => <GroupImage images={[
    { uri: image.avatar() },
    { uri: image.avatar() },
    { uri: image.avatar() },
    { uri: image.avatar() },
    { uri: image.avatar() },
  ]} />)
