import { selectCurrentUser } from '@/selectors/authSelectors'
import { useSelector } from 'react-redux'

const AdminDashboard = () => {
    const user = useSelector(selectCurrentUser)
    return(
        <>
            {user}
        </>
    )
}

export default AdminDashboard