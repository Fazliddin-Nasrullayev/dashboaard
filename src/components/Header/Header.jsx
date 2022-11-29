import React from 'react';
import './Header.css'
import { Navigate, NavLink, Outlet } from 'react-router-dom'
import hambureger from '../../assets/img/hamburger1.svg'
import kubic from '../../assets/img/kubic.svg'
import key from '../../assets/img/key.svg'
import arrow from '../../assets/img/arrow.svg'
import user from '../../assets/img/user.svg'
import table from '../../assets/img/table.svg'
import options from '../../assets/img/option.svg'
import help from '../../assets/img/help.svg'
import plus from '../../assets/img/plus.svg'
import noti from '../../assets/img/noti.svg'
import teacher from '../../assets/img/teacher.svg'
import moon from '../../assets/img/moon.svg'

import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate()


    return (
        <div className='father_header'>
        <div className='header Header'>
          <div className="heading_hamburger">
            <img src={hambureger} alt="contact img" />  <h3 className='heading' >Dashboard</h3>
          </div>

          <div className="gruhlar_wrapper">
            <div className="group_wrapper">
                <img src={key} alt="gruop img" />
                <h3 className='headings'>Dashboard</h3>
            </div>
          </div>
          <div className="gruhlar_wrapper">
            <div className="group_wrapper">
                <img src={kubic} alt="gruop img" />
                <h3 className='headings'>Gruhlar</h3>
            </div>
            <img src={arrow} alt="arrow images" />
          </div>

          <div className="gruhlar_wrapper">
            <div className="group_wrapper">
                <img src={user} alt="gruop img" />
                <h3 className='headings'>O'quvchilar</h3>
            </div>
            <img src={arrow} alt="arrow images" />
          </div>

          <div className="gruhlar_wrapper">
            <div className="group_wrapper">
                <img src={table} alt="gruop img" />
                <h3 className='headings'>Dars jadvali</h3>
            </div>
            <img src={arrow} alt="arrow images" />
          </div>
          <div className="gruhlar_wrapper">
            <div className="group_wrapper">
                <img src={options} alt="gruop img" />
                <h3 className='headings'>Sozlamalar</h3>
            </div>
            <img src={arrow} alt="arrow images" />
          </div>
          <div className="gruhlar_wrapper">
            <div className="group_wrapper">
                <img src={help} alt="gruop img" />
                <h3 className='headings'>Yordam</h3>
            </div>
            <img src={arrow} alt="arrow images" />
          </div>
          <div className="teacher">
            <img src={teacher} alt="teacher images" />
            <div className="teacher_wrapper">
              <h3 className='teacher_name'>Turdiyev Sheroz</h3>
              <h3 className='teacher_job'>Frontend o'qtuvchi</h3>
            </div>
          </div>



          {/* asdfghjkl;'lkjhgfdkjdfdjfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj */}





        </div>
        <div className='header_right_wrapper'>
            <h3 className='headin_right'>Hello Sheroz👋,</h3>
            <div className='header_images'>
                <img className='deader_images-icon' src={moon} alt="moon images" />
                <img className='deader_images-icon' src={plus} alt="moon images" />
                <img className='deader_images-icon' src={noti} alt="moon images" />
                <input className='searching_input' type="text" placeholder='Qidiruv' />
            </div>
        </div>
        <Outlet />
        </div>
    );
};

export default Header;