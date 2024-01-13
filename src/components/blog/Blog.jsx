import blogStyles from './blog.css';
import blogImg01 from '../../assets/img/blog/blog-1.png';
import blogImg02 from '../../assets/img/blog/blog-2.png';
import BlogSwiper from '../blogSwiper/BlogSwiper';

const Blog = () => {
    return ( 
        <section id='blog' className="blog">
            <div className="container">
                <div className="blog__body">
                    <h2>Blog</h2>
                    <h4>Creative & Proffesional Creative Agency!</h4>
                    <BlogSwiper/>
                </div>
            </div>
        </section>
     );
}
 
export default Blog;