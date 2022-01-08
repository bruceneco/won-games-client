import { Story, Meta } from '@storybook/react'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: Story = () => (
  <MediaMatch greaterThan="medium">Desktop only</MediaMatch>
)
export const Mobile: Story = () => (
  <MediaMatch lessThan="medium">Mobile only</MediaMatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
