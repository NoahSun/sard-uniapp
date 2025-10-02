import { type StyleValue } from 'vue'
import { type NodeRect } from '../../utils'
import { defaultConfig } from '../config'

export interface TabOption {
  rootStyle?: StyleValue
  rootClass?: string
  title?: string
  name?: string | number | boolean
  disabled?: boolean
}

export interface TabsProps {
  rootStyle?: StyleValue
  rootClass?: string
  current?: string | number | boolean
  list?: TabOption[]
  type?: 'line' | 'pill' | 'card'
  scrollable?: boolean
}

export const defaultTabsProps = defaultConfig.tabs

export interface TabsSlots {
  default?(props: Record<string, never>): any
  line?(props: Record<string, never>): any
}

export interface TabsEmits {
  (e: 'update:current', name: string | number | boolean): void
  (e: 'change', name: string | number | boolean): void
}

export interface TabProps {
  rootStyle?: StyleValue
  rootClass?: string
  title?: string
  name: string | number | boolean
  disabled?: boolean
}

export interface TabSlots {
  default?(props: Record<string, never>): any
}

export interface TabEmits {
  (e: 'click', event: any): void
}

export interface TabContext {
  current: any
  select: (name: string | number | boolean, initial?: boolean) => void
  register: (
    name: string | number | boolean,
    expose: {
      getRect: () => Promise<NodeRect>
    },
  ) => void
  unregister: (name: string | number | boolean) => void
}

export const tabContextSymbol = Symbol('tab-context')
