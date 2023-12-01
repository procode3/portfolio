'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function Works() {
  const [projectImage, setProjectImage] = useState('helpmeout.png'); // State to store the project image URL
  const [projectDescription, setProjectDescription] = useState(
    'HelpeMeOut is a chrome extension that helps users record their screens and share the videos with their peers in an easy way. It is being developed with React, Nodejs, Express, MongoDB, and Socket.io.'
  );
  const [projectUrl, setProjectUrl] = useState('');
  // Function to set the project image based on the hovered content
  const handleProjectHover = (imageName) => {
    // Define the image URLs based on the content
    const imageUrls = {
      HelpMeOut: 'helpmeout.png',
      Zuriportfolio: 'zuriportforlio.png',
      Postpedia: 'postpedia.png',
      Kuzabiz: 'kuzabiz.png',
      Events: 'events.png',
    };

    const projectData = {
      HelpMeOut: {
        imageUrl: 'helpmeout.png',
        description:
          'HelpeMeOut is a chrome extension that helps users record their screens and share the videos with their peers in an easy way. It is being developed with React, Nodejs, Express, MongoDB, and Socket.io.',
        url: 'https://helpmeout-previewpage-311b.vercel.app/',
      },
      Postpedia: {
        imageUrl: 'postpedia.png',
        description:
          'Postpedia is a blogging platform designed for users to create and share their blogs, documenting their unique blogging experiences. It particularly caters to those passionate about sharing tech-related content, providing a space for blogging enthusiasts to delve into the world of technology blogging😊',
        url: 'https://post-pedia-v1.vercel.app/',
      },
      Zuriportfolio: {
        imageUrl: 'zuriportforlio.png',
        description:
          'Zuriportfolio is a platform that helps developers showcase their projects and skills to the world. It is currently being developed with React, Nodejs, Express, Postgresql, and Python.',
        url: 'https://zuriportfolio.vercel.app/',
      },
      Kuzabiz: {
        imageUrl: 'kuzabiz.png',
        description:
          "Kuzabiz is a website leveraging the power of OpenAI's artificial intelligence to generate campaigns. The platform harnesses advanced AI capabilities to streamline and enhance the process of creating marketing campaigns, offering innovative solutions for businesses and individuals seeking efficient and effective campaign strategies.",
        url: 'https://marketing-app-xuxx.vercel.app/',
      },
      Events: {
        imageUrl: 'events.png',
        description:
          'Evento is an innovative and user-friendly application designed for seamless event scheduling. With its intuitive interface, Evento empowers users to effortlessly plan and organize a wide range of events, from meetings and conferences to social gatherings and special occasions.',
        url: 'https://evento1.vercel.app/',
      },
    };

    // Set the project image based on the hovered content
    const { imageUrl, description, url } = projectData[imageName];
    setProjectImage(imageUrl);
    setProjectDescription(description);
    setProjectUrl(url);
  };

  return (
    <section
      id='work'
      className='bg-white h-screen w-screen flex flex-col px-[50px] justify-evenly mb-8'
    >
      <h1 className='text-[40px] md:text-[100px]'>projects.</h1>
      <div className='flex flex-col md:flex-row justify-evenly w-full h-fit'>
        <div className='w-full md:w-1/2 flex flex-col gap-[50px]'>
          <div
            className='text-[20px] md:text-[50px] border-b-2 border-neutral-800 flex justify-between items-center text-neutral-600 hover:text-black'
            onMouseEnter={() => handleProjectHover('HelpMeOut')}
          >
            <h1>1. HelpMeOut </h1>
            <a
              href='https://github.com/ggakila/chrome_ext'
              target='_blank'
              className='text-lg md:text-2xl text-neutral-400'
            >
              source code
            </a>
          </div>

          <div
            className='text-[20px] md:text-[50px] border-b-2 border-neutral-800 flex justify-between items-center text-neutral-600 hover:text-black'
            onMouseEnter={() => handleProjectHover('Zuriportfolio')}
          >
            <h1>2. Zuriportfolio </h1>
            <a
              href='https://github.com/procode3/team-artemis-portfolio-api'
              target='_blank'
              className='text-lg md:text-2xl text-neutral-400'
            >
              source code
            </a>
          </div>

          <div
            className='text-[20px] md:text-[50px] border-b-2 border-neutral-800 flex justify-between items-center text-neutral-600 hover:text-black'
            onMouseEnter={() => handleProjectHover('Kuzabiz')}
          >
            <h1>3. Kuzabiz </h1>
            <a
              href='https://github.com/procode3/aimarketing'
              target='_blank'
              className='text-lg md:text-2xl text-neutral-400'
            >
              source code
            </a>
          </div>
          <div
            className='text-[20px] md:text-[50px] border-b-2 border-neutral-800 flex justify-between items-center text-neutral-600 hover:text-black'
            onMouseEnter={() => handleProjectHover('Events')}
          >
            <h1>4. Evento </h1>
            <a
              href='https://github.com/procode3/evento'
              target='_blank'
              className='text-lg md:text-2xl text-neutral-400'
            >
              source code
            </a>
          </div>
          <div
            className='text-[20px] md:text-[50px] border-b-2 border-neutral-800 flex justify-between items-center text-neutral-600 hover:text-black'
            onMouseEnter={() => handleProjectHover('Postpedia')}
          >
            <h1>5. Postpedia </h1>
            <a
              href='https://github.com/Jeweleni/PostPedia'
              target='_blank'
              className='text-lg md:text-2xl text-neutral-400'
            >
              source code
            </a>
          </div>
        </div>
        <div className='w-full md:w-1/2 h-full flex flex-col justify-start gap-4 items-center p-4 '>
          <p className='text-black  text-justify text-xl w-4/5 min-h-2/5 bg-blend-luminosity '>
            {projectDescription}
          </p>
          <div className='right relative w-4/5 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
            <Image
              src={`/${projectImage}`}
              fill={false}
              width={600}
              height={400}
              alt='project Image'
              style={{ objectFit: 'cover' }}
            />
          </div>
          <Link href={projectUrl} legacyBehavior>
            <a className='bg-transparent text-black font-semibold rounded px-4 py-2 w-fit border-2 border-black hover:bg-black hover:text-white hover:border-transparent'>
              Demo App
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
