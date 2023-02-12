import Typography from '@mui/material/Typography'

type Props = {
    image: string
}
const Logo = (props: Props) => {
    return (
        <>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img src={props.image} width={140} />
            </Typography>
        </>
    )
}
export default Logo
