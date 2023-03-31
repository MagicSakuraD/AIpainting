import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "your supabase url";
const supabaseKey = "your api key";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
