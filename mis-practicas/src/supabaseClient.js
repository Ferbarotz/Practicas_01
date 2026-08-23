import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Evita crash si las variables no están configuradas aún
const url = supabaseUrl && supabaseUrl !== 'TU_URL_DE_SUPABASE'
  ? supabaseUrl
  : 'https://placeholder.supabase.co'

const key = supabaseKey && supabaseKey !== 'TU_ANON_KEY_DE_SUPABASE'
  ? supabaseKey
  : 'placeholder-key'

export const supabase = createClient(url, key)
export const supabaseReady = url !== 'https://placeholder.supabase.co'
