'use server';

import { redirect } from 'next/navigation';

export async function searchAccount(formData: FormData) {
  const id = formData.get('accountId');
  if (!id) throw new Error('ID da conta é obrigatório');
  redirect(`/${id}`);
}