import Layouts from "@layouts/Layouts";

import { getAllPostsIds, getPostData, getRelatedPosts } from "@library/posts";
import Date from '@library/date';
import ImageView from "@components/ImageView";

import PageBanner from "@components/PageBanner";

const PostsDetail = ( props ) => {
  
  const postData = props.data;

  return (
    <Layouts>
      <PageBanner pageTitle={"Blog"} pageDesc={"Building Dreams, Remodeling Futures: Where Vision Meets Craftsmanship"} />

      {/* Blog Style Three Start */}
      <section className="gap blog-style-one blog-detail detail-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-post ">
                <div className="blog-image">
                  <figure>
                    <img src={postData.image} alt={postData.title} />
                  </figure>
                </div>
                <div className="blog-data">
                  <span className="blog-date"><Date dateString={postData.date} /></span>
                  <h2>{postData.title}</h2>
                  <div className="blog-author d-flex-all justify-content-start">
                    <div className="author-img">
                      <figure>
                        <img src={postData.author.avatar} alt={postData.author.name} />
                      </figure>
                    </div>
                    <div className="details">
                      <h3> <span>by</span> {postData.author.name}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="blog-detail-content" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

                {typeof postData.gallery != "undefined" &&
                  <>
                    {postData.gallery.enabled == 1 &&
                      <div className="row justify-content-center">
                          {postData.gallery.items.map((item, key) => (
                          <div key={`gallery-item-${key}`} className={ postData.gallery.cols == 3 ? "col-lg-4" : "col-lg-6"}>
                            <figure>
                              <a data-fancybox="gallery" href={item.image}>
                                <img src={item.image} alt={item.alt} />
                              </a>
                            </figure>
                          </div>
                          ))}
                      </div>
                    }
                  </>
                }

                {typeof postData.additional != "undefined" &&
                  <>
                    {postData.additional.enabled == 1 &&
                    <div className="blog-detail-content" dangerouslySetInnerHTML={{ __html: postData.additional.content }} />
                    }
                  </>
                }

                <div className="category shape">
                  <p>Posted in {postData.category.map((cat, key) => (<a key={`category-item-${key}`}>{cat}</a>))}</p>
                </div>

                <div className="category shape social-medias">
                    <p>
                      Share this:
                    </p>
                    <ul>
                      <li><a href="#" onClick={(e) => {e.preventDefault();}}>Facebook</a></li>
                    </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <aside className="sidebar">
                <div className="box recent-posts">
                  <h3>Recent Posts</h3>
                  <ul>
                    <li>
                      <p>Privacy And Style In Backyard Retreats</p>
                      <a href="/blog/elevating-privacy-and-style-in-backyard-retreats">
                        <i className="fa-solid fa-arrow-up-long"></i>
                      </a>
                    </li>
                    <li>
                      <p>Back Patio Makeover | From Vision To Reality</p>
                      <a href="/blog/back-patio-makeover">
                        <i className="fa-solid fa-arrow-up-long"></i>
                      </a>
                    </li>
                    <li>
                      <p>A Stunning Kitchen Remodel From Scratch</p>
                      <a href="/blog/a-stunning-kitchen-remodel-from-scratch">
                        <i className="fa-solid fa-arrow-up-long"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="box categories">
                  <h3>Categories</h3>
                  <ul>
                    <li>
                      <a href="#" onClick={(e) => {e.preventDefault();}}>
                        <p>Interior</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => {e.preventDefault();}}>
                        <p>Exterior</p>
                      </a>
                    </li>
                  </ul>
                </div>

        
              </aside>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Style Three End */}
      
      <ImageView />
    </Layouts>
  );
};
export default PostsDetail;

export async function getStaticPaths() {
    const paths = getAllPostsIds()

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    const relatedPosts = await getRelatedPosts(params.id)

    return {
      props: {
        data: postData,
        related: relatedPosts
      }
    }
}