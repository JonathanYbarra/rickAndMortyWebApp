import { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectCharactedLiker, toggleLike } from "slices";

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { IconButton } from '@mui/material';

export const LikedButton = ({ id }: { id: number }) => {
    const [isLiked, setIsLiked] = useState(false);
    const dispatch = useAppDispatch();

    const charactedLiked = useAppSelector(selectCharactedLiker);

    useEffect(() => {
        if (id) {
            const isFoundId = charactedLiked.find(elem => elem === +id)
            setIsLiked(!!isFoundId);
        }
    }, [charactedLiked, id])

    const addFavoriteCharacter = () => {
        dispatch(toggleLike(+id!));
    }

    return (
        <>
            <IconButton aria-label="like" sx={{ ml: 1 }} onClick={addFavoriteCharacter}>
                {isLiked && <FavoriteOutlinedIcon fontSize="large" color="error" />}
                {!isLiked && <FavoriteBorderOutlinedIcon fontSize="large" />}
            </IconButton>
        </>
    )
}