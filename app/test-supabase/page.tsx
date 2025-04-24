// app/test-supabase/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/src/lib/supabaseClient';
// import { utton } from '@/src/components/ui/button';

export default function TestSupabasePage() {
  const [etabs, setEtabs] = useState<{ id: string; nom: string; adresse: string }[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    supabase
      .from('etablissement')
      .select('*')
      .then(({ data, error }) => {
        if (error) setError(error.message);
        else setEtabs((data ?? []) as { id: string; nom: string; adresse: string }[]);
      });
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test de connexion Supabase</h1>
      {error && <p className="text-red-600">Erreur : {error}</p>}
      <ul className="list-disc pl-5">
        {etabs.map((e) => (
          <li key={e.id}>
            <strong>{e.nom}</strong> — {e.adresse}
          </li>
        ))}
      </ul>
    </main>
  );
}
