import { Box, CircularProgress } from "@mui/material"

export const Loading = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }} p={10}>
            <CircularProgress color="secondary" />
        </Box>
    )
}