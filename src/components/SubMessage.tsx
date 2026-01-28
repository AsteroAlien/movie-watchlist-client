import Box from '@mui/material/Box';

function SubMessage({ field }: any) {
    return (
        <Box>
            {field.state.meta.errors && field.state.meta.errors.length > 0 && (
                <em className="text-red-500 text-sm text-wrap mt-[1rem] block">
                    {field.state.meta.errors[0].message}
                </em>
            )}
        </Box>

    );
}

export default SubMessage;