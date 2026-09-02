import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    children: {
      control: 'text',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Основная кнопка
export const Primary: Story = {
  args: {
    children: 'Кнопка',
    variant: 'primary',
    size: 'medium',
  },
};

// Вторичная кнопка
export const Secondary: Story = {
  args: {
    children: 'Вторичная',
    variant: 'secondary',
  },
};

// Опасная кнопка
export const Danger: Story = {
  args: {
    children: 'Удалить',
    variant: 'danger',
  },
};

// Маленькая
export const Small: Story = {
  args: {
    children: 'Маленькая',
    size: 'small',
  },
};

// Большая
export const Large: Story = {
  args: {
    children: 'Большая',
    size: 'large',
  },
};

// Отключённая
export const Disabled: Story = {
  args: {
    children: 'Отключена',
    disabled: true,
  },
};