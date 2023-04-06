import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image from 'next/image';

import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

import { db } from '@/firebaseConfig';

const Portfolio = () => {

  const [events, setEvents] = useState([])

  useEffect(() => {
    const collectionRef = collection(db, 'events');
    const q = query(collectionRef, orderBy('title', 'desc'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setEvents(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, timestamp: doc.data().timestamp?.toDate().getTime() })))
    });

    return unsubscribe

  }, [])

  return (
    <div id='portfolio' className='bg-black'>
      <div>
        <h1 className='text-center text-thistle font-bold text-l'>
          Here are some of my work
        </h1>
      </div>

      <div className='flex flex-row p-5 justify-between w-screen h-fit'>
        <div className='flex flex-col justify-between pr-5'>
          <div className='w-screen'>
            <div>
              {
                events.map(event => <div 
                  key={event.id}
                  className='bg-rviolet rounded-2xl shadow-xl p-8 w-3/4 m-auto mb-4'
                >
                  <div className='text-thistle'>{event.title}</div>
                    <div>
                      <Slider
                        dots={true}
                        infinite={true}
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={1}
                        adaptiveHeight={true}
                      >
                        {
                          event.images?.map(file => (
                            <div className='relative w-full h-96'> 
                              <Image 
                                src={file}
                                fill
                                style={{
                                  objectFit: "contain"
                                }}
                                alt='Images'
                              />
                            </div>
                          ))
                        }
                      </Slider>  
                    </div>
                </div>)
              }
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio