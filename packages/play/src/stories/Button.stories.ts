import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3'
import { fn } from '@storybook/test'

import { ZzButton } from 'zz_components_library'
import { render } from 'vue'
import { template } from 'lodash-es'
//自己定义argTypes
type Story = StoryObj<typeof ZzButton> & { argTypes: ArgTypes }

const meta: Meta<typeof ZzButton> = {
  title: 'Example/Button',
  component: ZzButton,
  tags: ['autodocs'],
  args: {
    onclick: fn(),
  },
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
      control: 'number',
    },
    autofocus: {
      control: 'boolean',
    },
    tag: {
      control: { type: 'select' },
      options: ['button', 'a', 'div']
    },
    nativeType: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset', ''],
    },
    icon: {
      control: { type:'text'}
    },
    loadingIcon: {
      control: { type:'text'}
    }
  }
}

// 定义容器
const container = (val: string) => `
<div style="margin: 5px;">${val}</div>
`

export const Default: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: 'text',
    }
  },
  args: {
    type: 'primary',
    content: 'Button',
  },
  render: (args: any) => ({
    components: { ZzButton }, 
    setup() {
      return { args }
    },
    template: container(
      `<zz-button v-bind="args">{{ args.content }}</zz-button>`
    )
  })
}

export default meta