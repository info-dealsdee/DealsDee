import { redirect } from 'next/navigation';

export default function AdminRedirect() {
  // Server-side redirect to the actual admin interface
  redirect('/admin/');
}