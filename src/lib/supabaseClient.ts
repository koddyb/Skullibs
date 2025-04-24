// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl  = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey  = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// 1. Création du client Supabase
export const supabase = createClient(supabaseUrl, supabaseKey);
