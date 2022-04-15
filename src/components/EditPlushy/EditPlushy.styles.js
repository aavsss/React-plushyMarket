import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        justifyContent: "center",
    },
    content: {
        flex: "1"
    },
    image: {
        display: "block",
        width: "250px",
        height: "350px",
    }
}))