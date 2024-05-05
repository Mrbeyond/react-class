import { extPosts } from './data';
import { useParams } from 'react-router';

export default function PostDetails() {

  const params = useParams();
  const postId = params.id;

  const post = extPosts.find(post=>post.id === Number(postId))
  console.log(post, postId);

  return (<>
  
    {
      !post?
      <div> Post not found</div>
      :
      <div>
        <div className='mb-1'>
          <img className='w-full h-2h' src={post.coverImage} alt={`post-${post.id}`} />
        </div>

        <div className='mb-1 flex justify-between'>
          <span>{post.title}</span>
          <span>{Math.round(post.content.length/250)} Read</span>
        </div>
        <div  className='mb-1'>{post.author.name}</div>
        <div  className='p-2 block-format'>{post.content}</div>
        <div>
          <span>{post.likes} like(s)</span>
          <span>{post.comments} comment(s)</span>
        </div>
      </div>
    }


  </>
  )
}
