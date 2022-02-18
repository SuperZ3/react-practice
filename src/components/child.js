import React, { useCallback, useEffect, useState } from 'react';
import {useHash,useMount} from 'react-use';

const c = ['asfdaf']

const Child = ({nav, onActiveNavChange}) => {
  useEffect(() => {
    const windowHeight = window.innerHeight
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target, intersectionRatio, intersectionRect } = entry
        const { top } = intersectionRect
        if (intersectionRatio > 0 && top > 0 && top < windowHeight / 2) {
          onActiveNavChange(target.innerHTML)
        }
      })
    }, {
      root: null,
      threshold: [0.25, 0.5, 0.75, 1],
    })
    nav.forEach((navName) => {
      const currentElement = document.querySelector(`#${navName}`)
      observer.observe(currentElement)
    })
    return () => {
      observer.disconnect()
    }
  }, [nav, onActiveNavChange])
  console.log(123)
  return (
    <div>
      {nav.map(n => {
        return <div className={'child-div'} id={`${n}`} key={n} onClick={(e) => e.currentTarget.scrollIntoView()}>{n}</div>
      })}
    </div>
  );
}

export default React.memo(Child)
