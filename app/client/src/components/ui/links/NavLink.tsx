import { Link, type LinkProps } from 'react-router-dom'
 
interface NavLinkProps extends LinkProps {
    color?: 'inherit' | string
    className?: string
}
 
const NavLink = ({ to, children, color = 'inherit', className = '' }: NavLinkProps) => {
    return (
        <Link 
            to={to} 
            className={`${className} nav-link`}
            style={{ color: color === 'inherit' ? 'inherit' : color }}
        >
            {children}
        </Link>
    )
}
 
export default NavLink