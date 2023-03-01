import Typography from '@mui/material/Typography'

type Props = {
    image: string
    width: number
}
const Logo = (props: Props) => {
    return (
        <>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <a href="/">
                    <img src={props.image} width={props.width} />
                </a>
            </Typography>
        </>
    )
}
export default Logo
