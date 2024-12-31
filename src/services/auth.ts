import { supabase } from '../lib/supabase';
import { User, UserRole } from '../types/auth';

export async function signUp(
  email: string,
  password: string,
  userData: {
    first_name: string;
    last_name: string;
    role: UserRole;
  }
) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: userData,
    },
  });

  if (error) throw error;
  return data;
}

export async function signIn(email: string, password: string) {
  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (authError) throw authError;

  const { data: userData, error: userError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', authData.user.id)
    .single();

  if (userError) throw userError;

  return {
    id: userData.id,
    email: userData.email,
    name: `${userData.first_name} ${userData.last_name}`,
    role: userData.role as UserRole,
  };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}