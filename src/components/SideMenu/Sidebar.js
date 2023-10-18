import './ssidebar.css';
import { RiSettingsLine } from "react-icons/ri";
import { GoKey } from "react-icons/go";
import {PiCube} from "react-icons/pi";
import {BsPerson} from "react-icons/bs";
import {CiWallet} from "react-icons/ci";
import {AiOutlineRight,AiOutlineDown} from "react-icons/ai";
import {LuBadgePercent} from "react-icons/lu";
import {TbMessageQuestion} from "react-icons/tb";
import img from '../images/rushi_image.jpg';

export const Sidebar = () => {

    return (
      <div className='sidebar1' >
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


        <div className='profile2'>
          <div className='img'><img src={img} alt="" /></div>
          <div className='info'>
            <p>Evano <br /> <p className='project'>Project Manager</p></p>
          </div>
          <AiOutlineDown className='AiOutlineDown'/>
        </div>
      </div>
    )
  }
