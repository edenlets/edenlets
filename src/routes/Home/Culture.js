import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post2 from './culture.md';
import apple from '../../cabin.jpeg'
import Markdown from './Markdown';

const sections = [
  { title: 'Lodges', url: '/lodges' },
  { title: 'Beach', url: '/beach' },
  { title: 'Culture', url: '/culture' },
  { title: 'Find Us', url: '/findus'}
];

const mainFeaturedPost = {
  title: 'The Ultimate Escape',
  description:
    "Looking for a luxurious and relaxing holiday? Look no further than Eden Gardens. Our beautiful holiday homes...",
  image: apple,
  imageText: 'The Ultimate Escape',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Online Booking',
    date: 'Nov 12',
    description:
      'Book online with Booking.com',
    image: apple,
    imageLabel: 'Image Text',
  },
  {
    title: 'Family Fun',
    date: 'Nov 11',
    description:
      '',
    image: apple,
    imageLabel: 'Image Text',
  },
];

const posts = [post2];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};
import edenLogo from '../../edenlogo.svg'

const theme = createTheme();

export default function Culture() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title={<a  href="/"> <img src={edenLogo}/></a>} sections={sections} />
        <main>
          {/* <MainFeaturedPost post={mainFeaturedPost} /> */}
          <Grid container spacing={4}>
            {/* {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))} */}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>

          {/* <Markdown className="markdown">
          {}
        </Markdown> */}
            <Main title="Eden Garden Luxury Lodges" posts={posts} />
            {/* <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /> */}
          </Grid>
        </main>
      </Container>
      <Footer
        title=""
        description=""
      />
    </ThemeProvider>
  );
}
