import Layouts from "@layouts/Layouts";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";
import Pagination from "@components/Pagination";
import PaginatedCategory from '@components/PaginatedCategory'

const PER_PAGE = 6;

const CategoryPage = () => {
        const router = useRouter();
        const { category } = router.query;
        const [posts, setPosts] = useState([]);
        const [currentPage, setCurrentPage] = useState(1);
        const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    // Fetch posts for the selected category
    async function fetchPosts() {
      try {
        const response = await fetch(`/api/getPostsByCategory?category=${category}`);
        if (response.ok) {
          const postsData = await response.json();
          setPosts(postsData);
        } else {
          console.error('Failed to fetch posts:', response.statusText);
        }
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    }

    if (category) {
      fetchPosts();
    }
  }, [category]);

  // Function to handle page change
  const handlePageChange = (page) => {
        setCurrentPage(page);
      };
    
      // Calculate the index of the first post to be displayed on the current page
      const startIndex = (currentPage - 1) * PER_PAGE;
    
      // Slice the posts array to get the posts for the current page
      const displayedPosts = posts.slice(startIndex, startIndex + PER_PAGE);


  return (
    <Layouts>
        <PageBanner pageTitle={"Category | " + category} pageDesc={"Explore blog articles related to " + category} />

        <section className="gap blog-style-one our-blog-one">
        <div className="container">
          <div className="row">

          <h1>Category | {category}</h1>


          <PaginatedCategory
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

      <CallToActionSection />

    </Layouts>
  );
};

export default CategoryPage;