import { storiesOf } from '@storybook/react'
import React from 'react'
import { MyButton } from '..'

storiesOf('buttons', module)
  .add('TestButton', () => ( 
    <MyButton></MyButton>
  ))
  .add('TestButton1', () => ( 
    <MyButton>another story</MyButton>
  ));