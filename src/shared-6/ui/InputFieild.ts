import { styled } from '@mui/system';
import { TextField } from '@mui/material';



export const InputField = styled(TextField)({
    '& .MuiInputBase-input': {
        color: 'var(--text-color)',
    },
});