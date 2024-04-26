import React from 'react';
import { FaEnvelope, FaUser,  FaCogs } from 'react-icons/fa';
import Badge from '../badge';
import dippilogo from '../../../assets/images/dippilogo.png'
import { FaRegCalendar } from "react-icons/fa6";
import { IoMdCheckboxOutline } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import './index.css'

interface HeaderProps {
  logoUrl: string;
  profileImage: string;
  profileStatus: 'online' | 'offline';
}

const DippiHeader: React.FC<HeaderProps> = ({  profileImage, profileStatus }) => {
  return (
    <header className="the-header">
      <div className="the-header-left">
        <FaRegCalendar />
        <IoMdCheckboxOutline/>
        <FaEnvelope  className="icon" />
        <FaRegMessage />
      </div>

      <div className="header-center">
        <img src={dippilogo} alt="Logo" className="dippilogo" />
      </div>

      <div className="the-header-right">
        <FaUser className="icon" />
        <FaCogs className="icon" />

        {/* Badge de perfil */}
        <Badge
          image={profileImage}
          status={profileStatus}
          className="profile-badge"
        />
      </div>
    </header>
  );
};

export default DippiHeader;
