import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hlupxxtadecnmbpyajug.supabase.co";
const supabaseAnonKey = "sb_publishable_Zzmov_F-PW9vc8omXMQLPg_hbKJ8obD";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
