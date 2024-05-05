import { extLatestPosts, extPosts, extTrendingPosts } from "./data"
import Posts from "./Posts"

export const LandingPosts=()=>{

  return (<>
    <section className="mb-2">
      <h1>Trending posts</h1>
      <div className="grid grid-cols-2 gap-1">
        <Posts posts={extTrendingPosts} />
      </div>
    </section>

    <section className="mb-2">
      <h1>Latest posts</h1>
      <div className="grid grid-cols-3 gap-1">
        <Posts posts={extLatestPosts} />
      </div>
    </section>
    <section className="mb-2">
      <h1>All posts</h1>
      <div className="grid grid-cols-2 gap-1">
        <Posts posts={extPosts}/>
      </div>
    </section>
  </>)
}