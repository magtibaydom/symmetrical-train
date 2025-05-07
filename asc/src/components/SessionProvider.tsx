'use client';

import { createContext, useContext } from 'react';
import type { Session } from '@supabase/supabase-js';

const SessionContext = createContext<Session | null>(null);

export function SessionProvider({ children, session }: { children: React.ReactNode; session: Session | null }) {
  return <SessionContext.Provider value={session}>{children}</SessionContext.Provider>;
}

export function useSession() {
  return useContext(SessionContext);
}
