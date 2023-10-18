import "./hheader.css";
import { RiSettingsLine } from "react-icons/ri";
import { GoKey } from "react-icons/go";
import {PiCube} from "react-icons/pi";
import {BsPerson} from "react-icons/bs";
import {CiWallet} from "react-icons/ci";
import {AiOutlineRight,AiOutlineDown} from "react-icons/ai";
import {LuBadgePercent} from "react-icons/lu";
import {TbMessageQuestion} from "react-icons/tb";
import img from '../images/rushi_image.jpg';
import {PiHandWaving} from "react-icons/pi";
import {FiSearch} from "react-icons/fi";
import {FiMenu} from "react-icons/fi";
import item1 from '../images/item1.jpg';
import item2 from '../images/item2.jpg';
import item3 from '../images/item6.jpg';
import item4 from '../images/item4.jpg';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import row1 from '../images/row1.jpg';
import row2 from '../images/row2.jpg';

import { useState } from "react";

export const Header = () => {

  const [open, setOpen] = useState(false);

  return (

    <div className="main">

    <FiMenu className='FiMenu' onClick={()=>{setOpen(!open)}}/>
      <div className={`sidebar ${open? 'active' :'inactive'} `} >
        <div className="sidebar-container">
        <div className='dashboard'><p><RiSettingsLine className='RiSettingsLine' />Dashboard</p></div>
        <div className="menu-list">
          <li>
          <div className='ab1'><p><GoKey className='li-font-sq1' />Dashboard </p><AiOutlineRight className='AiOutlineRight'/></div>
          <div className='ab'><p><PiCube className='li-font-sq' />Product </p><AiOutlineRight className='AiOutlineRight1'/></div>
          <div className='ab'><p><BsPerson className='li-font-sq' />Customer</p><AiOutlineRight className='AiOutlineRight2'/></div>
          <div className='ab'><p><CiWallet className='li-icon' />Income</p><AiOutlineRight className='AiOutlineRight3'/></div>
          <div className='ab'><p><LuBadgePercent className='li-icon' />Promote</p><AiOutlineRight className='AiOutlineRight4'/></div>
          <div className='ab'><p><TbMessageQuestion className='li-icon' />Help</p><AiOutlineRight className='AiOutlineRight5'/></div>
          </li>
        </div>


        <div className='profile1'>
          <div className='img'><img src={img} alt="" /></div>
          <div className='info'>
            <p>Evano <br /> <p className='project'>Project Manager</p></p>
          </div>
          <AiOutlineDown className='AiOutlineDown'/>
        </div>
        </div>
      </div>


    <div className="page-content">
    <div className="header">
        <h4>Hello Shahrukh <PiHandWaving className="PiHandWaving"/>,</h4>
        <span className="search"><FiSearch className="FiSearch"/>Search</span>
    </div>

    <div className="four-grid-container">
      <div className="item"><img src={item1} alt="" /></div>
      <div className="item"><img src={item2} alt="" /></div>
      <div className="item"><img src={item3} alt="" /></div>
      <div className="item"><img src={item4} alt="" /></div>
    </div>

    <div className="two-grid-container">
      <div className="big"><img src={img1} alt="" /></div>
      <div className="small"><img src={img2} alt="" /></div>
    </div>

    <div className="product-table">
      <div className="table-header">
        <p className="sell">Product Sell</p>
        <p className="two-group">
        <span className="search"><FiSearch className="FiSearch"/>Search</span>
        <span className="search1">Last 30 days<AiOutlineDown className="FiSearch"/></span>
        </p>
      </div>
        <table>
          <th>Product Name</th>
          <span>
          <th>Stock</th>
          <th>Price</th>
          <th>Total Sales</th>
          </span>
        </table>
        <div className="line"></div>
        <table>
          <th className="img-container"><img src={row1} alt="" /></th>
          <span>
          <td>32 in stock </td>
          <td>$ 45.99</td>
          <td>20</td>
          </span>
        </table>
        <table>
          <th className="img-container"><img src={row2} alt="" /></th>
          <span>
          <td>32 in stock </td>
          <td>$ 45.99</td>
          <td>20</td>
          </span>
        </table>
    </div>

    </div>



    </div>
  )
}
