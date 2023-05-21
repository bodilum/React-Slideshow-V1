import React, { Children, cloneElement, useState } from 'react';

export default function SlideShow( { children }) {

  const arrayChildren = Children.toArray( children );
  const count = Children.count( children );

  const [curSlideIndex, setCurSlideIndex] = useState(0);

  const slideBtnStyle = {
    width: `${ 100 / count }%`
  }

  return (
    <>
    <ul>
        { Children.map( arrayChildren, (child, index) => { 
        return (
        <li key={ index } className={ `${ curSlideIndex === index ? "active-slide" : "" }` }>
          <img src={ "/" + child.props.img_url } alt={ "Image of " + child.props.caption } />
          <div className='img-info'>
            <span className="img-caption">{ child.props.caption }</span>
            <span className="img-description">{ child.props.description }</span>
          </div>
        </li>
        )
        } ) }
    </ul>
    <nav aria-label="Image Slide Accesscibiity Navigation" className="slide-navigation" role="navigation">
      { Children.map( arrayChildren, (child, index) => { 
        
          return <div key={index}  className={ `${ curSlideIndex === index ? "active-slide slide-button" : "slide-button" }` } aria-label="Slide" 
          style={ slideBtnStyle } onClick={ () => setCurSlideIndex(index) }></div>

      } ) }
      
    </nav>
    </>
  )
}
