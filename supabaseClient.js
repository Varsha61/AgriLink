import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fptfvocfyuyxuxioulzj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwdGZ2b2NmeXV5eHV4aW91bHpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3ODc1MjYsImV4cCI6MjA1OTM2MzUyNn0.BI6VdbVA_MnwjlO3PHtWpj-e-RHV_CpaISNVpo-DtUg';
export const supabase = createClient(supabaseUrl, supabaseKey);



// import { createClient } from '@supabase/supabase-js'
// const supabaseUrl = 'https://ffuuqtzzlqtwydyovdmw.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmdXVxdHp6bHF0d3lkeW92ZG13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3MzM5OTcsImV4cCI6MjA3MzMwOTk5N30.lrGTeoRiVFgC9FzasJZR-YcFXyz_qKY2EEGMqdEh6gU'
// export const supabase = createClient(supabaseUrl, supabaseKey)