import Hero from './Hero'
import DreamTeam from './DreamTeam'
import FarGalaxy from './FarGalaxy'
import { withErrorPage } from '../hoc/withErrorPage';

const Home = () => {
    return (
        <main>
            <Hero />
            <DreamTeam />
            <FarGalaxy />
        </main>
    )
}

export default withErrorPage(Home)