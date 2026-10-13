// SciRAP Assessor v2 — connection settings
// Fill in the two values from your Supabase project:
//   Supabase dashboard → Project Settings → API
//     supabaseUrl      = "supabaseUrl"
//     supabaseAnonKey  = "supabaseAnonKey" key
// The anon key is meant to be public. Your data is protected by the
// row-level security rules in supabase_schema.sql, not by hiding this key.
// NEVER put the "service_role" key here.
// While these stay as YOUR-..., the tool runs in guest-only mode.
window.SCIRAP_CONFIG = {
  supabaseUrl: "https://YOUR-PROJECT-REF.supabase.co",
  supabaseAnonKey: "YOUR-ANON-PUBLIC-KEY"
};
