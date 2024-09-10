import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3'
import { fn, within, userEvent, expect, clearAllMocks,} from '@storybook/test'

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
    onClick: fn(),
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
  }),
  // 测试用例
  play : async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement)
    const btn = canvas.getByTestId('story-test-btn')
    // 用例1: 节流模式
    // await step(
    //   "When useThrottle is set to true, the onClick should be called called once",
    //   async() => {
    //     set(args, 'useThrottle', true)
    //     await userEvent.tripleClick(btn);
    //     expect(args.onClick).toHaveBeenCalledOnce()

    //     clearAllMocks()
    //   }
    // )
    await step('click btn', async() => {
      await userEvent.click(canvas.getByRole('button'))
    });
    expect(args.onClick).toHaveBeenCalled()
  }
}

export default meta