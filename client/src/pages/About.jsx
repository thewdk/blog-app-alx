import React from 'react'

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About THIS Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to THIS Blog! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, delectus dolor voluptatibus facere eligendi, est possimus architecto impedit eum voluptate laudantium minus soluta enim. Sint voluptatum ex iure eaque quisquam.
            </p>

            <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sint autem consequuntur alias nisi quo molestiae at similique tenetur quis, ut molestias obcaecati debitis, itaque unde repellat vel rem nostrum?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque possimus voluptate architecto sed iusto nam reprehenderit sunt illum vitae pariatur. Voluptatibus, voluptatum? Repellat animi iste eveniet eum at ab quibusdam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

