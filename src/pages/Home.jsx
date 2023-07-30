import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Mypic from '../images/my-pic.jpg'
import Icon from '../images/icon.png'
import Progress from '../components/Progress'

const Home = () => {
  const [typing] = useTypewriter({
    words: ['UI/UX Designer ', 'Web Developer', 'Content Writer', 'Designer'],
    loop: {},
    typeSpeed: 200,
    delaySpeed: 500,
  })
  return (<>
    <div className='h-screen lg:h-screen bg-gradient-to-t from-indigo-300 dark:from-slate-800 dark:to-slate-900 flex flex-col md:flex-col justify-between px-4 py-16 isolate relative overflow-hidden'>
      {/* <div className="container mx-auto flex-col h-full flex items-center justify-center md:flex-row space-y-5"> */}
        <div className=" text-center mt-28 md:mt-40 w-full md:w-full lg:w-1/2 lg:my-auto">
          <h1 className=' text-5xl text-slate-900 dark:text-gray-100 font-semibold pb-3'>Tanmoy Sadhukhan</h1>
          <h2 className=' font-bold text-violet-700 text-2xl'>{typing}<Cursor /></h2>
        </div>
        <img src={Mypic} alt="mypic" className="hidden lg:block object-cover h-big w-big absolute right-0 left-0 mx-auto -bottom-40 rounded-full -z-10" />
        <div className="flex flex-col gap-5 rounded-md shadow-lg absolute bottom-10 right-0 left-0 mx-auto w-full md:w-3/4 lg:w-1/4 lg:-right-1/2 bg-white dark:bg-slate-900 dark:shadow-slate-800 p-6 h-fit">
          <h1 className="text-4xl font-bold text-indigo-900 dark:text-white">Hi, I'm Tanmoy</h1>
          <p className="text-gray-400">
            with over 5 years of experience on web design and development. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. N oumquam quo
            provident, facere minus temporibus veniam nostrum reprehenderit nihil?
          </p>
          <a className="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit" href="#contact">Hire Me</a>
        </div>
      {/* </div> */}
    </div>
    <div className="dark:bg-slate-900">
    <div className="container mx-auto flex-col md:flex-row h-full flex items-center justify-center gap-24 py-16 px-4">
      <div className="mt-5 h-full overflow-hidden rounded-full">
        <img src="https://images.unsplash.com/photo-1587778082149-bd5b1bf5d3fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NDUyNDk0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="mypic" className="object-cover block" />
      </div>
      <div className="mt-5 flex flex-col gap-3 justify-center md:w-3/5">
        <h2 className='text-indigo-600 font-bold uppercase'>About me</h2>
        <h2 className='text-3xl font-medium text-slate-900 dark:text-white'>Better Design</h2>
        <h2 className='text-3xl font-medium text-slate-900 dark:text-white'>Better Experience</h2>
        <p className="text-gray-400">
          I design and build digital products. I'm also a multi-disciplinary
          maker with over 10 years of experiences in wide range of design
          disciplines.
        </p>
        <h2 className="text-gray-400 font-medium">HTML</h2>
        <Progress value={97} />
        <h2 className="text-gray-400 font-medium">CSS</h2>
        <Progress value={95} />
        <h2 className="text-gray-400 font-medium">Bootstrap</h2>
        <Progress value={80} />
        <h2 className="text-gray-400 font-medium">Tailwind</h2>
        <Progress value={60} />
        <h2 className="text-gray-400 font-medium">React</h2>
        <Progress value={70} />
        <h2 className="text-gray-400 font-medium">Angular</h2>
        <Progress value={79} />
      </div>
    </div>
    </div>

<div className="dark:bg-slate-900">
    <div className="container mx-auto py-20">
      {/* top  */}
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-indigo-600 font-bold">SERVICES</h1>
        <h1 className="text-3xl dark:text-white">What do I offer?</h1>
        <p className="w-1/2 text-center text-gray-400">
          My approach to website design is to create a website that
          strengthens your company’s brand while ensuring ease of use and
          simplicity for your audience.
        </p>
      </div>
      {/* bottom  */}
      <div className="p-5 sm:p-0 flex flex-wrap justify-between">
        {/* card  */}
        <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
          <img className="w-10" src={Icon} alt="" />
          <h1 className="font-medium text-lg dark:text-white">UX / UI Design</h1>
          <p className="text-gray-400">
            I specialize in creating interactive websites for individuals and
            small businesses.
          </p>
          <a className="text-indigo-600 font-semibold text-sm" href="/#">Read More</a>
        </div>
        {/* card  */}
        <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
          <img className="w-10" src={Icon} alt="" />
          <h1 className="font-medium text-lg dark:text-white">UX / UI Design</h1>
          <p className="text-gray-400">
            I specialize in creating interactive websites for individuals and
            small businesses.
          </p>
          <a className="text-indigo-600 font-semibold text-sm" href="/#">Read More</a>
        </div>
        {/* card  */}
        <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
          <img className="w-10" src={Icon} alt="" />
          <h1 className="font-medium text-lg dark:text-white">UX / UI Design</h1>
          <p className="text-gray-400">
            I specialize in creating interactive websites for individuals and
            small businesses.
          </p>
          <a className="text-indigo-600 font-semibold text-sm" href="/#">Read More</a>
        </div>
        {/* card  */}
        <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
          <img className="w-10" src={Icon} alt="" />
          <h1 className="font-medium text-lg dark:text-white">UX / UI Design</h1>
          <p className="text-gray-400">
            I specialize in creating interactive websites for individuals and
            small businesses.
          </p>
          <a className="text-indigo-600 font-semibold text-sm" href="/#">Read More</a>
        </div>
        {/* card  */}
        <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
          <img className="w-10" src={Icon} alt="" />
          <h1 className="font-medium text-lg dark:text-white">UX / UI Design</h1>
          <p className="text-gray-400">
            I specialize in creating interactive websites for individuals and
            small businesses.
          </p>
          <a className="text-indigo-600 font-semibold text-sm" href="/#">Read More</a>
        </div>
        {/* card  */}
        <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
          <img className="w-10" src={Icon} alt="" />
          <h1 className="font-medium text-lg dark:text-white">UX / UI Design</h1>
          <p className="text-gray-400">
            I specialize in creating interactive websites for individuals and
            small businesses.
          </p>
          <a className="text-indigo-600 font-semibold text-sm" href="/#">Read More</a>
        </div>
      </div>
    </div>
    </div>


    {/* contact  */}
    <div id="contact" className="dark:bg-slate-900">
      <div className="container mx-auto">
        {/* top  */}
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-indigo-600 font-bold">CONTACT</h1>
          <h1 className="text-3xl dark:text-white">Have a Question?</h1>
          <p className="w-1/2 text-center text-gray-400">
            Do you have an idea? Let's discuss it and see what we can do
            together.
          </p>
        </div>
        {/* bottom  */}
        <form className="mt-5 p-8 flex flex-col gap-5 items-center">
          <input
            className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
            type="text"
            placeholder="Name Surname" />
          <input
            className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
            type="email"
            placeholder="Email" />
          <textarea
            className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
            cols="30"
            rows="10"
            placeholder="Message..."></textarea>
          <button
            className="w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 rounded-md cursor-pointer">
            Submit
          </button>
        </form>
      </div>
    </div>
  </>
  )
}

export default Home