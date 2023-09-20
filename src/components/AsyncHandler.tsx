import Loader from './Loader'
import { Alert } from '@mui/material'

interface Props {
    children: React.ReactNode;
    error: string | null;
    loading: boolean
}

function AsyncHandler({children, error, loading}: Props) {
    if (loading) {
        return <Loader/>
    }
    if (error) {
        return <Alert severity='error'>{error}</Alert>
    }
    return <div className='my-md'>{children}</div>
}

export default AsyncHandler