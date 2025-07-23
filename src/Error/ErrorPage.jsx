import NotFound from '../assets/8632.jpg'
import React from 'react';
import style from './ErrorPage.module.css'

export default function ErrorPage() {
  return<>
    <img src={NotFound} alt="Error404" className={`${style.image}`}/>
  </>
}