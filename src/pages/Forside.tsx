import Rejsetilbud from '../components/Rejsetilbud';
import IntroBillede from '../images/rwanda1.jpg';
import ForsideBillede from '../components/ForsideBillede';
import tilbud1 from '../images/t1.jpg';
import tilbud2 from '../images/t2.jpg';
import tilbud3 from '../images/t3.jpg';
import TrustpilotReviews from '../components/TrustpilotReviews';

export default function Frontpage() {
    const tilbud = [{ titel: "Tilbud1", beskrivelse: "Beskrivelse af tilbud1", billede: tilbud1}, { titel: "Tilbud2", beskrivelse: "Beskrivelse af tilbud2", billede: tilbud2 }, { titel: "Tilbud3", beskrivelse: "Beskrivelse af tilbud3", billede: tilbud3 }]
    return (
        <div>
            {ForsideBillede(IntroBillede)}
            <h1 style={{margin: '2%'}}>Vores Tilbud</h1>
            {Rejsetilbud({tilbud: tilbud})}
            <h1>Trustpilot Reviews</h1>
            <TrustpilotReviews />
        </div>
    )
}
