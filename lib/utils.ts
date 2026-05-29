import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export function c(...inputs: Array<any>) {
  return twMerge(clsx(...inputs))
}

export default c
