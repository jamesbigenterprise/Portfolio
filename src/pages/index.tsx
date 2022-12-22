import Layout from '@/Layout/Main.Layout';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import React, { FC } from 'react';

const Home: FC = () => {
    return (
        <Layout>
            <Intro />
            <About />
            <Testimonials />
            <Projects />
            <Skills />
            <Contact />
        </Layout>
    );
};

export default Home;
