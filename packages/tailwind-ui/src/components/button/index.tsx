import clsx from 'clsx'

export interface ButtonProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'destructive'
    | 'linkColor'
    | 'linkGray'
  state?: 'normal' | 'disabled'
  size?: 'md' | 'lg' | 'xl' | 'xxl'
  block?: boolean
  children?: React.ReactNode
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  className?: string

  onClick?: () => void
}

const VARIANT_MAP = {
  primary:
    'bg-brand-700 text-white shadow focus:bg-brand-800 hover:bg-brand-800',
  secondary:
    'bg-white text-neutral-900 shadow focus:bg-neutral-50 hover:bg-neutral-50',
  tertiary: 'bg-transparent text-brand-700',
  destructive: 'bg-red-600 text-white shadow ',
  linkColor: 'text-brand-700',
  linkGray: 'text-neutral-600',
}

const VARIANT_DISABLE_MAP = {
  primary:
    'text-neutral-400 bg-neutral-100 shadow-none focus:bg-neutral-100 hover:bg-neutral-100',
  secondary:
    'text-neutral-400 bg-neutral-100 shadow-none focus:bg-neutral-100 hover:bg-neutral-100',
  tertiary: 'text-neutral-400 focus:none hover:none',
  destructive:
    'text-neutral-400 bg-transparent shadow-none focus:none hover:none',
  linkColor: 'text-neutral-400 focus:none hover:none',
  linkGray: 'text-neutral-400 focus:none hover:none',
}

const PADDING_MAP = {
  md: 'py-2.5 px-3.5',
  lg: 'py-3 px-4',
  xl: 'py-3.5 px-5',
  xxl: 'py-4.5 px-6',
}

const PADDING_FOR_ICON_MAP = {
  md: 'p-2.5',
  lg: 'p-3',
  xl: 'p-3.5',
  xxl: 'p-4.5',
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  size = 'md',
  block = false,
  className,
  leftIcon,
  rightIcon,
  state,
  onClick,
}) => {
  const baseClassName =
    'rounded text-sm flex items-center justify-center focus:ring'

  if ((leftIcon && !children) || (rightIcon && !children)) {
    return (
      <button
        disabled={state === 'disabled'}
        onClick={onClick}
        className={clsx(
          baseClassName,
          VARIANT_MAP[variant],
          {
            'w-full': block,
            [PADDING_FOR_ICON_MAP[size]]:
              variant !== 'linkGray' && variant !== 'linkColor',
            [VARIANT_DISABLE_MAP[variant]]: state === 'disabled',
          },
          className,
        )}
      >
        {leftIcon}
        {rightIcon}
      </button>
    )
  }

  return (
    <button
      disabled={state === 'disabled'}
      onClick={onClick}
      className={clsx(
        baseClassName,
        {
          'w-full': block,
          [PADDING_MAP[size]]:
            variant !== 'linkGray' && variant !== 'linkColor',
          [VARIANT_MAP[variant]]: state !== 'disabled',
          [VARIANT_DISABLE_MAP[variant]]: state === 'disabled',
        },
        className,
      )}
    >
      {leftIcon} <span className="px-1 font-medium">{children}</span>
      {rightIcon}
    </button>
  )
}
