import Navbar from './components/navbar/Navbar'
import Hero from './components/hero_section/hero';
import Section from './components/section/section'
import Subscribe from './components/Subscribtion/sub'
import Pagination from './components/pagination/pagination';
import Footer from './components/Footer/footer'
export default function App() {
    const arryjobs = [
        {
          id: 1,
          file: 'https://i.stack.imgur.com/UEvOq.png',
          brand: 'Spotify',
          job: 'UI/UX Designer',
          time: 'Fulltime',
          remote: 'Remote',
          active: true,
        },
        {
          id: 2,
          file: 'https://i.stack.imgur.com/UEvOq.png',
          brand: 'Spotify',
          job: 'UI/UX Designer',
          time: 'Fulltime',

          remote: 'Remote',
          active: true,
        },
        {
          id: 3,
          file: 'https://i.stack.imgur.com/UEvOq.png',
          brand: 'Spotify',
          job: 'UI/UX Designer',
          time: 'Fulltime',

          remote: 'Remote',
          active: true,
        },
        {
          id: 4,
          file: 'https://i.stack.imgur.com/UEvOq.png',
          brand: 'Spotify',
          job: 'UI/UX Designer',
          time: 'Fulltime',

          remote: 'Remote',
          active: false,
        },
        {
          id: 5,
          file: 'https://i.stack.imgur.com/UEvOq.png',
          brand: 'Spotify',
          job: 'UI/UX Designer',
          time: 'Fulltime',

          remote: 'Remote',
          active: false,
        },
        {
          id: 6,
          file: 'https://i.stack.imgur.com/UEvOq.png',
          brand: 'Spotify',
          job: 'UI/UX Designer',
          time: 'Fulltime',

          remote: 'Remote',
          active: false,
        },
        {
          id: 7,
          file: 'https://i.stack.imgur.com/UEvOq.png',
          brand: 'Spotify',
          job: 'UI/UX Designer',
          time: 'Fulltime',

          remote: 'Remote',
          active: false,
        },
        {
          id: 8,
          file: 'https://i.stack.imgur.com/UEvOq.png=',
          brand: 'Spotify',
          job: 'UI/UX Designer',
          time: 'Fulltime',

          remote: 'Remote',
          active: false,
        },
        {
          id: 9,
          file: 'https://i.stack.imgur.com/UEvOq.png',
          brand: 'Spotify',
          job: 'UI/UX Designer',
          time: 'Fulltime',

          remote: 'Remote',
          active: false,
        },
        {
          id: 10,
          file: 'https://i.stack.imgur.com/UEvOq.png',
          brand: 'Spotify',
          job: 'UI/UX Designer',
          time: 'Fulltime',

          remote: 'Remote',
          active: false,
        }
      ];
  // const currentPage = 1
  // const postsPerPage = 10
  //   const indexOfLastPost = currentPage * postsPerPage;
  //   const indexOfFirstPost = indexOfLastPost - postsPerPage;
  //   const currentPosts = arryjobs.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <Navbar btnValue={'nothing'}/>
       <Hero />
       <Section jobs={arryjobs} />
       <Pagination />
       <Subscribe />
       <Footer />
    </div>
  );
}
    // <div className="font-sans">

    // </div>