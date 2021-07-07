import { TableCell } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"

export const CryptoImage = styled(TableCell)({
    "& img": {
        height: "60px",
    }
})
export const CryptoDelete = styled(TableCell)({
    position: "relative",
    "& .delete-crypto": {
        position: "absolute",
        right: "20%",
        top: "30%",
        display: "none"
    },
    "& div": {
        display: "flex"
    }
})