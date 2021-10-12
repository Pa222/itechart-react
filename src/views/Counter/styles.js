import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    counter: {
        borderBottom: "1px solid black"
    },
    counter__button: {
        margin: "0 10px 0 10px",
        padding: "10px",
        fontSize: "18px",
        backgroundColor: "#FA6400",
        border: "1px solid black",
        borderRadius: "5px",
        cursor: "pointer"
    },
    counter__text: {
        fontSize: "28px",
    },
});

export default useStyles;