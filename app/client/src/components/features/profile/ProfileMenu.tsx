import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/Buttons/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsAdmin } from '@/selectors/authSelectors'
import { logout } from '@/state/slices/auth/authSlice'

const ProfileMenu = () => {
    const userIsAdmin = useSelector(selectIsAdmin)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = async () => {
      console.log('Button')
      dispatch(logout())
    }
    
  return (
    <DropdownMenu>
        {/* Avatar acts as the trigger */}
      <DropdownMenuTrigger asChild>
        <Button variant="default" className="rounded-full">
          <Avatar>
            <AvatarImage src="/images/profile.jpg" alt="@victory" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      {/* Dropdown content */}
      <DropdownMenuContent align="end">
        <div>
            {
              userIsAdmin ? (
                <DropdownMenuItem>
                  <Button variant='link' className='border-primary border w-full hover:bg-primary hover:text-white' onClick={() => navigate('./createListing')}>
                      Create New Listing
                  </Button>
              </DropdownMenuItem>
              ) : null
            }
            <DropdownMenuItem>My Profile</DropdownMenuItem>
        </div>

        <div>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>
              <Button variant='outline' onClick={() => handleLogout()}>
                Log Out
              </Button>
            </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProfileMenu
