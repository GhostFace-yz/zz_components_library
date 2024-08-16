import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3'
import { fn } from '@storybook/test'

import { ZzButton } from 'zz_components_library'
//自己定义argTypes
type Story = StoryObj<typeof ZzButton> & { argTypes: ArgTypes }

const meta: Meta<typeof ZzButton> = {
  title: 'Example/Button',
  component: ZzButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info', ''],
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'default', 'small', '']
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    useThrottle: {
      control: 'boolean',
    },
    throttleDuration: {
      control: 'boolean',
    },
    autofocus: {
      control: 'boolean',
    },
    tag: {
      control: { type: 'select' },
      options: ['button,', 'a', 'div']
    },
    nativeType: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset', ''],
    }
  }
}