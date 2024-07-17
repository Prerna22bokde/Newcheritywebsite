import React from "react";
import "./Footer.css";
import story from "../Images/story.jpg";
import gallery from "../Images/gallery_3.jpg";
import news from "../Images/news1.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdMarkUnreadChatAlt } from "react-icons/md";
import { MDBFooter } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      className="text-center text-lg-start text-muted"
      style={{ backgroundColor: "rgb(66, 66, 66)", color: "white" }}
    >
      <div className="section">
        <div className="aboutus">
          <h2>ABOUT US</h2>

          <p className="about-lead">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, ther live the blind texts.{" "}
          </p>

          <p className="about-short">
            Seperated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.{" "}
          </p>
          <a href="/">Read More</a>
        </div>

        <div className="recent-blog">
          <h2>Recent Blog</h2>

          <div className="recent">
            <div className="row-card ">
              <div className="sec1">
                <img src={story} alt="" className="w-5rem " />
              </div>

              <div className="sec-2">
                <p>Water Is Life. Clean Water In Urban Area</p>

                <div className="date">
                  <p>
                    <FaCalendarAlt className="icon" />
                    <span>July 29,2018</span>
                    <IoPerson className="icon" />
                    <span>Admin</span>
                    <MdMarkUnreadChatAlt className="icon" /> <span>19</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="row-card">
              <div className="sec1">
                <img src={gallery} alt="" />
              </div>

              <div className="sec-2">
                <p>Water Is Life. Clean Water In Urban Area</p>

                <div className="date">
                  <p>
                    <FaCalendarAlt className="icon" />
                    <span>July 29,2018</span>
                    <IoPerson className="icon" />
                    <span>Admin</span>
                    <MdMarkUnreadChatAlt className="icon" /> <span>19</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="row-card">
              <div className="sec1">
                <img src={news} alt="" />
              </div>

              <div className="sec-2">
                <p>Water Is Life. Clean Water In Urban Area</p>

                <div className="date">
                  <p>
                    <FaCalendarAlt className="icon" />
                    <span>July 29,2018</span>
                    <IoPerson className="icon" />
                    <span>Admin</span>
                    <MdMarkUnreadChatAlt className="icon" /> <span>19</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="get-connected">
          <h2>Get Connected</h2>

          <div className="detail">
            <p>
              <FaLocationDot className="icon-detail" />
              203 Fake st.mounrtain view,san francisco, californoa, usa{" "}
            </p>

            <p className="icon-detail">
              <IoIosCall className="icon-detail" />
              +2 392 3929 210{" "}
            </p>

            <p className="icon-detail">
              <IoMdMail className="icon-detail" />
              info@yourdomain.com{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>
          Copyright ©2024 All rights reserved | This template is made with ❤️ by{" "}
          <span> Colorlib</span>
        </p>
      </div>
    </MDBFooter>
  );
}

// import React from "react";
// import "./Footer.css";
// import story from "../Images/story.jpg";
// import gallery from "../Images/gallery_3.jpg";
// import news from "../Images/news1.jpg";
// import { FaLocationDot } from "react-icons/fa6";
// import { IoIosCall } from "react-icons/io";
// import { IoMdMail } from "react-icons/io";
// import { FaCalendarAlt } from "react-icons/fa";
// import { IoPerson } from "react-icons/io5";
// import { MdMarkUnreadChatAlt } from "react-icons/md";

// export default function Footer() {
//   return (
//     <>
//       <div className="footer">
//         <div className="section">
//           <div className="aboutus">
//             <h2>ABOUT US</h2>
//             <p className="about-lead">
//               Far far away, behind the word mountains, far from the countries
//               Vokalia and Consonantia, ther live the blind texts.
//             </p>
//             <p className="about-short">
//               Seperated they live in Bookmarksgrove right at the coast of the
//               Semantics, a large language ocean.
//             </p>
//             <a href="#">Read More</a>
//           </div>
//           <div className="recent-blog">
//             <h2>Recent Blog</h2>
//             <div className="recent">
//               <div className="row-card ">
//                 <div className="sec-1">
//                   <img src={story} alt="" className="w-5rem " />
//                 </div>
//                 <div className="sec-2">
//                   <p>Water Is Life. Clean Water In Urban Area</p>
//                   <div className="date">
//                     <p>
//                       <FaCalendarAlt className="icon" />
//                       <span>July 29,2018</span>
//                       <IoPerson className="icon" />
//                       <span>Admin</span>
//                       <MdMarkUnreadChatAlt className="icon" /> <span>19</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="row-card">
//                 <div className="sec-1">
//                   <img src={gallery} alt="" />
//                 </div>
//                 <div className="sec-2">
//                   <p>Water Is Life. Clean Water In Urban Area</p>
//                   <div className="date">
//                     <p>
//                       <FaCalendarAlt className="icon" />
//                       <span>July 29,2018</span>
//                       <IoPerson className="icon" />
//                       <span>Admin</span>
//                       <MdMarkUnreadChatAlt className="icon" /> <span>19</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="row-card">
//                 <div className="sec-1">
//                   <img src={news} alt="" />
//                 </div>
//                 <div className="sec-2">
//                   <p>Water Is Life. Clean Water In Urban Area</p>
//                   <div className="date">
//                     <p>
//                       <FaCalendarAlt className="icon" />
//                       <span>July 29,2018</span>
//                       <IoPerson className="icon" />
//                       <span>Admin</span>
//                       <MdMarkUnreadChatAlt className="icon" /> <span>19</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="get-connected">
//             <h2>Get Connected</h2>
//             <div className="detail">
//               <p>
//                 <FaLocationDot className="icon-detail" />
//                 203 Fake st.mounrtain view,san francisco, californoa, usa
//               </p>
//               <p className="icon-detail">
//                 <IoIosCall className="icon-detail" />
//                 +2 392 3929 210
//               </p>
//               <p className="icon-detail">
//                 <IoMdMail className="icon-detail" />
//                 info@yourdomain.com
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="copyright">
//           <p>
//             Copyright ©2024 All rights reserved | This template is made with ❤️
//             by
//             <span> Colorlib</span>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }
