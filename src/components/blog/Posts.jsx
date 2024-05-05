
import { Link } from 'react-router-dom'

export default function Posts({posts=[]}) {

  return (<>

      {posts && posts.map((post)=>(
        <Link  to={`/${post.id}`} key={post.id}  className='mb-4'>
          <div>
            <div className='mb-1'>
              <img className='w-full h-2h'  src={post.coverImage} alt={`post-${post.id}`} />
            </div>

            <div className='mb-1'>{post.title}</div>
            <div className='mb-1'>{post.author.name}</div>
            <div className='flex justify-between'>
              <span >{post.likes} like(s)</span>
              <span>{post.comments} comment(s)</span>
            </div>
          </div>
        </Link>

      ))}

  </>
  )
}
