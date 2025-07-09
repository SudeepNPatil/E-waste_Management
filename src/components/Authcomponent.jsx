/* import React from 'react'
import '../index.css'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient('https://mlxzmcyvcingisxczsqj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1seHptY3l2Y2luZ2lzeGN6c3FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxMjEzMTUsImV4cCI6MjA1NzY5NzMxNX0.j-79P7RdR2Ch8vsF6Qhbsj7fmZYNriptXjRysYGTu1I')

export default function App() {
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
    if (!session) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-4">
          <h1 className="text-3xl font-bold text-green-800 mb-6">Welcome to E-Waste Portal</h1>
          <p className="text-gray-600 mb-8">Please sign in to continue</p>

          <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
            <Auth
              supabaseClient={supabase}
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: '#16a34a',       // Your primary green
                      brandAccent: '#166534', // Darker green accent
                    },
                  },
                },
              }}
              theme="default" // or "dark"
            />
          </div>
        </div>
      );
    }

  }
  else {
    return (<div>Logged in!</div>)
  }
} */


import '../index.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const supabase = createClient(
  'https://mlxzmcyvcingisxczsqj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1seHptY3l2Y2luZ2lzeGN6c3FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxMjEzMTUsImV4cCI6MjA1NzY5NzMxNX0.j-79P7RdR2Ch8vsF6Qhbsj7fmZYNriptXjRysYGTu1I'
);

function Authcomponent() {
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);

      // ✅ If already logged in, redirect to home
      if (data.session) {
        navigate('/');
      }
    };

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);

      // ✅ Redirect after new login
      if (session) {
        navigate('/');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-4">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Welcome to E-Waste Portal</h1>
        <p className="text-gray-600 mb-8">Please sign in to continue</p>

        <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#16a34a',
                    brandAccent: '#166534',
                  },
                },
              },
            }}
            theme="default"
          />
        </div>
      </div>
    );
  }

  return <div>

    {navigate('/')}

  </div>;
}

export default Authcomponent;
