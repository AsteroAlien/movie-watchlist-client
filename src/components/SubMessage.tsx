import Box from '@mui/material/Box';

function SubMessage({ field }: any) {
    return (
        <Box>
            {field.state.meta.errors && field.state.meta.errors.length > 0 && (
                <em className="text-red-500 text-sm">
                    {field.state.meta.errors.map((error: any) => typeof error === 'string' ? error : error.message || JSON.stringify(error)).join(', ')}
                </em>
            )}
        </Box>

    );
}

export default SubMessage;