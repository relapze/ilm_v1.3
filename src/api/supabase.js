import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zybjrvvrtvalapkaqlaq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5YmpydnZydHZhbGFwa2FxbGFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY5MjEzNzUsImV4cCI6MjAwMjQ5NzM3NX0.RZQ8b2mLOiQes2e-FsG6RWCaX0GH-VJ5lPaOkf1Z5vo';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;