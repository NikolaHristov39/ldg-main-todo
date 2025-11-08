// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lqlsgfickpvsdejezgyn.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxbHNnZmlja3B2c2RlamV6Z3luIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyODA1OTUsImV4cCI6MjA3Nzg1NjU5NX0.JFVmaOW_rb-RqK7FBq_CIHiKLd8CS4tqUdlLF9QF-S0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
