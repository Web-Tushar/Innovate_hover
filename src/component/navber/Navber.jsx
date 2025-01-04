import React from 'react'

const Navber = () => {
     return (
          <div>
               <nav>
                    <div class="container">
                         <div class="nav_wrapper">
                              <div class="logo">
                                   <picture>
                                        <a href="#">
                                             <img src="../../images/Logo.png" alt="" />
                                        </a>
                                   </picture>
                              </div>
                              <div class="menu">
                                   <ul>
                                        <li>
                                             <a href="#">home</a>
                                        </li>
                                        <li>
                                             <a href="#">about</a>
                                        </li>
                                        <li>
                                             <a href="#">service</a>
                                        </li>
                                        <li>
                                             <a href="#">portfoilo</a>
                                        </li>
                                        <li>
                                             <a href="#">price</a>
                                        </li>
                                        <li>
                                             <a href="#">blog</a>
                                        </li>
                                   </ul>
                              </div>
                              <div class="nav">
                                   <a class="common_btn" href="#">Cotact us</a>
                              </div>

                         </div>
                    </div>

               </nav>

          </div>
     )
}

export default Navber