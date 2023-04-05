import './menu.css';
const Menu =()=>{
    return(
        <div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div className="sidebar"><center>
            <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669218444/banner_n6mzgs.png" style={{width: '100px'}} />
            <h1>OMG MENU</h1>
            {/* <a class="active" href="#home">Home</a> */}
            <a href="#BURGERS">BURGERS</a>
            <a href="#PIZZA">PIZZA</a>
            <a href="#BEVRAGES">BEVRAGES</a>
          </center></div>
        <div className="contents">
          <center><h1><b>MENU</b></h1></center>
          <h2 id="BURGERS">BURGERS</h2>
          <div className="butty">
            <div className="pal">
              <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669192783/a1_ye1ajp.jpg" alt="BURGER" style={{height: '300px', width: '300px'}} />
              <h3 className='Title'>DOUBLE CHEESY BURGER</h3>
              <p className="price">₹100</p>
              <center><p><button>Add to Cart🛒</button></p></center>
            </div>
            <div className="pal">
              <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669192783/a1_ye1ajp.jpg" alt="BURGER" style={{height: '300px', width: '300px'}} />
              <h3 className='Title'>BLACK BEAN BURGER</h3>
              <p className="price">₹120</p>
              <p><button>Add to Cart🛒</button></p>
            </div>
            <div className="pal">
              <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669192749/9_b5233l.jpg" alt="BURGER" style={{height: '300px', width: '300px'}} />
              <h3 className='Title'>VEGGIE BURGER</h3>
              <p className="price">₹80</p>
              <p><button>Add to Cart🛒</button></p>
            </div>
          </div>  
          <div className="butty">
            <div className="pal">
              <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669192749/8_nkn44c.jpg" alt="BURGER" style={{height: '300px', width: '300px'}} />
              <h3 className='Title'>CHEESY BURGER</h3>
              <p className="price">₹100</p>
              <p><button>Add to Cart🛒</button></p>
            </div>
            <div className="pal">
              <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669192748/7_skqlnj.webp" alt="BURGER" style={{height: '300px', width: '300px'}} />
              <h3 className='Title'>CHICKEN BURGER</h3>
              <p className="price">₹120</p>
              <p><button>Add to Cart🛒</button></p>
            </div>
            <div className="pal">
              <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669192783/a3_kjezwy.jpg" alt="BURGER" style={{height: '300px', width: '300px'}} />
              <h3 className='Title'>MEXICAN BURGER</h3>
              <p className="price">₹80</p>
              <p><button>Add to Cart🛒</button></p>
            </div>
          </div>
          <h2 id="PIZZA">PIZZA</h2>
          <div className="butty">
            <div className="pal">
              <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669192819/P1_o5zfgg.png" alt="BURGER" style={{height:'300px',width: '300px'}} />
              <h3 className='Title'>MUSHROOM TIKKA PIZZA</h3>
              <p className="price">₹120</p>
              <p><button className='btnn'>Add to Cart🛒</button></p>
            </div>
            <div className="pal">
              <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669192819/P2_axtsbx.jpg" alt="BURGER" style={{height: '300px', width: '300px'}} />
              <h3 className='Title'>FARM HOUSE PIZZA</h3>
              <p className="price">₹180</p>
              <p><button className='btnn'>Add to Cart🛒</button></p>
            </div>
            <div className="pal">
              <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669192820/P3_nezuk2.jpg" alt="BURGER" style={{height: '300px', width: '300px'}} />
              <h3 className='Title'>SPINACH PIZZA</h3>
              <p className="price">₹110</p>
              <p><button className='btnn'>Add to Cart🛒</button></p>
            </div>
          </div>  
          <div className="butty">
            <div className="pal">
              <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669192819/P4_m9geyx.jpg" alt="BURGER" style={{height: '300px', width: '300px'}} />
              <h3 className='Title'>PANNER TIKKA PIZZA</h3>
              <p className="price">₹190</p>
              <p><button>Add to Cart🛒</button></p>
            </div>
            <div className="pal">
              <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669192820/P5_vdh6og.jpg" alt="BURGER" style={{height: '300px', width: '300px'}} />
              <h3 className='Title'>VEGGIE PIZZA</h3>
              <p className="price">₹180</p>
              <p><button>Add to Cart🛒</button></p>
            </div>
            <div className="pal">
              <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669192826/P6_w9nucf.jpg" alt="BURGER" style={{height: '300px', width: '300px'}} />
              <h3 className='Title'>MARGHERITA</h3>
              <p className="price">₹80</p>
              <p><button>Add to Cart🛒</button></p>
            </div>
          </div>
          <h2 id="BEVRAGES">BEVRAGES</h2>
          <div className="butty">
            <div className="pal">
              <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669192792/B1_rlnd0h.jpg" alt="BURGER" style={{height:'300px',width: '300px'}} />
              <h3 className='Title'>COCA COLA 250ML</h3>
              <p className="price">₹45</p>
              <p><button>Add to Cart🛒</button></p>
            </div>
            <div className="pal">
              <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669192793/B2_dxmhku.png" alt="BURGER" style={{height: '300px', width: '300px'}} />
              <h3 className='Title'>RED BULL 250ML</h3>
              <p className="price">₹110</p>
              <p><button>Add to Cart🛒</button></p>
            </div>
            <div className="pal">
              <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669192792/B3_vfnvon.jpg" alt="BURGER" style={{height: '300px', width: '300px'}} />
              <h3 className='Title'>MONSTER 350ML</h3>
              <p className="price">₹110</p>
              <p><button>Add to Cart🛒</button></p>
            </div>
          </div>      
        </div>
      </div>
    )
};
export default Menu;