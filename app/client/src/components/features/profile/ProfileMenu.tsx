import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/Buttons/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser, selectIsAdmin, selectIsAgent } from '@/selectors/authSelectors'
import { logout } from '@/state/slices/auth/authSlice'
import { getInitials } from '@/utils/getInitials'
import { ChevronDown, LogOut, Settings, User, Plus } from 'lucide-react'

const ProfileMenu = () => {
  const userIsAdmin = useSelector(selectIsAdmin)
  const userIsAgent = useSelector(selectIsAgent)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(selectCurrentUser)

  const handleLogout = async () => {
    dispatch(logout())
  }

  const initials = getInitials(user?.full_name as string)

  return (
    <DropdownMenu>
      {/* Clean profile trigger button */}
      <DropdownMenuTrigger asChild>
        <Button
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white hover:bg-gray-50 border border-gray-200 transition-all duration-200 cursor-pointer hover:shadow-sm"
          aria-label="Profile menu"
        >
          {/* Avatar */}
          <div className="flex items-center gap-2">
            <Avatar className="size-8 border-0 after:hidden">
              <AvatarImage
                src={'/images/profile.jpg'}
                alt={user?.full_name}
              />
              <AvatarFallback className="bg-primary text-white text-xs font-semibold">
                {initials}
              </AvatarFallback>
            </Avatar>

            {/* User name and chevron */}
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium text-gray-900 hidden sm:inline">
                {user?.full_name?.split(' ')[0]}
              </span>
              <ChevronDown size={16} className="text-gray-600" strokeWidth={2.5} />
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>

      {/* Dropdown content */}
      <DropdownMenuContent align="end" className="w-56 bg-white">
        {/* User info header */}
        <DropdownMenuLabel className="px-4 py-3 border-b border-gray-100">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold text-gray-900">
              {user?.full_name}
            </p>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>
        </DropdownMenuLabel>

        {/* Main actions */}
        <div className="py-2">
          <DropdownMenuItem
            onClick={() => navigate('./profile')}
            className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-50"
          >
            <User size={16} className="text-gray-600" />
            <span className="text-sm text-gray-700">My Profile</span>
          </DropdownMenuItem>

          {userIsAdmin || userIsAgent ? (
            <DropdownMenuItem
              onClick={() => navigate('./createListing')}
              className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-50"
            >
              <Plus size={16} className="text-gray-600" />
              <span className="text-sm text-gray-700">Create Listing</span>
            </DropdownMenuItem>
          ) : null}

          <DropdownMenuItem
            onClick={() => navigate('./settings')}
            className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-50"
          >
            <Settings size={16} className="text-gray-600" />
            <span className="text-sm text-gray-700">Settings</span>
          </DropdownMenuItem>
        </div>

        {/* Logout action */}
        <DropdownMenuSeparator className="my-2 bg-gray-100" />
        <DropdownMenuItem
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-red-50 text-red-600 hover:text-red-700"
        >
          <LogOut size={16} />
          <span className="text-sm font-medium">Log Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProfileMenu