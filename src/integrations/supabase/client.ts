// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://rmxgoxuejpeoucloagqd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJteGdveHVlanBlb3VjbG9hZ3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5NDc0ODYsImV4cCI6MjA2NDUyMzQ4Nn0.LsqONmH7pCkIH9atzqABh7cB8sODUqiZEPE8NYrO5YA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);