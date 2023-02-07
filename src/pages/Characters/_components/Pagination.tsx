import { useCallback } from 'react';

import PrevIcon from '@mui/icons-material/NavigateBefore';
import NextIcon from '@mui/icons-material/NavigateNext';
import { Button, Grid } from "@mui/material";

import { IPaginationProps } from './Character.types';

export const Pagination = ({ setCurrentPage, initialPage, currentPage, pages, search }: IPaginationProps) => {

    const nextPage = useCallback(() => {
        setCurrentPage(currentPage + 1);
    }, [setCurrentPage, currentPage])

    const prevPage = useCallback(() => {
        setCurrentPage(currentPage - 1);
    }, [setCurrentPage, currentPage])

    return (
        <Grid container justifyContent="space-between" my={4}>
            <Button
                startIcon={<PrevIcon />}
                variant="contained"
                color="secondary"
                onClick={prevPage}
                disabled={currentPage <= initialPage || search}
            >
                Prev Page
            </Button>
            {
                pages && (
                    <Button
                        endIcon={<NextIcon />}
                        variant="contained"
                        color="secondary"
                        onClick={nextPage}
                        disabled={currentPage >= pages || search}
                    >
                        Next Page
                    </Button>
                )
            }
        </Grid>
    )
}