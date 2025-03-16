import React from 'react'
import '../index.css'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient('https://mlxzmcyvcingisxczsqj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1seHptY3l2Y2luZ2lzeGN6c3FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxMjEzMTUsImV4cCI6MjA1NzY5NzMxNX0.j-79P7RdR2Ch8vsF6Qhbsj7fmZYNriptXjRysYGTu1I')


function Authcomponent() {

  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })


    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
  }
  else {
    return (<div>Logged in!</div>)
  }
}

export default Authcomponent;
