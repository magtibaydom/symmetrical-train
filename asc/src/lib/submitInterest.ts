import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseAnonKey)

interface SignupData {
    role: 'mentor' | 'learner'
    mentor_interest: string
    learner_interest: string
    email: string
    privacy: boolean
  }
  
  export async function submitInterest(data: SignupData) {
    const { error } = await supabase.from('signups').insert([data])
  
    if (error) {
      throw new Error(error.message)
    }
  }
  