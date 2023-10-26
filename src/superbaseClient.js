import { createClient } from '@supabase/supabase-js';
const supabase  = createClient(
    process.env.REACT_APP_SUPERBASE_URL,
    process.env.REACT_APP_supabase_API_KEY
    )
    export { supabase };