import { cn } from '@bem-react/classname';import './index.scss';const cnLayout = cn('Layout');export const Layout = ({ children }: React.PropsWithChildren) => {  return <main className={cnLayout()}>{children}</main>;};