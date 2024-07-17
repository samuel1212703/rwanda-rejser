import Rejsetilbud from '../components/Rejsetilbud';
import IntroBillede from '../images/rwanda1.jpg';
import ForsideBillede from '../components/ForsideBillede';
import TrustpilotReviews from '../components/TrustpilotReviews';
import { tilbudData } from '../AppRouter';

export default function Frontpage() {
    
    return (
        <div>
            <ForsideBillede forsideBillede={IntroBillede}></ForsideBillede>
            <h1>Vores Rejsepakker</h1>
            {Rejsetilbud(tilbudData)}
            <h1>Trustpilot Reviews</h1>
            <TrustpilotReviews />
        </div>
    )
}
