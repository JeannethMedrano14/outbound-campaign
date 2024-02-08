import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
  
    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };
  