import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { supabase } from './config/supabase'
import { setUser, clearUser } from './state/slices/auth/authSlice'
import { Analytics } from '@vercel/analytics/react'
import HomePage from './pages/HomePage'

const App = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;

    const loadUserSession = async () => {
      const {
        data: { session }
      } = await supabase.auth.getSession();

      if (!session?.user) {
        if (isMounted) dispatch(clearUser());
        return;
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', session.user.id)
        .single();

      if (!isMounted) return;

      dispatch(
        setUser({
          user: session.user,
          role: profile?.role ?? 'user'
        })
      );
    };

    loadUserSession();

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!isMounted) return;

      if (!session?.user) {
        dispatch(clearUser());
        return;
      }

      supabase
        .from('profiles')
        .select('role')
        .eq('id', session.user.id)
        .single()
        .then(({ data: profile }) => {
          if (!isMounted) return;

          dispatch(
            setUser({
              user: session.user,
              role: profile?.role ?? 'user'
            })
          );
        });
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [dispatch]);

  return (
    <>
      <HomePage />
      <Analytics />
    </>
  )
}

export default App
