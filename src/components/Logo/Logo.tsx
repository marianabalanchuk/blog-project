import Typography from '@mui/material/Typography'
import { NavLink } from 'react-router-dom'

type Props = {
    image: string
    width: number
}
const Logo = (props: Props) => {
    return (
        <>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <NavLink to="/">
                    <img src={props.image} width={props.width} alt="logo" />
                </NavLink>
            </Typography>
        </>
    )
}
export default Logo
