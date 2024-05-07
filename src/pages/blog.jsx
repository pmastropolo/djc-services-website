import { PER_PAGE } from './blog/page/[page]'
import PaginatedBlog from '@components/PaginatedBlog'
import Pagination from '@components/Pagination'

import CallToActionSection from "@components/sections/CallToAction";

import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";

import { getPaginatedPostsData } from "@library/posts";

const Blog = ( { posts, totalPosts, currentPage } ) => {
  return (
    <Layouts>
      <PageBanner pageTitle={"DJCservices Blog"} pageDesc={"Elevating construction and remodeling with our commitment to excellence."} />

      {/* Blog Style One Start */}
      <section className="gap blog-style-one our-blog-one">
        <div className="container">
          <div className="row">
            <PaginatedBlog
              items={posts}
            />
          </div>
        </div>

        <div className="container" >
          <div className="row">
            <Pagination
              currentPage={currentPage}
              totalItems={totalPosts}
              perPage={PER_PAGE}
              renderPageLink={(page) => `/blog/page/${page}`}
            />
          </div>
        </div>
      </section>
      {/* Blog Style One End */}

      <CallToActionSection />
      
    </Layouts>
  );
};
export default Blog;

export async function getStaticProps() {
  const { posts, total } = getPaginatedPostsData( PER_PAGE, 1 );

  return {
    props: {
      posts,
      totalPosts: total,
      currentPage: 1
    }
  }
}