import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

// The initial index.tsx that came with the repo
export default function HomePage() {
    return (
        <>
            <Welcome />
            <ColorSchemeToggle />
        </>
    );
}
