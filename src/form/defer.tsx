/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

type ComponentProps = {
  children?: React.ReactNode,
  className?: string,
  disabled?: boolean,
  size?: string,
  color?: string,
  fullWidth?: any,
};

export default function defer<BaseProps extends ComponentProps>(Component: React.ComponentType<BaseProps>) {
  return (props: ComponentProps) => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
      setMounted(true);
    }, []);

    return <Component mounted={mounted} {...props as BaseProps} />;
  };
}
