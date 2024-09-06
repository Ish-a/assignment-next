import _navbar from './NavigationMenuDemo';
import _frontpage from './frontpage';
// import _FinalPage from './FinalPage.jsx';

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  return (
  <div>
    <_navbar/>
    <_frontpage/>
      </div>
  );
}
