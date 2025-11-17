import React from 'react'
import SearchForm from '../../components/SearchForm'
import StartupCard from '../../components/StartupCard'

const page = async ({searchParams}: {
  searchParams: Promise<{query?: string}>
}) => {
  const query = (await searchParams).query

  const posts = [{
    _createdAt: new Date().toISOString(),
    views: 55,
    author:{ _id: 1, name: 'Quang'},
    _id: 1,
    description: 'Fake desc',
    image: 'https://picsum.photos/150/150',
    category: "Nature",
    title: 'We bare bears'
  }]
  return (
    <>
    <section className='pink_container pattern'>
      <h1 className='heading'>Pitch Your Startup, <br/> Connect With Entrepreneurs</h1>
      <p className='font-medium text-[20px] text-white max-w-3xl text-center break-words'>Join a community of founders and investors to pitch your startup, get feedback, and connect with like-minded individuals.</p>
        <SearchForm query={query}/>
    </section>

    <section className="section_container">
      <p className="font-semibold font-work-sans text-[30px] text-black">
        {query ? `Search results for "${query}"` : 'All Startups'}
      </p>

      <ul className='mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {posts?.length > 0 ? (
          posts.map((post: StartupTypeCard, index: number) => (
            <StartupCard key={post?._id} post={post} />
          ))
        ):(
          <p className='text-black-100 text-sm font-normal font-work-sans'>No posts found</p>
        )}
      </ul>
    </section>
    </>
  )
}

export default page