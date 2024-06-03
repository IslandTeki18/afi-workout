import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uwsdcinfsxvjlbipykvh.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3c2RjaW5mc3h2amxiaXB5a3ZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcyNjkyMDEsImV4cCI6MjAzMjg0NTIwMX0.jsn0GrOuVAv3N8PzgLNRb6KpNXE9FIQ4B3nzpntKkjo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
