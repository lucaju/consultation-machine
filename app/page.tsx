import { redirect } from './navigation';

export const dynamic = 'force-dynamic';

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect('/en');
}
