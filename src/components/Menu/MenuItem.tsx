import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

type Props = {
    to: string
    children: React.ReactNode
}
const MenuItem = ({ to, children }: Props) => {
    return (
        <>
            <Button color="inherit">
                <NavLink
                    to={to}
                    className={({ isActive }) =>
                        isActive ? 'menu-item-active' : 'menu-item'
                    }
                >
                    {children}
                    <ExpandMoreIcon />
                </NavLink>
            </Button>
        </>
    )
}
export default MenuItem
